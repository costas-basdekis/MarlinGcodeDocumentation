import itertools
import json
import os
import re

import six.moves.urllib.parse
import six.moves.urllib.request
import wikitextparser as wtp

from octoprint_marlingcodedocumentation.updater import \
    DocumentationUpdater
from ..base_parser import BaseDocumentationParser


__all__ = ['ReprapGcodeDocumentationParser']


@DocumentationUpdater.register_parser
class ReprapGcodeDocumentationParser(BaseDocumentationParser):
    ID = "reprap"
    SOURCE = "RepRap"
    GCODE_URL = "https://reprap.org/wiki/G-code"
    # noinspection SpellCheckingInspection
    SOURCE_URL = (
        "https://reprap.org/mediawiki/api.php"
        "?action=parse&page=G-code&prop=wikitext&formatversion=2&format=json"
    )
    HTTP_USER_AGENT = "marlingcodedocumentation"

    def load_and_parse_all_codes(self, directory):
        with self.latest_documentation_directory(directory) as directory:
            source = self.load_documentation(directory)
        return self.parse_documentation(source)

    def populate_temporary_directory(self, directory):
        opener = six.moves.urllib.request.URLopener()
        # noinspection PyUnresolvedReferences
        opener.addheader('User-Agent', self.HTTP_USER_AGENT)
        with opener.open(self.SOURCE_URL) as f:
            page = json.load(f)

        path = os.path.join(directory, "reprap-gcode-wiki-source.txt")
        with open(path, "wb") as f:
            f.write(page['parse']['wikitext'].encode())

        return path

    def load_documentation(self, path):
        with open(path, "rb") as f:
            source = f.read().decode()

        return source

    TOP_SECTION_TITLES = [
        'G-commands',
        'M-commands',
    ]

    def parse_documentation(self, source):
        parsed = wtp.parse(source)

        gcode_wiki_sections = [
            wiki_section
            for wiki_section in parsed.sections
            if wiki_section.title
            and any(
                title in wiki_section.title
                for title in self.TOP_SECTION_TITLES
            )
        ]
        commands = list(filter(None, (
            self.parse_command(wiki_section)
            for gcode_wiki_section in gcode_wiki_sections
            for wiki_section in gcode_wiki_section.get_sections(False)
            if wiki_section.level >= 4
        )))

        # noinspection PyUnresolvedReferences
        return {
            code: [value for _, value in values]
            for code, values in itertools.groupby(sorted((
                (code, command)
                for command in commands
                for code in command["codes"]
            ), key=self._get_code), key=self._get_code)
        }

    def _get_code(self, code_and_command):
        code, _ = code_and_command
        return code

    RE_COMMAND = re.compile(r'^([A-Z]-?\d+(\.\d+)?)\s')

    def parse_command(self, wiki_section):
        title = wiki_section.title
        if title:
            title = title.strip()
        if not title:
            return None

        commands = self.parse_commands(title)
        if not commands:
            return None

        lines = list(filter(None, wiki_section.contents.splitlines()))
        if not lines:
            return None

        sections_list = self.parse_sections(lines)
        sections = {
            section["title"]: section["lines"]
            for section in reversed(sections_list)
            if section["lines"]
        }
        if not sections:
            return None

        if '' in sections:
            brief_lines = [
                line
                for line in sections['']
                if not any(
                    template.name.strip() == 'Firmware Support'
                    for template in wtp.parse(line).templates
                )
            ]
            brief = wtp.parse("\n".join(brief_lines)).plain_text()
        else:
            brief = ""

        if ';Parameters' in sections:
            parameter_lines = [
                line
                for line in sections[';Parameters']
                if line.strip().startswith(':')
                and wtp.parse(line).get_tags('code')
            ]
            parameters = [
                self.parse_parameter(line)
                for line in parameter_lines
            ]
        else:
            parameters = []

        return {
            "title": title,
            "brief": brief,
            "codes": commands,
            "related": [],
            "parameters": parameters,
            "source": self.SOURCE,
            "url": self.generate_url(title),
        }

    def parse_commands(self, title):
        if ':' in title:
            commands_str = title.split(':')[0].strip()
        else:
            match = self.RE_COMMAND.match(title)
            if not match:
                return None
            commands_str = match.group(1)
        if '&' in commands_str:
            commands = [
                command.strip()
                for command in commands_str.split('&')
            ]
        elif '..' in commands_str:
            start_str, end_str = commands_str.replace('G', '').split('..')
            start, end = int(start_str), int(end_str)
            commands = [
                'G{}'.format(number)
                for number in range(start, end + 1)
            ]
        else:
            commands = [commands_str]

        return commands

    def parse_sections(self, lines):
        section_indexes = [
            index
            for index, line in enumerate(lines)
            if line.startswith(';')
        ]
        if not section_indexes:
            return [
                {
                    "title": "",
                    "lines": lines,
                },
            ]

        return [
                   {
                       "title": "",
                       "lines": lines[:section_indexes[0]],
                   },
               ] + [
                   {
                       "title": lines[index],
                       "lines": lines[index + 1:section_index],
                   }
                   for index, section_index
                   in zip(section_indexes, section_indexes[1:] + [len(lines)])
               ]

    def parse_parameter(self, line):
        parsed = wtp.parse(line)
        parameter_code = parsed.get_tags('code')[0]
        line = str(line[1:]).replace(str(parameter_code), '')
        for tag in parsed.get_tags('sup'):
            line = line.replace(str(tag), '')
        line = wtp.parse(line).plain_text()
        return {
            "tag": parameter_code.contents[0],
            "optional": True,
            "description": line,
            "values": [],
            "label": parameter_code.contents,
        }

    def generate_url(self, title):
        _hash = six.moves.urllib.parse\
            .quote_plus(title, safe=':')\
            .replace('+', '_')\
            .replace('%', '.')

        return f"{self.GCODE_URL}#{_hash}"
