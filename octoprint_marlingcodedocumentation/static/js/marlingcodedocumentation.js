/*
 * View model for MarlinGcodeDocumentation
 *
 * Author: Costas Basdekis
 * License: AGPLv3
 */
$(function() {
    function MarlingcodedocumentationViewModel(parameters) {
        const self = this;

        [self.settingsViewModel] = parameters;

        self.AllGcodes = window.AllGcodes;
        self.AllGcodesById = Object.fromEntries(
            [].concat(...Object.entries(window.AllGcodes).map(
                ([command, values]) => values.map(
                    value => [command, value]))).map(
                        commandAndValue => [commandAndValue[1].id, commandAndValue]));

        self.moveTemplateToPosition = () => {
            if (self.mySettings.documentation_position() === "above_settings") {
                $("#terminal-marlin-gcode-documentation")
                    .insertAfter("#terminal-sendpanel");
            } else {
                $("#term")
                    .append($("#terminal-marlin-gcode-documentation"));
            }
		};

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
            let lineNumber = value
                .slice(0, selectionStart)
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

        self.mySettings = null;
        self.mySettingsLoaded = ko.observable(false);
        self.includeSourceMarlin = ko.observable(true);
        self.includeSourceRepRap = ko.observable(true);
        self.showHelp = ko.observable(true);
        self.favouriteCommands = ko.observable([]);
        self.localSettingsUpdated = ko.computed(() => {
            const includeSourceMarlin = self.includeSourceMarlin();
            const includeSourceRepRap = self.includeSourceRepRap();
            const showHelp = self.showHelp();
            const favouriteCommands = self.favouriteCommands();
            return {
                "source": "local",
                "values": {
                    includeSourceMarlin,
                    includeSourceRepRap,
                    showHelp,
                    favouriteCommands,
                },
            };
        });
        self.centralSettingsUpdated = ko.computed(() => {
            if (!self.mySettingsLoaded()) {
                return null;
            }
            const includeSourceMarlin = self.mySettings.include_source_marlin();
            const includeSourceRepRap = self.mySettings.include_source_reprap();
            const showHelp = self.mySettings.show_help();
            const favouriteCommands = self.mySettings.favourite_commands();
            return {
                "source": "central",
                "values": {
                    includeSourceMarlin,
                    includeSourceRepRap,
                    showHelp,
                    favouriteCommands,
                },
            };
        });
        self.onSettingsUpdated = message => {
            if (!message) {
                return;
            }
            const source = message.source;
            const target = self.onSettingsUpdated.opposite[source];
            const ignore = self.onSettingsUpdated.ignore[source];
            if (ignore) {
                return;
            }
            const observablesFromLocal = {
                includeSourceMarlin: self.includeSourceMarlin,
                includeSourceRepRap: self.includeSourceRepRap,
                showHelp: self.showHelp,
                favouriteCommands: self.favouriteCommands,
            };
            const observablesFromCentral = {
                includeSourceMarlin: self.mySettings.include_source_marlin,
                includeSourceRepRap: self.mySettings.include_source_reprap,
                showHelp: self.mySettings.show_help,
                favouriteCommands: self.mySettings.favourite_commands,
            };
            const settingKeys = {
                includeSourceMarlin: "include_source_marlin",
                includeSourceRepRap: "include_source_reprap",
                showHelp: "show_help",
                favouriteCommands: "favourite_commands",
            };
            const sourceObservables =
                source === 'local'
                    ? observablesFromLocal : observablesFromCentral;
            const targetObservables =
                source === 'local'
                    ? observablesFromCentral : observablesFromLocal;
            const sourceData = Object.fromEntries(
                Object.entries(sourceObservables).map(
                    ([key, observable]) => [key, observable()]));
            const targetData = Object.fromEntries(
                Object.entries(targetObservables).map(
                    ([key, observable]) => [key, observable()]));
            const updates = {};
            self.onSettingsUpdated.ignore[target] = true;
            for (const key of Object.keys(sourceData)) {
                if (targetData[key] !== sourceData[key]) {
                    targetObservables[key](sourceData[key]);
                    updates[settingKeys[key]] = sourceData[key];
                }
            }
            self.onSettingsUpdated.ignore[target] = false;
            if (source === 'local') {
                if (Object.keys(updates).length) {
                    OctoPrint.settings.save({
                        plugins: {
                            marlingcodedocumentation: updates,
                        },
                    });
                }
            }
        };
        self.onSettingsUpdated.ignore = {local: false, central: false};
        self.onSettingsUpdated.opposite = {local: 'central', central: 'local'};
        self.localSettingsUpdated.subscribe(self.onSettingsUpdated);
        self.centralSettingsUpdated.subscribe(self.onSettingsUpdated);

        self.onHelpClose = () => {
            self.showHelp(false);
        };
        $(document)
            .on("close", "#terminal-marlin-gcode-documentation-help", self.onHelpClose);

        self.loadSettings = function() {
            self.mySettings = self.settingsViewModel.settings.plugins.marlingcodedocumentation;
            self.mySettingsLoaded(true);
            self.includeSourceMarlin(self.mySettings.include_source_marlin());
            self.includeSourceRepRap(self.mySettings.include_source_reprap());
            self.showHelp(self.mySettings.show_help());
        };

        $("#terminal-marlin-gcode-documentation .alert").alert();

        self.onBeforeBinding = function() {
            self.loadSettings();
            self.onDocumentationPositionChange = ko.computed(() => {
                self.mySettings.documentation_position();
                self.moveTemplateToPosition();
            });
        };

        self.findDocs = searchString => {
            const parts = searchString.toLowerCase().trim().split(/\s+/g);
            const commandsAndDocs = Object.entries(self.AllGcodes)
                .filter(([command, doc]) =>
                    parts.some(part =>
                        command.toLowerCase().includes(part))
                    || doc.some(docItem =>
                        parts.some(part =>
                            docItem.brief.toLowerCase().includes(part)
                            || docItem.title.toLowerCase().includes(part)
                        )));
            return commandsAndDocs.map(([command]) => command).sort();
        };

        // Taken from https://github.com/cncjs/gcode-parser/blob/master/src/index.js
        // @param {string} line The G-code line
        self.parseLine = (() => {
            // http://reprap.org/wiki/G-code#Special_fields
            // The checksum "cs" for a GCode string "cmd" (including its line number) is computed
            // by exor-ing the bytes in the string up to and not including the * character.
            const computeChecksum = (s) => {
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
            };
            // http://linuxcnc.org/docs/html/gcode/overview.html#gcode:comments
            // Comments can be embedded in a line using parentheses () or for the remainder of a lineusing a semi-colon. The semi-colon is not treated as the start of a comment when enclosed in parentheses.
            const stripComments = (() => {
                const re1 = new RegExp(/\s*\([^\)]*\)/g); // Remove anything inside the parentheses
                const re2 = new RegExp(/\s*;.*/g); // Remove anything after a semi-colon to the end of the line, including preceding spaces
                const re3 = new RegExp(/\s+/g);
                return (line => line.replace(re1, '').replace(re2, '').replace(re3, ''));
            })();
            const re = /(%.*)|({.*)|((?:\$\$)|(?:\$[a-zA-Z0-9#]*))|([a-zA-Z][0-9\+\-\.]+)|(\*[0-9]+)/igm;

            return (line, options) => {
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
                const words = stripComments(line).match(re) || [];

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

                // Checksum
                (typeof (cs) !== 'undefined') && (result.cs = cs);
                if (result.cs && (computeChecksum(line) !== result.cs)) {
                    result.err = true; // checksum failed
                }

                return result;
            };
        })();

        self.collapsedCommands = ko.observable([]);

        self.onToggleResultCollapsed = ({docItem: {id}}) => {
            const collapsedCommands = self.collapsedCommands();
            const newCollapsedCommands = collapsedCommands.includes(id)
                ? collapsedCommands.filter(_id => _id !== id)
                : collapsedCommands.concat(id);
            self.collapsedCommands(newCollapsedCommands);
        };

        self.onToggleResultCollapsedAll = () => {
            self.collapsedCommands([].concat(...Object.entries(window.AllGcodes).map(
                ([command, docItems]) => docItems.map(
                    (_, index) => `${command}[${index}]`))));
        };

        self.onToggleResultCollapsedNone = ({id}) => {
            self.collapsedCommands([]);
        };

        self.favourites = ko.computed(() => {
            const parsedParameters = {};
            const collapsedCommands = self.collapsedCommands();
            const favouriteCommands = self.favouriteCommands();
            const visibleSources = [
                ['Marlin', self.includeSourceMarlin()],
                ['RepRap', self.includeSourceRepRap()],
            ].filter(([source, show]) => show).map(([source]) => source);
            return docItemsList = favouriteCommands
                .map(id => self.AllGcodesById[id])
                .map(([command, docItem]) => ({
                    command,
                    collapsed: collapsedCommands.includes(docItem.id),
                    iconClass: `terminal-documentation-source-${docItem.source.toLowerCase()}`,
                    linkTitle: `Visit ${docItem.source} documentation`,
                    favourite: favouriteCommands.includes(docItem.id),
                    docItem: {
                        ...docItem,
                        parameters: docItem.parameters.map(parameter => ({
                            ...parameter,
                            optional: !!parameter.optional,
                            hasValues: !!parsedParameters[parameter.tag],
                            values: parsedParameters[parameter.tag] || [' '],
                            description: parameter.description !== undefined ? parameter.description : '',
                        })),
                    },
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

        self.searchResults = ko.computed(() => {
           const commandLines = self.commandLines();
           return commandLines.map((line, index) => ({
               ...self.getSearchResult(line),
               tabId: `terminal-marlin-gcode-documentation-tab-${index}`,
               tabLink: `#terminal-marlin-gcode-documentation-tab-${index}`,
           }));
        });

        self.getSearchResult = commandLine => {
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
            let docItemsList;
            const parsedParameters = {};
            const isSearch = commandLine.startsWith('?');
            if (isSearch) {
                const commands = self.findDocs(commandLine.slice(1));
                docItemsList = commands.map(
                    command => [command, AllGcodes[command]]);
            } else {
                const line = self.parseLine(commandLine);
                const command = line.words.length
                    ? line.words[0].join('') : null;
                docItemsList = AllGcodes[command]
                    ? [[command, AllGcodes[command]]]  : [];
                for (const [tag, value] of line.words.slice(1)) {
                    parsedParameters[tag] = parsedParameters[tag] || [];
                    parsedParameters[tag].push(value);
                }
            }
            const docItems = [].concat(...docItemsList.map(
                ([command, docItems]) => docItems.map(
                    docItem => [command, docItem])));
            const collapsedCommands = self.collapsedCommands();
            const favouriteCommands = self.favouriteCommands();
            const include = {
                Marlin: self.includeSourceMarlin(),
                RepRap: self.includeSourceRepRap(),
            };
            return {
                line: commandLine,
                isEmpty: false,
                isSearch,
                docItems: docItems.filter(([command, docItem]) => include[docItem.source]).slice(0, 20).map(([command, docItem]) => ({
                    command,
                    collapsed: collapsedCommands.includes(docItem.id),
                    iconClass: `terminal-documentation-source-${docItem.source.toLowerCase()}`,
                    linkTitle: `Visit ${docItem.source} documentation`,
                    favourite: favouriteCommands.includes(docItem.id),
                    docItem: {
                        ...docItem,
                        parameters: docItem.parameters.map(parameter => ({
                            ...parameter,
                            optional: !!parameter.optional,
                            hasValues: !!parsedParameters[parameter.tag],
                            values: parsedParameters[parameter.tag] || [' '],
                            description: parameter.description !== undefined ? parameter.description : '',
                        })),
                    },
                })),
                extraResultsCount: docItems.length > 20 ? docItems.length - 20 : 0,
            };
        };
    }

    OCTOPRINT_VIEWMODELS.push({
        construct: MarlingcodedocumentationViewModel,
        dependencies: [ "settingsViewModel", "terminalViewModel" ],
        elements: [ "#terminal-marlin-gcode-documentation" ],
    });
});
