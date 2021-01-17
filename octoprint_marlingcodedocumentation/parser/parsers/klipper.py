import re
from pathlib import Path

import bs4
import six.moves.urllib.request

from octoprint_marlingcodedocumentation.updater import \
    DocumentationUpdater
from ..base_parser import BaseDocumentationParser


__all__ = ['KlipperGcodeDocumentationParser']


@DocumentationUpdater.register_parser
class KlipperGcodeDocumentationParser(BaseDocumentationParser):
    ID = "klipper"
    SOURCE = "Klipper"
    URL = "https://www.klipper3d.org/G-Codes.html"
    SOURCE_URL = URL
    re_reprap = re.compile(r"^([GM]\d+)(?:\s(.*))?$")
    re_klipper = re.compile(r"^([A-Z][A-Z_]+)(?:\s(.*))?$")

    def load_and_parse_all_codes(self, directory):
        with self.latest_documentation_directory(directory) as directory:
            document = bs4.BeautifulSoup(
                Path(directory).joinpath("g-codes.html").read_text(),
                "html.parser")
        return self.get_all_codes(document)

    def populate_temporary_directory(self, directory):
        html_filename = str(Path(directory).joinpath("g-codes.html"))
        six.moves.urllib.request.urlretrieve(self.SOURCE_URL, html_filename)

    def get_all_codes(self, document):
        code_fragments_and_list_items = (
            (code.text.replace('\n', ' '), code.find_parent('li'))
            for code in document.select('li code:nth-of-type(1)')
        )

        return dict(filter(None, map(
            self.parse_code, code_fragments_and_list_items)))

    def parse_code(self, code_fragment_and_list_item):
        code_fragment, list_item = code_fragment_and_list_item
        if self.re_reprap.match(code_fragment):
            return self.parse_reprap_code(code_fragment, list_item)
        elif self.re_klipper.match(code_fragment):
            return self.parse_klipper_code(code_fragment, list_item)
        else:
            return None

    def parse_reprap_code(self, code_fragment, list_item):
        code, parameters_text = self.re_reprap.match(code_fragment).groups()
        previous_text = " ".join(
            sibling
            for sibling in list_item.previous_siblings
            if isinstance(sibling, str)
        ).strip().strip(":")
        return (code, [{
            "title": previous_text,
            "brief": "",
            "codes": [code],
            "related": [],
            "parameters": self.parse_reprap_parameters(parameters_text),
            "source": self.SOURCE,
            "url": f"{self.URL}#{self.find_previous_id(list_item)}",
        }])

    def parse_reprap_parameters(self, parameters_text):
        if not parameters_text:
            return []
        parameter_texts = map(str.strip, parameters_text.split(" "))
        return list(filter(None, map(
            self.parse_reprap_parameter, parameter_texts)))

    def parse_reprap_parameter(self, parameter_text):
        if not parameter_text:
            return None
        optional = (
            parameter_text.startswith('[')
            or parameter_text.endswith(']')
        )
        parameter_text = parameter_text.replace('[', '').replace(']', '')
        if parameter_text.startswith('<'):
            parameter_text = parameter_text.replace('<', '').replace('>', '')
            tag = parameter_text
            label = f"<{parameter_text}>"
        elif '<' in parameter_text:
            tag = parameter_text[:parameter_text.index('<')]
            parameter_text = parameter_text.replace('<', '').replace('>', '')
            label = f"{tag}<{parameter_text}>"
        else:
            tag = parameter_text
            label = parameter_text
        if optional:
            label = f"[{label}]"
        return {
            "tag": tag,
            "optional": optional,
            "description": "",
            "values": [],
            "label": label,
        }

    def find_previous_id(self, element):
        id_element = next(filter(None, (
            id_element.find_previous_sibling(None, {'id': True})
            for id_element in reversed(element.find_parents())
        )), None)
        if not id_element:
            return ''

        return id_element.attrs['id']

    def parse_klipper_code(self, code_fragment, list_item):
        code, parameters_text = self.re_klipper.match(code_fragment).groups()
        next_text = next(filter(None, (
            sibling.replace('\n', '').strip().strip(':').strip()
            for sibling in list_item.previous_siblings
            if isinstance(sibling, str)
        )), '')
        return (code, [{
            "title": next_text.split('.')[0],
            "brief": next_text,
            "codes": [code],
            "related": [],
            "parameters": self.parse_klipper_parameters(parameters_text),
            "source": self.SOURCE,
            "url": f"{self.URL}#{self.find_previous_id(list_item)}",
        }])

    def parse_klipper_parameters(self, parameters_text):
        if not parameters_text:
            return []
        parameter_texts = map(str.strip, parameters_text.split(" "))
        return list(filter(None, map(
            self.parse_klipper_parameter, parameter_texts)))

    def parse_klipper_parameter(self, parameter_text):
        if not parameter_text:
            return None
        optional = (
            parameter_text.startswith('[')
            or parameter_text.endswith(']')
        )
        parameter_text = parameter_text.replace('[', '').replace(']', '')
        label = parameter_text
        if parameter_text.startswith('<'):
            parameter_text = parameter_text.replace('<', '').replace('>', '')
            tag = parameter_text
        elif '<' in parameter_text:
            tag = parameter_text[:parameter_text.index('<')].replace('=', '')
        else:
            tag = parameter_text.replace('=', '')
        return {
            "tag": tag,
            "optional": optional,
            "description": "",
            "values": [],
            "label": label,
        }
