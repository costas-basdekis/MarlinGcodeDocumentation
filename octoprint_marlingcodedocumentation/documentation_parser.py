import contextlib
import glob
import itertools
import json
import os
import re
import tempfile
import zipfile

import six.moves.urllib.parse
import six.moves.urllib.request

import yaml
from six import iteritems
import wikitextparser as wtp


class DocumentationUpdater(object):
    """Manage updating the documentation from all parsers"""
    JS_PREFIX = "window.AllGcodes = "

    PARSERS = {}
    SOURCES = set()

    @classmethod
    def register_parser(cls, parser):
        cls.PARSERS[parser.ID] = parser
        cls.SOURCES.add(parser.SOURCE)

        return parser

    def update_documentation(self, directories, js_path=None):
        if js_path is None:
            js_path = os.path.join(
                os.path.dirname(__file__), "static", "js", "all_codes.js")
        codes_list = []
        ids_to_update = set()
        for _id, parser in self.PARSERS.items():
            if directories is None:
                directory = None
            else:
                if _id not in directories:
                    continue
                directory = directories[_id]
            gcodes = parser().load_and_parse_all_codes(directory)
            self.attach_id_to_docs(gcodes)
            codes_list.append(gcodes)
            ids_to_update.add(parser.ID)
        if not codes_list:
            raise Exception("No sources set to be updated")
        if set(self.PARSERS) - ids_to_update:
            all_codes = self.load_existing_codes(ids_to_update, js_path)
        else:
            all_codes = {}
        self.merge_codes(all_codes, codes_list)
        self.sort_codes(all_codes)
        self.save_codes_to_js(all_codes, js_path)

    def attach_id_to_docs(self, codes):
        for code in list(codes):
            codes[code] = [
                dict(value, **{
                    "id": f"{value['source']}.{code}[{index}]"
                })
                for index, value in enumerate(codes[code])
            ]

    def load_existing_codes(self, ids_to_update, js_path):
        with open(js_path) as f:
            prefix = f.read(len(self.JS_PREFIX))
            if prefix != self.JS_PREFIX:
                raise Exception(
                    f"Prefix in JS file ('{prefix}') didn't match expected "
                    f"prefix ('{self.JS_PREFIX}')")
            all_codes = json.load(f)
        sources_to_update = [
            self.PARSERS[_id].SOURCE
            for _id in ids_to_update
        ]
        for code, values in list(all_codes.items()):
            all_codes[code] = [
                value
                for value in values
                if value["source"] not in sources_to_update
            ]
        return all_codes

    def merge_codes(self, all_codes, codes_list):
        for codes in codes_list:
            for code, values in codes.items():
                all_codes.setdefault(code, []).extend(values)

    def sort_codes(self, all_codes):
        for code, values in list(all_codes.items()):
            all_codes[code] = sorted(values, key=lambda value: value["source"])

    def save_codes_to_js(self, all_codes, js_path):
        with open(js_path, "w") as f:
            f.write(self.JS_PREFIX)
            json.dump(all_codes, f)


class BaseDocumentationParser(object):
    # An id to be used internally
    ID = NotImplemented

    # The user-friendly source
    SOURCE = NotImplemented

    def load_and_parse_all_codes(self, directory):
        """
        Return a dictionary of code => doc_items

        The doc_item should have these attributes:
            * title: a short name for the command
            * brief: a description for what the command does
            * parameters: a list of parameters description

        A parameter should have these attributes:
            * tag: the name of the parameter (eg 'X', 'Y', etc), that will be
            used when matching a user command
            * label: a label about it's value to be displayed to the user (eg
            '[X<pos>]')
        """
        raise NotImplementedError()

    @contextlib.contextmanager
    def latest_documentation_directory(self, directory):
        """
        Create a temporary directory, and ask the parser to populate it, if one
        is not provided.
        """
        if directory is not None:
            yield directory
            return

        with tempfile.TemporaryDirectory() as directory:
            alternate_directory = self.populate_temporary_directory(directory)
            if alternate_directory is not None:
                yield alternate_directory
            else:
                yield directory

    def populate_temporary_directory(self, directory):
        """
        Populate a temporary directory with the necessary documentation source.
        """
        raise NotImplementedError()


@DocumentationUpdater.register_parser
class MarlinGcodeDocumentationParser(BaseDocumentationParser):
    ID = "marlin"
    SOURCE = "Marlin"
    URL_PREFIX = "https://marlinfw.org/docs/gcode"
    SOURCE_URL = (
        "https://github.com/MarlinFirmware/MarlinDocumentation/"
        "archive/master.zip"
    )

    def load_and_parse_all_codes(self, directory):
        with self.latest_documentation_directory(directory) as directory:
            docs = self.load_all_docs(directory)
        return self.get_all_codes(docs)

    def populate_temporary_directory(self, directory):
        zip_filename = os.path.join(directory, "repo.zip")
        six.moves.urllib.request.urlretrieve(self.SOURCE_URL, zip_filename)
        with zipfile.ZipFile(zip_filename, "r") as marlin_zip_file:
            gcode_files = [
                info
                for info in marlin_zip_file.infolist()
                if info.filename.startswith('MarlinDocumentation-master/_gcode')
                and info.filename.endswith('.md')
            ]
            for info in gcode_files:
                info.filename = os.path.basename(info.filename)
                marlin_zip_file.extract(info, directory)

    def load_all_docs(self, directory):
        paths_glob = os.path.join(directory, "*.md")
        paths = glob.glob(paths_glob)
        return [self.load_doc(path) for path in paths]

    def load_doc(self, path):
        with open(path) as f:
            all_text = f.read()
        first_doc_yaml, *_ = filter(None, all_text.split('---'))
        doc = yaml.load(first_doc_yaml)

        _, full_filename = os.path.split(path)
        filename, _ = os.path.splitext(full_filename)
        doc["filename"] = filename

        return doc

    def get_all_codes(self, docs):
        return {
            code: [value for _, value in values]
            for code, values in itertools.groupby(sorted((
                (code, parsed)
                for codes in (
                    self.parse_doc(doc)
                    for doc in docs
                )
                for code, parsed in iteritems(codes)
            ), key=self._get_code), key=self._get_code)
        }

    def _get_code(self, code_and_parsed):
        gcode, _ = code_and_parsed

        return gcode

    def parse_doc(self, doc):
        data = {
            "title": doc["title"],
            "brief": doc["brief"],
            "codes": doc["codes"],
            "related": doc.get("related", []),
            "parameters": [
                self.parse_doc_parameter(parameter)
                for parameter in sorted(
                    doc.get("parameters") or [],
                    key=self._order_by_required_first)
            ],
            "source": self.SOURCE,
            "url": f"{self.URL_PREFIX}/{doc['filename']}",
        }
        return {
            code: data
            for code in doc["codes"]
        }

    def parse_doc_parameter(self, parameter):
        has_values = "values" in parameter and parameter["values"] is not None
        return {
            **parameter,
            "optional": parameter.get("optional", True),
            "description": parameter.get("description", ""),
            "label": "{lp}{tag}{values}{rp}".format(
                lp="[" if parameter.get("optional", False) else "",
                tag=parameter["tag"],
                values="<{}>".format("|".join(
                    str(value["tag"]) if "tag" in value else value["type"]
                    for value in parameter["values"]
                    if "tag" in value
                    or "type" in value
                )) if has_values else "",
                rp="]" if parameter.get("optional", False) else ""
            )
        }

    def _order_by_required_first(self, parameter):
        if parameter.get("optional", False):
            return 1
        else:
            return 0


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
