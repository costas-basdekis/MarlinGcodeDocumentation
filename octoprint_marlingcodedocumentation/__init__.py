# coding=utf-8
from __future__ import absolute_import

import octoprint.plugin


class MarlingcodedocumentationPlugin(
        octoprint.plugin.SettingsPlugin, octoprint.plugin.AssetPlugin,
        octoprint.plugin.TemplatePlugin):

    def get_settings_defaults(self):
        return {
            "include_source_marlin": True,
            "include_source_reprap": True,
            "include_source_klipper": True,
            "documentation_position": "above_settings",
            "show_help": True,
            "favourite_commands": [],
            "explain_sent_commands": True,
            "collapse_all_by_default": False,
        }

    def get_assets(self):
        return dict(
            js=["js/all_codes.js", "js/marlingcodedocumentation.min.js"],
            css=["css/marlingcodedocumentation.css"],
            less=["less/marlingcodedocumentation.less"]
        )

    def get_template_configs(self):
        return [
            {"type": "settings", "custom_bindings": False},
        ]

    def get_update_information(self):
        return dict(
            marlingcodedocumentation=dict(
                displayName="Marlingcodedocumentation Plugin",
                displayVersion=self._plugin_version,

                # version check: github repository
                type="github_release",
                user="costas-basdekis",
                repo="MarlinGcodeDocumentation",
                current=self._plugin_version,

                # update method: pip
                pip="https://github.com/costas-basdekis/MarlinGcodeDocumentation/archive/{target_version}.zip"
            )
        )


__plugin_name__ = "Marlin GCode Documentation"

__plugin_pythoncompat__ = ">=2.7,<4"


def __plugin_load__():
    global __plugin_implementation__
    __plugin_implementation__ = MarlingcodedocumentationPlugin()

    global __plugin_hooks__
    __plugin_hooks__ = {
        "octoprint.plugin.softwareupdate.check_config":
        __plugin_implementation__.get_update_information,
    }
