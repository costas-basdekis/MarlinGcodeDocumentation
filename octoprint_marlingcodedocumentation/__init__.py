# coding=utf-8
from __future__ import absolute_import

import octoprint.plugin


class MarlingcodedocumentationPlugin(
        octoprint.plugin.StartupPlugin, octoprint.plugin.SettingsPlugin,
        octoprint.plugin.AssetPlugin, octoprint.plugin.TemplatePlugin):

    def on_after_startup(self):
        self._logger.info("Hello MarlingcodedocumentationPlugin!")

    def get_settings_defaults(self):
        return {
        }

    def get_assets(self):
        return dict(
            js=["js/all_codes.js", "js/marlingcodedocumentation.js"],
            css=["css/marlingcodedocumentation.css"],
            less=["less/marlingcodedocumentation.less"]
        )

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

__plugin_pythoncompat__ = ">=3,<4"


def __plugin_load__():
    global __plugin_implementation__
    __plugin_implementation__ = MarlingcodedocumentationPlugin()

    global __plugin_hooks__
    __plugin_hooks__ = {
        "octoprint.plugin.softwareupdate.check_config":
        __plugin_implementation__.get_update_information,
    }
