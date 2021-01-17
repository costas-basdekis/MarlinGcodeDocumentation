import importlib
import json
import os


class DocumentationUpdater(object):
    """Manage updating the documentation from all parsers"""
    JS_PREFIX = "window.AllGcodes = "

    PARSERS = {}
    SOURCES = set()

    PARSERS_IMPORTS = [
        'octoprint_marlingcodedocumentation.parser',
    ]

    @classmethod
    def register_parser(cls, parser):
        cls.PARSERS[parser.ID] = parser
        cls.SOURCES.add(parser.SOURCE)

        return parser

    @classmethod
    def import_parsers(cls):
        for module_name in cls.PARSERS_IMPORTS:
            try:
                importlib.import_module(module_name)
            except Exception as e:
                print(f"Could not load {module_name}: {e}")
                raise

    def update_documentation(self, directories=None, js_path=None):
        if js_path is None:
            js_path = os.path.join(
                os.path.dirname(__file__), "static", "js", "all_codes.js")
        codes_list = []
        ids_to_update = set()
        if not self.PARSERS:
            raise Exception(f"No parsers have been registered")
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
            json.dump(all_codes, f, indent=2, sort_keys=True)


DocumentationUpdater.import_parsers()
