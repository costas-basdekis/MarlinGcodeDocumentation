import glob
import itertools
import os
import zipfile

import six.moves.urllib.request
import yaml
from six import iteritems

from octoprint_marlingcodedocumentation.updater import \
    DocumentationUpdater
from ..base_parser import BaseDocumentationParser


__all__ = ['MarlinGcodeDocumentationParser']


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
        doc = yaml.safe_load(first_doc_yaml)

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
                    filter(None, doc.get("parameters") or []),
                    key=self._order_by_required_first,
                )
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
