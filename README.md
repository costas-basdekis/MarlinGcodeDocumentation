# MarlinGcodeDocumentation
See [MarlinGcodeDocumentation](https://plugins.octoprint.org/plugins/marlingcodedocumentation/)
on OctoPrint Plugin Repository

It displays GCode documentation for Marlin, RepRap, and Klipper, in the terminal
command line.

Type a command and you will get explanation for the command and the parameters.

Type '?' and some terms and you'll be shown commands that reference those terms.

Features:
* Commands from [Marlin](https://marlinfw.org/meta/gcode/),
[RepRap](https://reprap.org/wiki/G-code#G-commands), and
[Klipper](https://www.klipper3d.org/G-Codes.html) official documentations
  * Automatically updated monthly by [gcode-documentation-parser](https://github.com/costas-basdekis/gcode-documentation-parser)
* Support for search by prepending `?`
* Add and manage favourite commands
* Support for [Multiline Terminal plugin](https://plugins.octoprint.org/plugins/multilineterminal/)
* If you use [Terminal Messaging](https://github.com/jeffeb3/OctoPrint-TerminalMessaging), it allows you to explain sent commands

![](/screenshot-example-command.png)
![](/screenshot-example-multiple-commands.png)
![](/screenshot-example-search.png)
![](/screenshot-example-favourites.png)
![](/screenshot-example-sent.png)

## Setup

Install via the bundled [Plugin Manager](https://docs.octoprint.org/en/master/bundledplugins/pluginmanager.html)
or manually using this URL:

    https://github.com/costas-basdekis/MarlinGcodeDocumentation/archive/master.zip

## Configuration

There are several options that control the appearance and behaviour
