/*
 * View model for MarlinGcodeDocumentation
 *
 * Author: Costas Basdekis
 * License: AGPLv3
 */
$(function() {
    function MarlingcodedocumentationViewModel(parameters) {
        const self = this;

        self.terminalViewModel = parameters[0];

        self.AllMarlinGcodes = window.AllMarlinGcodes;

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

        $("#terminal-sendpanel").after("<div id=terminal-documentation />");
        self.$documentation = $("#terminal-documentation");

        self.showForValue = value => {
            if (!value.trim() || value.trim() === "?") {
                self.$documentation.text(
                    "Enter a command to get documentation (eg 'G28'), " +
                    "or search by prepending with '?' (eg '?endstop')");
                return;
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
                    docItem => [command, docItem])));
            if (docItems.length) {
                self.$documentation.html(`
                    <ul class="terminal-documentation-results">${docItems.map(([command, docItem]) => `
                        <li class="terminal-documentation-result">
                            <span class="terminal-documentation-command">${command}</span>: ${docItem.title}: ${docItem.brief}
                            <ul class="terminal-documentation-result-parameters">${docItem.parameters.map(parameter => `
                                <li class="terminal-documentation-result-parameter ${parameter.optional ? "" : "required"} ${parsedParameters[parameter.tag] === undefined ? "missing" : ""}">
                                    <pre class="terminal-documentation-parameter-tag">${parameter.label}</pre>
                                    <pre class="terminal-documentation-parameter-value">${parsedParameters[parameter.tag] !== undefined ? parsedParameters[parameter.tag] : ' '}</pre>
                                    [<span class="terminal-documentation-parameter-description">${parameter.description}</span>]:
                                </li>
                            `).join('\n')}</ul>
                        </li>
                    `).join('\n')}</ul>
                `);
            } else {
                if (isSearch) {
                    self.$documentation.text("Unable to find anything");
                } else {
                    self.$documentation.text("Unknown command. Start with '?' to search");
                }
            }
        };

        $("#terminal-command").on(
            'input', ({target: {value}}) => self.showForValue(value));

        self.showForValue('G29 A0 X110 Y110');
    }

    OCTOPRINT_VIEWMODELS.push({
        construct: MarlingcodedocumentationViewModel,
        dependencies: [ "terminalViewModel" ],
        elements: [],
    });
});
