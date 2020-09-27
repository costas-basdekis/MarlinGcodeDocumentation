/*
 * View model for MarlinGcodeDocumentation
 *
 * Author: Costas Basdekis
 * License: AGPLv3
 */
$(function() {
    function MarlingcodedocumentationViewModel() {
        const self = this;

        self.AllMarlinGcodes = window.AllMarlinGcodes;

        self.onBeforeBinding = () => {
			$("#terminal-marlin-gcode-documentation")
                .insertAfter("#terminal-sendpanel");
		};

        // Since the terminal VM is bound on `value`, we would only get an
        // update on blur, not after the user types. With this, we get it when
        // the user types, with a 0.5s delay.
        self.commandValue = ko.observable("").extend({ rateLimit: 500 });
        $("#terminal-command").on('input', ({target: {value}}) => {
            self.commandValue(value);
        });

        self.findDocs = searchString => {
            const parts = searchString.toLowerCase().trim().split(/\s+/g);
            const commandsAndDocs = Object.entries(self.AllMarlinGcodes)
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

        self.onToggleResultCollapsed = ({id}) => {
            const collapsedCommands = self.collapsedCommands();
            const newCollapsedCommands = collapsedCommands.includes(id)
                ? collapsedCommands.filter(_id => _id !== id)
                : collapsedCommands.concat(id);
            self.collapsedCommands(newCollapsedCommands);
        };

        self.onToggleResultCollapsedAll = () => {
            self.collapsedCommands([].concat(...Object.entries(window.AllMarlinGcodes).map(
                ([command, docItems]) => docItems.map(
                    (_, index) => `${command}[${index}]`))));
        };

        self.onToggleResultCollapsedNone = ({id}) => {
            self.collapsedCommands([]);
        };

        self.searchResults = ko.computed(() => {
           const value = self.commandValue();
            if (!value.trim() || value.trim() === "?") {
                return {
                    isEmpty: true,
                    isSearch: false,
                    docItems: [],
                    extraResultsCount: 0,
                };
            }
            let docItemsList;
            const parsedParameters = {};
            const isSearch = value.trim().startsWith('?');
            if (isSearch) {
                const commands = self.findDocs(value.slice(1));
                docItemsList = commands.map(
                    command => [command, AllMarlinGcodes[command]]);
            } else {
                const line = self.parseLine(value);
                const command = line.words.length
                    ? line.words[0].join('') : null;
                docItemsList = AllMarlinGcodes[command]
                    ? [[command, AllMarlinGcodes[command]]]  : [];
                for (const [tag, value] of line.words.slice(1)) {
                    parsedParameters[tag] = parsedParameters[tag] || [];
                    parsedParameters[tag].push(value);
                }
            }
            const docItems = [].concat(...docItemsList.map(
                ([command, docItems]) => docItems.map(
                    (docItem, index) => [command, index, docItem])));
            const collapsedCommands = self.collapsedCommands();
            return {
                isEmpty: false,
                isSearch,
                docItems: docItems.slice(0, 20).map(([command, index, docItem]) => ({
                    id: `${command}[${index}]`,
                    command,
                    collapsed: collapsedCommands.includes(`${command}[${index}]`),
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
        });
    }

    OCTOPRINT_VIEWMODELS.push({
        construct: MarlingcodedocumentationViewModel,
        dependencies: [ "terminalViewModel" ],
        elements: [ "#terminal-marlin-gcode-documentation" ],
    });
});
