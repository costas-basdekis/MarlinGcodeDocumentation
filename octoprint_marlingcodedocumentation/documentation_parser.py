import glob
import itertools
import json
import os

import yaml


class MarlinGcodeDocumentationParser:
    def update_documentation(self, directory, js_path=None):
        if js_path is None:
            js_path = os.path.join(
                os.path.dirname(__file__), "static", "js", "all_codes.js")
        all_codes = self.load_and_parse_all_codes(directory)
        self.save_codes_to_js(all_codes, js_path)

    def save_codes_to_js(self, all_codes, js_path):
        with open(js_path, "w") as f:
            f.write("window.AllMarlinGcodes = ")
            json.dump(all_codes, f)

    def load_and_parse_all_codes(self, directory):
        docs = self.load_all_docs(directory)
        return self.get_all_codes(docs)

    def load_all_docs(self, directory):
        paths_glob = os.path.join(directory, "*.md")
        paths = glob.glob(paths_glob)
        print(paths_glob, len(paths))
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
                for code, parsed in codes.items()
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
            "filename": doc["filename"],
        }
        return {
            code: data
            for code in doc["codes"]
        }

    def parse_doc_parameter(self, parameter):
        has_values = "values" in parameter and parameter["values"] is not None
        return {
            **parameter,
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
