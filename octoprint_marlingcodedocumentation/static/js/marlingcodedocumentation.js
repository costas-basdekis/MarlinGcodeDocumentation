/*
 * View model for MarlinGcodeDocumentation
 *
 * Author: Costas Basdekis
 * License: AGPLv3
 */

window.AllGcodesDate = window.AllGcodesDate || null;
window.AllGcodes = window.AllGcodes || {};

// Adapted from https://github.com/cncjs/gcode-parser/blob/master/src/index.js
class GcodeParser {
    static re = /(%.*)|({.*)|((?:\$\$)|(?:\$[a-zA-Z0-9#]*))|([a-zA-Z][0-9\+\-\.]+)|(\*[0-9]+)/igm;
    // Some commands have a string message, which is not parsed as normally
    static reStringMessage = /\s*([Nn]\s*[0-9\+\-\.]+)?\s*[Mm]\s*(16|23|28|30|33|117|118|928|81[0-9])([^0-9\+\-\.].*)/igm;
    static STRING_MESSAGE_PARAMETER_NAME = {
        16: 'string',
        23: 'filename',
        28: 'filename',
        30: 'filename',
        33: 'path',
        117: 'string',
        118: 'string',
        928: 'filename',
        810: 'command',
        811: 'command',
        812: 'command',
        813: 'command',
        814: 'command',
        815: 'command',
        816: 'command',
        817: 'command',
        818: 'command',
        819: 'command',
    }

    parseLine(line, options) {
        options = options || {};
        options.flatten = !!options.flatten;
        options.noParseLine = !!options.noParseLine;

        const result = {
            line: line
        };

        if (options.noParseLine) {
            return result;
        }

        result.words = [];

        let ln; // Line number
        let cs; // Checksum
        const words = this.stripComments(line).match(this.constructor.re) || [];

        for (let i = 0; i < words.length; ++i) {
            const word = words[i];
            const letter = word[0].toUpperCase();
            const argument = word.slice(1);

            // Parse % commands for bCNC and CNCjs
            // - %wait Wait until the planner queue is empty
            if (letter === '%') {
                result.cmds = (result.cmds || []).concat(line.trim());
                continue;
            }

            // Parse JSON commands for TinyG and g2core
            if (letter === '{') {
                result.cmds = (result.cmds || []).concat(line.trim());
                continue;
            }

            // Parse $ commands for Grbl
            // - $C Check gcode mode
            // - $H Run homing cycle
            if (letter === '$') {
                result.cmds = (result.cmds || []).concat(`${letter}${argument}`);
                continue;
            }

            // N: Line number
            if (letter === 'N' && typeof ln === 'undefined') {
                // Line (block) number in program
                ln = Number(argument);
                continue;
            }

            // *: Checksum
            if (letter === '*' && typeof cs === 'undefined') {
                cs = Number(argument);
                continue;
            }

            let value = Number(argument);
            if (Number.isNaN(value)) {
                value = argument;
            }

            if (options.flatten) {
                result.words.push(letter + value);
            } else {
                result.words.push([letter, value]);
            }
        }

        // Line number
        (typeof (ln) !== 'undefined') && (result.ln = ln);

        const [command, stringMessage] = this.getStringMessage(line);
        if (stringMessage) {
            if (options.flatten) {
                result.words = [command, stringMessage];
            } else {
                const commandLetter = command[0];
                const commandNumber = command.slice(1);
                const parameterName = this.constructor
                    .STRING_MESSAGE_PARAMETER_NAME[commandNumber];
                result.words = [
                    [commandLetter, commandNumber],
                    [parameterName, stringMessage],
                ];
            }
            return result;
        }

        // Checksum
        (typeof (cs) !== 'undefined') && (result.cs = cs);
        if (result.cs && (this.computeChecksum(line) !== result.cs)) {
            result.err = true; // checksum failed
        }

        return result;
    }

    getStringMessage(line) {
        const [matchStringMessage] = Array.from(
            line.matchAll(this.constructor.reStringMessage));
        if (!matchStringMessage) {
            return [null, null];
        }
        const command = "M" + matchStringMessage[2].trim();
        let message = matchStringMessage[3]
            .trim()
            .replace(/(^|[^\\]|((^|[^\\])\\\\)+);.*/, '$1')
            .replaceAll(/\\([^\\])/g, '$1')
            .trim();
        return [command, message];
    }

    // http://reprap.org/wiki/G-code#Special_fields
    // The checksum "cs" for a GCode string "cmd" (including its line number) is computed
    // by exor-ing the bytes in the string up to and not including the * character.
    computeChecksum(s) {
        s = s || '';
        if (s.lastIndexOf('*') >= 0) {
            s = s.substr(0, s.lastIndexOf('*'));
        }

        let cs = 0;
        for (let i = 0; i < s.length; ++i) {
            const c = s[i].charCodeAt(0);
            cs ^= c;
        }
        return cs;
    }

    static re1 = new RegExp(/\s*\([^\)]*\)/g); // Remove anything inside the parentheses
    static re2 = new RegExp(/\s*;.*/g); // Remove anything after a semi-colon to the end of the line, including preceding spaces
    static re3 = new RegExp(/\s+/g);

    // http://linuxcnc.org/docs/html/gcode/overview.html#gcode:comments
    // Comments can be embedded in a line using parentheses () or for the remainder of a lineusing a semi-colon. The semi-colon is not treated as the start of a comment when enclosed in parentheses.
    stripComments (line) {
        return line
            .replace(this.constructor.re1, '')
            .replace(this.constructor.re2, '')
            .replace(this.constructor.re3, '');
    }
}

class KlipperExtendedGcodeParser {
    static re = /^([A-Z][A-Z_]+)(\s+.*)?$/im;
    static reParameter = /^\s*([A-Z][A-Z0-9_]+)\s*=\s*(\S*)/im;
    gcodeParser = new GcodeParser();

    parseLine(line, options) {
        const result = {
            line,
            words: [],
        };

        const nameMatch = this.constructor.re.exec(this.stripComments(line));
        if (!nameMatch) {
            return this.gcodeParser.parseLine(line, options);
        }
        const [, name, parametersText] = nameMatch;
        result.words.push([name, '']);

        let parametersRest = (parametersText || '').trim();
        while (parametersRest) {
            const parameterMatch = this.constructor.reParameter
                .exec(parametersRest);
            if (!parameterMatch) {
                break;
            }
            const [parameterText, parameter, value] = parameterMatch;
            result.words.push([parameter, value]);
            parametersRest = parametersRest.slice(parameterText.length).trim();
        }

        return result;
    }

    static re1 = new RegExp(/\s*\([^\)]*\)/g); // Remove anything inside the parentheses
    static re2 = new RegExp(/\s*;.*/g); // Remove anything after a semi-colon to the end of the line, including preceding spaces

    // http://linuxcnc.org/docs/html/gcode/overview.html#gcode:comments
    // Comments can be embedded in a line using parentheses () or for the remainder of a lineusing a semi-colon. The semi-colon is not treated as the start of a comment when enclosed in parentheses.
    stripComments (line) {
        return line
            .replace(this.constructor.re1, '')
            .replace(this.constructor.re2, '');
    }
}

// Sync settings edited from the main page, and settings edited from the
// settings page
class SettingsSync {
    static LOCAL = 'local';
    static CENTRAL = 'central';
    static OPPOSITE_SOURCE = {
        [this.LOCAL]: this.CENTRAL,
        [this.CENTRAL]: this.LOCAL,
    };
    static PLUGIN_NAME = 'marlingcodedocumentation';

    constructor(nameMapping, defaults, view) {
        this.nameMapping = nameMapping;

        this.pluginSettings = null;
        this.pluginSettingsLoaded = ko.observable(false);

        this.localSettings = this.createLocalSettings(defaults);
        Object.assign(view, this.localSettings);
        this.centralSettings = null;

        this.localSettingsUpdated = ko.computed(() => {
            return this.createSettingsMessage(
                this.constructor.LOCAL, this.localSettings);
        });
        this.centralSettingsUpdated = ko.computed(() => {
            if (!this.pluginSettingsLoaded()) {
                return null;
            }
            return this.createSettingsMessage(
                this.constructor.CENTRAL, this.centralSettings);
        });
        this.ignoreSource = {
            [this.constructor.LOCAL]: false,
            [this.constructor.CENTRAL]: false,
        };
        this.localSettingsUpdated.subscribe(this.onSettingsUpdated.bind(this));
        this.centralSettingsUpdated.subscribe(this.onSettingsUpdated.bind(this));
        this.localSettingsSyncedOnce = ko.observable(false);
    }

    onPluginSettingsLoaded(pluginSettings) {
        if (this.centralSettings) {
            return;
        }
        this.pluginSettings = pluginSettings;
        this.centralSettings = this.createCentralSettings();
        this.pluginSettingsLoaded(true);
    }

    createSettingsMessage(source, observablesMapping) {
        return {
            source,
            values: this.getObservableValues(observablesMapping),
        };
    }

    getObservableValues(observablesMapping) {
        return Object.fromEntries(
            Object.entries(observablesMapping).map(
                ([name, observable]) => [name, observable()]));
    }

    createLocalSettings(defaults) {
        return Object.fromEntries(
            Object.keys(this.nameMapping).map(
                localName =>
                    [localName, ko.observable(defaults[localName])]));
    }

    createCentralSettings() {
        return Object.fromEntries(
            Object.entries(this.nameMapping).map(
                ([localName, centralName]) =>
                    [localName, this.pluginSettings[centralName]]));
    }

    onSettingsUpdated(message) {
        if (!message) {
            return;
        }

        const source = message.source;
        const isLocal = source === this.constructor.LOCAL;
        const isCentral = !isLocal;
        const target = this.constructor.OPPOSITE_SOURCE[source];
        if (this.ignoreSource[source]) {
            return;
        }

        const [sourceObservables, targetObservables] =
            isLocal
                ? [this.localSettings, this.centralSettings]
                : [this.centralSettings, this.localSettings];
        const sourceData = this.getObservableValues(sourceObservables);
        const targetData = this.getObservableValues(targetObservables);
        const updates = {};
        this.ignoreSource[target] = true;
        for (const key of Object.keys(sourceData)) {
            if (targetData[key] === sourceData[key]) {
                continue;
            }
            targetObservables[key](sourceData[key]);
            updates[this.nameMapping[key]] = sourceData[key];
        }
        this.ignoreSource[target] = false;
        if (isLocal) {
            if (Object.keys(updates).length) {
                OctoPrint.settings.save({
                    plugins: {
                        marlingcodedocumentation: updates,
                    },
                });
            }
        }
        if (isCentral) {
            if (!this.localSettingsSyncedOnce()) {
                this.localSettingsSyncedOnce(true);
            }
        }
    }

    saveUpdatedSettings(updates) {
        if (!Object.keys(updates).length) {
            return;
        }
        OctoPrint.settings.save({
            plugins: {
                [this.constructor.PLUGIN_NAME]: updates,
            },
        });
    }
}

class DocumentationService {
    constructor(allGcodes = window.AllGcodes, allGcodesDate = window.AllGcodesDate) {
        this.klipperGcodeParser = new KlipperExtendedGcodeParser();
        this.update(allGcodes, allGcodesDate);
    }

    update(allGcodes = window.AllGcodes, allGcodesDate = window.AllGcodesDate) {
        this.allGcodes = allGcodes;
        this.allGcodesDate = allGcodesDate;
        if (allGcodes["!"]) {
            const meta = allGcodes["!"];
            delete allGcodes["!"];
            this.allGcodesDate = new Date(meta.date);
        }
        this.allGcodesById = Object.fromEntries(
            [].concat(...Object.entries(this.allGcodes).map(
                ([command, values]) => values.map(
                    value => [command, value]))).map(
                        commandAndValue => [commandAndValue[1].id, commandAndValue]));
    }

    findDocs(searchString) {
        const parts = searchString.toLowerCase().trim().split(/\s+/g);
        const idLists = Object.entries(this.allGcodes)
            .map(([command, doc]) => {
                const commandLowerCase = command.toLowerCase();
                if (parts.some(part => commandLowerCase.includes(part))) {
                    return doc.map(docItem => docItem.id);
                }
                const ids = doc
                    .map(docItem => {
                        const title = docItem.title.toLowerCase();
                        if (parts.some(part => title.includes(part))) {
                            return docItem.id;
                        }
                        const brief = docItem.brief.toLowerCase();
                        if (parts.some(part => brief.includes(part))) {
                            return docItem.id;
                        }
                        return null;
                    })
                    .filter(id => id);
                if (!ids.length) {
                    return null;
                }
                return ids;
            })
            .filter(ids => ids);
        return [].concat(...idLists)
            .map(id => this.allGcodesById[id]);
    }

    parseParameters(line, parsedParameters = {}) {
        for (const [tag, value] of line.words.slice(1)) {
            parsedParameters[tag] = parsedParameters[tag] || [];
            parsedParameters[tag].push(value);
        }

        return parsedParameters;
    }

    getSearchResult(commandLine, {maxResultCount = 20, include: {Marlin = true, RepRap = true, Klipper = true} = {}} = {}) {
        commandLine = commandLine.trim();
        if (!commandLine || commandLine === "?") {
            return {
                line: commandLine,
                isEmpty: true,
                isSearch: false,
                docItems: [],
                extraResultsCount: 0,
            };
        }

        let docItems;
        const parsedParameters = {};
        const isSearch = commandLine.startsWith('?');
        if (isSearch) {
            docItems = this.findDocs(commandLine.slice(1));
        } else {
            const line = this.klipperGcodeParser.parseLine(commandLine);
            const command = line.words.length
                ? line.words[0].join('') : null;
            const docItemsList = this.allGcodes[command]
                ? [[command, this.allGcodes[command]]]  : [];
            docItems = [].concat(...docItemsList.map(
                ([command, docItems]) => docItems.map(
                    docItem => [command, docItem])));
            this.parseParameters(line, parsedParameters);
        }

        const include = {
            Marlin,
            RepRap,
            Klipper,
        };
        return {
            line: commandLine,
            isEmpty: false,
            isSearch,
            parsedParameters,
            docItems: docItems
                .filter(([, docItem]) => include[docItem.source])
                .slice(0, maxResultCount)
                .map(([command, docItem]) => ({
                    command,
                    docItem,
                })),
            extraResultsCount: docItems.length > maxResultCount
                ? docItems.length - maxResultCount : 0,
        };
    }
}

$(function() {
    function MarlingcodedocumentationViewModel(parameters) {
        const self = this;

        [self.settingsViewModel] = parameters;
        self.settingsViewModel.marlinGcodeDocumentation = self;

        self.gcodeParser = new GcodeParser();

        // Try multiple times to put it in the right place, since some times
        // it's moved to the end of the page
        // See https://github.com/costas-basdekis/MarlinGcodeDocumentation/issues/21
        let moveTemplateToPositionAttemptCount = 0;
        self.moveTemplateToPosition = () => {
            if (moveTemplateToPositionAttemptCount >= 5) {
                console.error(
                    `Could not find anchor for Marlin GCode documentation ` +
                    `- aborting after ` +
                    `${moveTemplateToPositionAttemptCount} attempts`);
                return;
            }
            moveTemplateToPositionAttemptCount += 1;
            const $element = $("#terminal-marlin-gcode-documentation");
            let $anchor;
            if (self.mySettings.documentation_position() === "above_settings") {
                $anchor = $("#terminal-sendpanel");
                $element.insertAfter($anchor);
            } else {
                $anchor = $("#term");
                $anchor.append($element);
            }
            if (!$anchor.length) {
                console.warn(
                    `Anchor for Marlin GCode documentation was not ` +
                    `present, will try again in 1s - tried ` +
                    `${moveTemplateToPositionAttemptCount} times`);
                setTimeout(() => {
                    self.moveTemplateToPosition();
                }, 1000);
            }
		};

        self.allGcodesDate = ko.observable(window.AllGcodesDate);

        // Since the terminal VM is bound on `value`, we would only get an
        // update on blur, not after the user types. With this, we get it when
        // the user types, with a 0.5s delay.
        self.commandLines = ko.observable([]).extend({ rateLimit: 500 });
        $(document).on('input', "#terminal-command", ({target: {value}}) => {
            const newCommandLines = value
                .trim()
                .split(/\s*\n\s*/g)
                .filter(line => line);
            const commandLinesHaveChanged =
                JSON.stringify(self.commandLines())
                !== JSON.stringify(newCommandLines);
            if (commandLinesHaveChanged) {
                self.commandLines(newCommandLines);
            }
        });
        self.activeCommandLineNumber = ko.observable(0).extend({ rateLimit: 500 });
        self.activeCommandLineNumber = ko.observable(-1).extend({ rateLimit: 500 });
        $(document).on("keyup click focus", "#terminal-command", ({target: {value, selectionStart}}) => {
            // Use `selectionStart + 1`, so that we get the correct line number,
            // if the selection is at the start of the line. Otherwise we get
            // the previous line number
            let lineNumber = value
                .slice(0, selectionStart + 1)
                .trim()
                .split(/\s*\n\s*/g)
                .filter(line => line)
                .length - 1;
            if (self.activeCommandLineNumber() !== lineNumber) {
                self.activeCommandLineNumber(lineNumber);
            }
        });
        $(document).on("shown", "#terminal-marlin-gcode-documentation [data-toggle='tab']", ({target}) => {
            const newTabIndex = parseInt(target.dataset.tabIndex);
            if (self.activeCommandLineNumber() !== newTabIndex) {
                self.activeCommandLineNumber(newTabIndex);
            }
        });

        $(document).on("click", "#terminal-output span.sent", ({target: {textContent}}) => {
            self.commandLines(self.commandLines().concat([textContent]));
            self.activeCommandLineNumber(self.commandLines().length - 1);
        });

        self.settingsSync = new SettingsSync({
            includeSourceMarlin: 'include_source_marlin',
            includeSourceRepRap: 'include_source_reprap',
            includeSourceKlipper: 'include_source_klipper',
            showHelp: 'show_help',
            favouriteCommands: 'favourite_commands',
            collapseAllByDefault: 'collapse_all_by_default',
            showSourcesCheckboxes: 'show_sources_checkboxes',
            updateDocumentationUrl: 'update_documentation_url',
            updateDocumentationUrlDefault: 'update_documentation_url_default',
            updateDocumentationLastUpdate: 'update_documentation_last_update',
            updateDocumentationLastStatus: 'update_documentation_last_status',
        }, {
            includeSourceMarlin: true,
            includeSourceRepRap: true,
            includeSourceKlipper: true,
            showHelp: true,
            favouriteCommands: [],
            collapseAllByDefault: false,
            showSourcesCheckboxes: true,
            updateDocumentationUrl: null,
            updateDocumentationUrlDefault: null,
            updateDocumentationLastUpdate: null,
            updateDocumentationLastStatus: null,
        }, self);
        self.mySettings = null;

        self.allSources = [ "marlin", "reprap", "klipper"];
        self.includedSources = ko.computed(() => {
            return [
                self.includeSourceMarlin() ? "marlin" : null,
                self.includeSourceRepRap() ? "reprap" : null,
                self.includeSourceKlipper() ? "klipper" : null,
            ].filter(item => item);
        });

        self.onHelpClose = () => {
            self.showHelp(false);
        };
        $(document)
            .on("close", "#terminal-marlin-gcode-documentation-help", self.onHelpClose);

        self.loadSettings = function() {
            self.mySettings = self.settingsViewModel.settings.plugins.marlingcodedocumentation;
            self.settingsSync.onPluginSettingsLoaded(self.mySettings);
        };

        $("#terminal-marlin-gcode-documentation .alert").alert();

        self.onBeforeBinding = function() {
            self.loadSettings();
            self.onDocumentationPositionChange = ko.computed(() => {
                self.mySettings.documentation_position();
                // Add a delay, since some times it's moved to the end of the
                // page
                // See https://github.com/costas-basdekis/MarlinGcodeDocumentation/issues/21
                setTimeout(() => {
                    self.moveTemplateToPosition();
                }, 0);
            });
            self.onExplainSentCommandsChanged = ko.computed(() => {
                $("#terminal-output").toggleClass(
                    "explain-sent-commands",
                    self.mySettings.explain_sent_commands());
            });
        };

        self.documentationService = new DocumentationService();

        self.collapsedCommands = ko.observable([]);

        self.onToggleResultCollapsed = ({docItem: {id}}) => {
            const collapsedCommands = self.collapsedCommands();
            const newCollapsedCommands = collapsedCommands.includes(id)
                ? collapsedCommands.filter(_id => _id !== id)
                : collapsedCommands.concat(id);
            self.collapsedCommands(newCollapsedCommands);
        };

        self.onToggleResultCollapsedAll = () => {
            self.collapsedCommands([].concat(
                ...Object.entries(this.documentationService.allGcodes).map(
                    ([command, docItems]) => docItems.map(
                        docItem => docItem.id))));
        };
        self.settingsSync.localSettingsSyncedOnce.subscribe(() => {
            if (self.collapseAllByDefault()) {
                self.onToggleResultCollapsedAll();
            }
        });
        self.onToggleResultCollapsedNone = ({id}) => {
            self.collapsedCommands([]);
        };

        self.favouriteUndo = ko.observable(null);
        self.favourites = ko.computed(() => {
            const favouriteCommands = self.favouriteCommands();
            const visibleSources = [
                ['Marlin', self.includeSourceMarlin()],
                ['RepRap', self.includeSourceRepRap()],
                ['Klipper', self.includeSourceKlipper()],
            ].filter(([, show]) => show).map(([source]) => source);
            return docItemsList = favouriteCommands
                .map(id => self.documentationService.allGcodesById[id])
                .map(([command, docItem]) => ({
                    command,
                    docItem,
                }))
                .filter(({docItem: {source}}) => visibleSources.includes(source));
        });

        self.toggleFavourite = ({docItem: {id}}) => {
            const oldFavouriteCommands = self.favouriteCommands();
            const newFavouriteCommands =
                oldFavouriteCommands.includes(id)
                    ? oldFavouriteCommands.filter(_id => _id !== id)
                    : oldFavouriteCommands.concat(id).sort();
            self.favouriteCommands(newFavouriteCommands);
        };

        self.onUseFavourite = ({command}) => {
            const previousValue = $("#terminal-command").val();
            if (previousValue) {
                self.favouriteUndo(previousValue);
            }
            $("#terminal-command")
                .val(`${command} `)
                .trigger('input')
                .focus();
        };
        self.onUndoUseFavourite = () => {
            const previousValue = self.favouriteUndo();
            self.favouriteUndo(null);
            if (!previousValue) {
                return;
            }
            $("#terminal-command")
                .val(previousValue)
                .trigger('input')
                .focus();
        };
        self.onClearUndoUseFavourite = () => {
            self.favouriteUndo(null);
        };
        self.onUpdateDocumentation = () => {
            OctoPrint.simpleApiCommand("marlingcodedocumentation", "update-documentation", {})
              .done(async (response) => {
                const data = await response.json();
                self.documentationService.update(data, null);
                self.allGcodesDate(self.documentationService.allGcodesDate);
              });
        };
        self.onResetUrlToDefault = () => {
            document.getElementById("settings-update_documentation_url").value = self.updateDocumentationUrlDefault();
        };
        self.refreshDocumentation = () => {
            OctoPrint.simpleApiGet("marlingcodedocumentation")
              .done(async (response) => {
                const data = await response.json();
                self.documentationService.update(data, null);
                self.allGcodesDate(self.documentationService.allGcodesDate);
              });
        };
        self.updateDocumentationLastUpdate.subscribe(() => {
            self.refreshDocumentation();
        });
        self.refreshDocumentation();

        self.getSearchResult = commandLine => {
            const result = self.documentationService.getSearchResult(
                commandLine, {
                    include: {
                        Marlin: self.includeSourceMarlin(),
                        RepRap: self.includeSourceRepRap(),
                        Klipper: self.includeSourceKlipper(),
                    },
                },
            );
            if (!result.docItems.length) {
                return result;
            }

            return result;
        };

        self.searchResults = ko.computed(() => {
           return self.commandLines()
               .map(self.getSearchResult);
        });
    }

    OCTOPRINT_VIEWMODELS.push({
        construct: MarlingcodedocumentationViewModel,
        dependencies: [ "settingsViewModel", "terminalViewModel" ],
        elements: [ "#terminal-marlin-gcode-documentation" ],
    });
});
