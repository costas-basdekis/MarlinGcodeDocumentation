# coding=utf-8
from __future__ import absolute_import

import random
from datetime import datetime
from pathlib import Path

import flask
import octoprint.plugin
import requests
from octoprint.util import RepeatedTimer


class MarlingcodedocumentationPlugin(
    octoprint.plugin.SettingsPlugin,
    octoprint.plugin.AssetPlugin,
    octoprint.plugin.TemplatePlugin,
    octoprint.plugin.StartupPlugin,
    octoprint.plugin.SimpleApiPlugin,
):
    ALL_CODES_PATH = Path("./all_codes.json")

    def __init__(self):
        super().__init__()
        self.repeated_timer = None

    def on_after_startup(self):
        self.start_timer()

    def start_timer(self):
        self.stop_timer()

        self.update_documentation_if_due()
        self.repeated_timer = RepeatedTimer(
            interval=1 * 24 * 60 * 60,
            function=self.update_documentation_if_due,
            run_first=True,
        )

    def stop_timer(self):
        if not self.repeated_timer:
            return
        self.repeated_timer.cancel()
        self.repeated_timer = None

    def update_documentation_if_due(self):
        if not self.is_update_documentation_enabled():
            return

        if not self.is_update_documentation_due():
            return

        self.update_documentation()

    def is_update_documentation_enabled(self):
        self._logger.info(
            "Checking if GCode documentation update is enabled...")
        if not self._settings.get(["update_documentation_monthly"]):
            self._logger.info(" * Monthly update disabled")
            return False
        if not self._settings.get(["update_documentation_url"]):
            self._logger.info(" * There is no URL configured")
            return False

        self._logger.info(" * It's enabled")
        return True

    def is_update_documentation_due(self):
        self._logger.info(
            "Checking if GCode documentation update is due...")

        if not self.ALL_CODES_PATH.exists():
            self._logger.info(
                " * Documentation file does not exist, so it's due")
            return True

        update_documentation_last_update = \
            self._settings.get(["update_documentation_last_update"])
        if not update_documentation_last_update:
            self._logger.info(" * First time updating, so it's due")
            return True

        update_documentation_day = \
            self._settings.get(["update_documentation_day"])
        now = datetime.now()
        if now.day != update_documentation_day:
            self._logger.info(
                " * Today (%s) is not the designated day (%s), so it's not due",
                now.day, update_documentation_day)
            return False

        this_month = now.date().replace(day=1)
        previous_month = update_documentation_last_update.date().replace(day=1)
        if this_month == previous_month:
            self._logger.info(
                " * Last updated (%s) is this month (%s), so it's not due",
                previous_month, this_month)
            return False

        self._logger.info(" * It's due")
        return True

    def update_documentation(self):
        self._logger.info("Updating GCode documentation...")
        update_documentation_url = \
            self._settings.get(["update_documentation_url"])
        self._logger.info(
            " * Fetching %s",
            update_documentation_url)
        response = requests.get(update_documentation_url)
        if not response.ok:
            self._logger.error(
                " * Could not fetch %s, response code was %s",
                update_documentation_url, response.status_code)
            return

        contents = response.text
        self._logger.info(" * Saving update (%s bytes)", len(contents))

        new_all_codes_path = (
            self.ALL_CODES_PATH.parent / f"new-{self.ALL_CODES_PATH.name}"
        )
        new_all_codes_path.write_text(contents)
        new_all_codes_path.rename(self.ALL_CODES_PATH)

        self._logger.info(" * Update complete")
        self.mark_documentation_as_updated()

    def mark_documentation_as_updated(self):
        self._settings.set(["update_documentation_last_update"], datetime.now())

    def get_api_commands(self):
        return {
            "update-documentation": [],
        }

    def on_api_command(self, command, data):
        if command == "update-documentation":
            self.update_documentation()
            return self.on_api_get(None)

    def on_api_get(self, request):
        if not self.ALL_CODES_PATH.exists():
            return flask.jsonify(None)

        return flask.current_app.response_class(
            self.ALL_CODES_PATH.read_text(),
            mimetype="text/json",
        )

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
            "show_sources_checkboxes": True,
            "update_documentation_monthly": True,
            "update_documentation_day": random.randint(1, 25),
            "update_documentation_url": (
                "https://raw.githubusercontent.com/costas-basdekis/"
                "gcode-documentation-parser/output/output/all_codes.json"
            ),
            "update_documentation_last_update": None,
        }

    def get_assets(self):
        return dict(
            js=["js/marlingcodedocumentation.min.js"],
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
