window.AllGcodes = {
  "ABORT": [
    {
      "brief": "This command terminates the manual probing tool.",
      "codes": [
        "ABORT"
      ],
      "id": "Klipper.ABORT[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "This command terminates the manual probing tool",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "ACCELEROMETER_DEBUG_READ": [
    {
      "brief": "queries  ADXL345 register",
      "codes": [
        "ACCELEROMETER_DEBUG_READ"
      ],
      "id": "Klipper.ACCELEROMETER_DEBUG_READ[0]",
      "parameters": [
        {
          "description": "",
          "label": "CHIP=<config_name>",
          "optional": true,
          "tag": "CHIP",
          "values": []
        },
        {
          "description": "",
          "label": "REG=<register>",
          "optional": false,
          "tag": "REG",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "queries  ADXL345 register",
      "url": "https://www.klipper3d.org/G-Codes.html#adxl345-accelerometer-commands"
    }
  ],
  "ACCELEROMETER_DEBUG_WRITE": [
    {
      "brief": "writes raw",
      "codes": [
        "ACCELEROMETER_DEBUG_WRITE"
      ],
      "id": "Klipper.ACCELEROMETER_DEBUG_WRITE[0]",
      "parameters": [
        {
          "description": "",
          "label": "CHIP=<config_name>",
          "optional": true,
          "tag": "CHIP",
          "values": []
        },
        {
          "description": "",
          "label": "REG=<reg>",
          "optional": false,
          "tag": "REG",
          "values": []
        },
        {
          "description": "",
          "label": "VAL=<value>",
          "optional": false,
          "tag": "VAL",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "writes raw",
      "url": "https://www.klipper3d.org/G-Codes.html#adxl345-accelerometer-commands"
    }
  ],
  "ACCELEROMETER_MEASURE": [
    {
      "brief": "Starts  accelerometer measurements at the requested number of samples per  second. If CHIP is not specified it defaults to \"adxl345\". The  command works in a start-stop mode: when executed for the first  time, it starts the measurements, next execution stops them. The  results of measurements are written to a file named",
      "codes": [
        "ACCELEROMETER_MEASURE"
      ],
      "id": "Klipper.ACCELEROMETER_MEASURE[0]",
      "parameters": [
        {
          "description": "",
          "label": "CHIP=<config_name>",
          "optional": true,
          "tag": "CHIP",
          "values": []
        },
        {
          "description": "",
          "label": "NAME=<value>",
          "optional": true,
          "tag": "NAME",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Starts  accelerometer measurements at the requested number of samples per  second",
      "url": "https://www.klipper3d.org/G-Codes.html#adxl345-accelerometer-commands"
    }
  ],
  "ACCELEROMETER_QUERY": [
    {
      "brief": "queries  accelerometer for the current value. If CHIP is not specified it  defaults to \"adxl345\". If RATE is not specified, the default value  is used. This command is useful to test the connection to the  ADXL345 accelerometer: one of the returned values should be a  free-fall acceleration (+/- some noise of the chip).",
      "codes": [
        "ACCELEROMETER_QUERY"
      ],
      "id": "Klipper.ACCELEROMETER_QUERY[0]",
      "parameters": [
        {
          "description": "",
          "label": "CHIP=<config_name>",
          "optional": true,
          "tag": "CHIP",
          "values": []
        },
        {
          "description": "",
          "label": "RATE=<value>",
          "optional": true,
          "tag": "RATE",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "queries  accelerometer for the current value",
      "url": "https://www.klipper3d.org/G-Codes.html#adxl345-accelerometer-commands"
    }
  ],
  "ACCEPT": [
    {
      "brief": "This command accepts the current Z position andconcludes the manual probing tool.",
      "codes": [
        "ACCEPT"
      ],
      "id": "Klipper.ACCEPT[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "This command accepts the current Z position andconcludes the manual probing tool",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "ACTIVATE_EXTRUDER": [
    {
      "brief": "In a printer with  multiple extruders this command is used to change the active  extruder.",
      "codes": [
        "ACTIVATE_EXTRUDER"
      ],
      "id": "Klipper.ACTIVATE_EXTRUDER[0]",
      "parameters": [
        {
          "description": "",
          "label": "EXTRUDER=<config_name>",
          "optional": false,
          "tag": "EXTRUDER",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "In a printer with  multiple extruders this command is used to change the active  extruder",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "BED_MESH_CALIBRATE": [
    {
      "brief": "This command probes the bed using generated points specified by the  parameters in the config. After probing, a mesh is generated and  z-movement is adjusted according to the mesh. See the PROBE command  for details on the optional probe parameters. If METHOD=manual is  specified then the manual probing tool is activated - see the  MANUAL_PROBE command above for details on the additional commands  available while this tool is active.",
      "codes": [
        "BED_MESH_CALIBRATE"
      ],
      "id": "Klipper.BED_MESH_CALIBRATE[0]",
      "parameters": [
        {
          "description": "",
          "label": "METHOD=manual",
          "optional": true,
          "tag": "METHODmanual",
          "values": []
        },
        {
          "description": "",
          "label": "<probe_parameter>=<value>",
          "optional": true,
          "tag": "probe_parameter=value",
          "values": []
        },
        {
          "description": "",
          "label": "<mesh_parameter>=<value>",
          "optional": true,
          "tag": "mesh_parameter=value",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This command probes the bed using generated points specified by the  parameters in the config",
      "url": "https://www.klipper3d.org/G-Codes.html#mesh-bed-leveling"
    }
  ],
  "BED_MESH_CLEAR": [
    {
      "brief": "This command clears the mesh and removes all  z adjustment.  It is recommended to put this in your end-gcode.",
      "codes": [
        "BED_MESH_CLEAR"
      ],
      "id": "Klipper.BED_MESH_CLEAR[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "This command clears the mesh and removes all  z adjustment",
      "url": "https://www.klipper3d.org/G-Codes.html#mesh-bed-leveling"
    }
  ],
  "BED_MESH_MAP": [
    {
      "brief": "Like to BED_MESH_OUTPUT, this command prints the current  state of the mesh to the terminal.  Instead of printing the values in a  human readable format, the state is serialized in json format. This allows  octoprint plugins to easily capture the data and generate height maps  approximating the bed's surface.",
      "codes": [
        "BED_MESH_MAP"
      ],
      "id": "Klipper.BED_MESH_MAP[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "Like to BED_MESH_OUTPUT, this command prints the current  state of the mesh to the terminal",
      "url": "https://www.klipper3d.org/G-Codes.html#mesh-bed-leveling"
    }
  ],
  "BED_MESH_OFFSET": [
    {
      "brief": "Applies X and/or Y  offsets to the mesh lookup.  This is useful for printers with  independent extruders, as an offset is necessary to produce  correct Z adjustment after a tool change.",
      "codes": [
        "BED_MESH_OFFSET"
      ],
      "id": "Klipper.BED_MESH_OFFSET[0]",
      "parameters": [
        {
          "description": "",
          "label": "X=<value>",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": "",
          "label": "Y=<value>",
          "optional": true,
          "tag": "Y",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Applies X and/or Y  offsets to the mesh lookup",
      "url": "https://www.klipper3d.org/G-Codes.html#mesh-bed-leveling"
    }
  ],
  "BED_MESH_OUTPUT": [
    {
      "brief": "This command outputs the current probed  z values and current mesh values to the terminal.  If PGP=1 is specified  the X, Y coordinates generated by bed_mesh, along with their associated  indices, will be output to the terminal.",
      "codes": [
        "BED_MESH_OUTPUT"
      ],
      "id": "Klipper.BED_MESH_OUTPUT[0]",
      "parameters": [
        {
          "description": "",
          "label": "PGP=<0:1>",
          "optional": true,
          "tag": "PGP",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This command outputs the current probed  z values and current mesh values to the terminal",
      "url": "https://www.klipper3d.org/G-Codes.html#mesh-bed-leveling"
    }
  ],
  "BED_MESH_PROFILE": [
    {
      "brief": "This  command provides profile management for mesh state.  LOAD will  restore the mesh state from the profile matching the supplied name.  SAVE will save the current mesh state to a profile matching the  supplied name.  Remove will delete the profile matching the  supplied name from persistent memory.  Note that after SAVE or  REMOVE operations have been run the SAVE_CONFIG gcode must be run  to make the changes to peristent memory permanent.",
      "codes": [
        "BED_MESH_PROFILE"
      ],
      "id": "Klipper.BED_MESH_PROFILE[0]",
      "parameters": [
        {
          "description": "",
          "label": "LOAD=<name>",
          "optional": false,
          "tag": "LOAD",
          "values": []
        },
        {
          "description": "",
          "label": "SAVE=<name>",
          "optional": false,
          "tag": "SAVE",
          "values": []
        },
        {
          "description": "",
          "label": "REMOVE=<name>",
          "optional": false,
          "tag": "REMOVE",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This  command provides profile management for mesh state",
      "url": "https://www.klipper3d.org/G-Codes.html#mesh-bed-leveling"
    }
  ],
  "BED_SCREWS_ADJUST": [
    {
      "brief": "This command will invoke the bed screws  adjustment tool. It will command the nozzle to different locations  (as defined in the config file) and allow one to make adjustments to  the bed screws so that the bed is a constant distance from the  nozzle.",
      "codes": [
        "BED_SCREWS_ADJUST"
      ],
      "id": "Klipper.BED_SCREWS_ADJUST[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "This command will invoke the bed screws  adjustment tool",
      "url": "https://www.klipper3d.org/G-Codes.html#bed-screws-helper"
    }
  ],
  "BED_TILT_CALIBRATE": [
    {
      "brief": "This command will probe the points specified in the config and then  recommend updated x and y tilt adjustments. See the PROBE command  for details on the optional probe parameters. If METHOD=manual is  specified then the manual probing tool is activated - see the  MANUAL_PROBE command above for details on the additional commands  available while this tool is active.",
      "codes": [
        "BED_TILT_CALIBRATE"
      ],
      "id": "Klipper.BED_TILT_CALIBRATE[0]",
      "parameters": [
        {
          "description": "",
          "label": "METHOD=manual",
          "optional": true,
          "tag": "METHODmanual",
          "values": []
        },
        {
          "description": "",
          "label": "<probe_parameter>=<value>",
          "optional": true,
          "tag": "probe_parameter=value",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This command will probe the points specified in the config and then  recommend updated x and y tilt adjustments",
      "url": "https://www.klipper3d.org/G-Codes.html#bed-tilt"
    }
  ],
  "BLTOUCH_DEBUG": [
    {
      "brief": "This sends a command to the  BLTouch. It may be useful for debugging. Available commands are",
      "codes": [
        "BLTOUCH_DEBUG"
      ],
      "id": "Klipper.BLTOUCH_DEBUG[0]",
      "parameters": [
        {
          "description": "",
          "label": "COMMAND=<command>",
          "optional": false,
          "tag": "COMMAND",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This sends a command to the  BLTouch",
      "url": "https://www.klipper3d.org/G-Codes.html#bltouch"
    }
  ],
  "BLTOUCH_STORE": [
    {
      "brief": "This stores an output mode in the  EEPROM of a BLTouch V3.1 Available output_modes are",
      "codes": [
        "BLTOUCH_STORE"
      ],
      "id": "Klipper.BLTOUCH_STORE[0]",
      "parameters": [
        {
          "description": "",
          "label": "MODE=<output_mode>",
          "optional": false,
          "tag": "MODE",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This stores an output mode in the  EEPROM of a BLTouch V3",
      "url": "https://www.klipper3d.org/G-Codes.html#bltouch"
    }
  ],
  "CALC_MEASURED_SKEW": [
    {
      "brief": "Calculates and reports the skew (in radians and  degrees) based on a measured print. This can be useful for  determining the printer's current skew after correction has been  applied. It may also be useful before correction is applied to  determine if skew correction is necessary. See",
      "codes": [
        "CALC_MEASURED_SKEW"
      ],
      "id": "Klipper.CALC_MEASURED_SKEW[0]",
      "parameters": [
        {
          "description": "",
          "label": "AC=<ac_length>",
          "optional": true,
          "tag": "AC",
          "values": []
        },
        {
          "description": "",
          "label": "BD=<bd_length>",
          "optional": true,
          "tag": "BD",
          "values": []
        },
        {
          "description": "",
          "label": "AD=<ad_length>",
          "optional": true,
          "tag": "AD",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Calculates and reports the skew (in radians and  degrees) based on a measured print",
      "url": "https://www.klipper3d.org/G-Codes.html#skew-correction"
    }
  ],
  "CANCEL_PRINT": [
    {
      "brief": "Cancels the current print.",
      "codes": [
        "CANCEL_PRINT"
      ],
      "id": "Klipper.CANCEL_PRINT[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "Cancels the current print",
      "url": "https://www.klipper3d.org/G-Codes.html#pause-resume"
    }
  ],
  "CLEAR_PAUSE": [
    {
      "brief": "Clears the current paused state without resuming the  print. This is useful if one decides to cancel a print after a  PAUSE. It is recommended to add this to your start gcode to make  sure the paused state is fresh for each print.",
      "codes": [
        "CLEAR_PAUSE"
      ],
      "id": "Klipper.CLEAR_PAUSE[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "Clears the current paused state without resuming the  print",
      "url": "https://www.klipper3d.org/G-Codes.html#pause-resume"
    }
  ],
  "DELTA_ANALYZE": [
    {
      "brief": "This command is used during enhanced delta  calibration. See",
      "codes": [
        "DELTA_ANALYZE"
      ],
      "id": "Klipper.DELTA_ANALYZE[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "This command is used during enhanced delta  calibration",
      "url": "https://www.klipper3d.org/G-Codes.html#delta-calibration"
    }
  ],
  "DELTA_CALIBRATE": [
    {
      "brief": "This  command will probe seven points on the bed and recommend updated  endstop positions, tower angles, and radius. See the PROBE command  for details on the optional probe parameters. If METHOD=manual is  specified then the manual probing tool is activated - see the  MANUAL_PROBE command above for details on the additional commands  available while this tool is active.",
      "codes": [
        "DELTA_CALIBRATE"
      ],
      "id": "Klipper.DELTA_CALIBRATE[0]",
      "parameters": [
        {
          "description": "",
          "label": "METHOD=manual",
          "optional": true,
          "tag": "METHODmanual",
          "values": []
        },
        {
          "description": "",
          "label": "<probe_parameter>=<value>",
          "optional": true,
          "tag": "probe_parameter=value",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This  command will probe seven points on the bed and recommend updated  endstop positions, tower angles, and radius",
      "url": "https://www.klipper3d.org/G-Codes.html#delta-calibration"
    }
  ],
  "DISABLE_FILAMENT_WIDTH_LOG": [
    {
      "brief": "- Turn off diameter logging",
      "codes": [
        "DISABLE_FILAMENT_WIDTH_LOG"
      ],
      "id": "Klipper.DISABLE_FILAMENT_WIDTH_LOG[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "- Turn off diameter logging",
      "url": "https://www.klipper3d.org/G-Codes.html#hall-filament-width-sensor-commands"
    }
  ],
  "DISABLE_FILAMENT_WIDTH_SENSOR": [
    {
      "brief": "- Turn off the filament width sensor and  stop using it for flow control",
      "codes": [
        "DISABLE_FILAMENT_WIDTH_SENSOR"
      ],
      "id": "Klipper.DISABLE_FILAMENT_WIDTH_SENSOR[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "- Turn off the filament width sensor and  stop using it for flow control",
      "url": "https://www.klipper3d.org/G-Codes.html#filament-width-sensor-commands"
    }
  ],
  "DUMP_TMC": [
    {
      "brief": "This command will read the TMC driver  registers and report their values.",
      "codes": [
        "DUMP_TMC"
      ],
      "id": "Klipper.DUMP_TMC[0]",
      "parameters": [
        {
          "description": "",
          "label": "STEPPER=<name>",
          "optional": false,
          "tag": "STEPPER",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This command will read the TMC driver  registers and report their values",
      "url": "https://www.klipper3d.org/G-Codes.html#tmc-stepper-drivers"
    }
  ],
  "ENABLE_FILAMENT_WIDTH_LOG": [
    {
      "brief": "- Turn on diameter logging",
      "codes": [
        "ENABLE_FILAMENT_WIDTH_LOG"
      ],
      "id": "Klipper.ENABLE_FILAMENT_WIDTH_LOG[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "- Turn on diameter logging",
      "url": "https://www.klipper3d.org/G-Codes.html#hall-filament-width-sensor-commands"
    }
  ],
  "ENABLE_FILAMENT_WIDTH_SENSOR": [
    {
      "brief": "- Turn on the filament width sensor and  start using it for flow control",
      "codes": [
        "ENABLE_FILAMENT_WIDTH_SENSOR"
      ],
      "id": "Klipper.ENABLE_FILAMENT_WIDTH_SENSOR[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "- Turn on the filament width sensor and  start using it for flow control",
      "url": "https://www.klipper3d.org/G-Codes.html#filament-width-sensor-commands"
    }
  ],
  "ENDSTOP_PHASE_CALIBRATE": [
    {
      "brief": "If no STEPPER  parameter is provided then this command will reports statistics on  endstop stepper phases during past homing operations. When a STEPPER  parameter is provided it arranges for the given endstop phase  setting to be written to the config file (in conjunction with the  SAVE_CONFIG command).",
      "codes": [
        "ENDSTOP_PHASE_CALIBRATE"
      ],
      "id": "Klipper.ENDSTOP_PHASE_CALIBRATE[0]",
      "parameters": [
        {
          "description": "",
          "label": "STEPPER=<config_name>",
          "optional": true,
          "tag": "STEPPER",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "If no STEPPER  parameter is provided then this command will reports statistics on  endstop stepper phases during past homing operations",
      "url": "https://www.klipper3d.org/G-Codes.html#endstop-adjustments-by-stepper-phase"
    }
  ],
  "FACTOR": [
    {
      "brief": "and",
      "codes": [
        "FACTOR"
      ],
      "id": "Klipper.FACTOR[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "and",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "FIRMWARE_RESTART": [
    {
      "brief": "This is similar to a RESTART command, but it  also clears any error state from the micro-controller.",
      "codes": [
        "FIRMWARE_RESTART"
      ],
      "id": "Klipper.FIRMWARE_RESTART[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "This is similar to a RESTART command, but it  also clears any error state from the micro-controller",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "FORCE_MOVE": [
    {
      "brief": "This command will forcibly move the given stepper  the given distance (in mm) at the given constant velocity (in  mm/s). If ACCEL is specified and is greater than zero, then the  given acceleration (in mm/s^2) will be used; otherwise no  acceleration is performed. No boundary checks are performed; no  kinematic updates are made; other parallel steppers on an axis will  not be moved. Use caution as an incorrect command could cause  damage! Using this command will almost certainly place the low-level  kinematics in an incorrect state; issue a G28 afterwards to reset  the kinematics. This command is intended for low-level diagnostics  and debugging.",
      "codes": [
        "FORCE_MOVE"
      ],
      "id": "Klipper.FORCE_MOVE[0]",
      "parameters": [
        {
          "description": "",
          "label": "STEPPER=<config_name>",
          "optional": false,
          "tag": "STEPPER",
          "values": []
        },
        {
          "description": "",
          "label": "DISTANCE=<value>",
          "optional": false,
          "tag": "DISTANCE",
          "values": []
        },
        {
          "description": "",
          "label": "VELOCITY=<value>",
          "optional": false,
          "tag": "VELOCITY",
          "values": []
        },
        {
          "description": "",
          "label": "ACCEL=<value>",
          "optional": true,
          "tag": "ACCEL",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This command will forcibly move the given stepper  the given distance (in mm) at the given constant velocity (in  mm/s)",
      "url": "https://www.klipper3d.org/G-Codes.html#force-movement"
    }
  ],
  "G0": [
    {
      "brief": "Add a straight line movement to the planner",
      "codes": [
        "G0",
        "G1"
      ],
      "id": "Marlin.G0[0]",
      "parameters": [
        {
          "description": "An absolute or relative coordinate on the X axis (in current units).",
          "label": "[X<pos>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "An absolute or relative coordinate on the Y axis (in current units).",
          "label": "[Y<pos>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "An absolute or relative coordinate on the Z axis (in current units).",
          "label": "[Z<pos>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "An absolute or relative coordinate on the E (extruder) axis (in current units). The E axis describes the position of the filament in terms of input to the extruder feeder.",
          "label": "[E<pos>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "The maximum movement rate of the move between the start and end point. The feedrate set here applies to subsequent moves that omit this parameter.",
          "label": "[F<rate>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "rate",
              "type": "float"
            }
          ]
        }
      ],
      "related": [
        "G2",
        "G3",
        "G5",
        "M82",
        "M83",
        "G91"
      ],
      "source": "Marlin",
      "title": "Linear Move",
      "url": "https://marlinfw.org/docs/gcode/G000-G001"
    },
    {
      "brief": "* G0 : Rapid Move\n* G1 : Linear Move",
      "codes": [
        "G0",
        "G1"
      ],
      "id": "RepRap.G0[0]",
      "parameters": [
        {
          "description": " The position to move to on the X axis",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " The position to move to on the Y axis",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " The position to move to on the Z axis",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " The amount to extrude between the starting point and ending point",
          "label": "Ennn",
          "optional": true,
          "tag": "E",
          "values": []
        },
        {
          "description": " The feedrate per minute of the move between the starting point and ending point (if supplied)",
          "label": "Fnnn",
          "optional": true,
          "tag": "F",
          "values": []
        },
        {
          "description": " (RepRapFirmware) Flag to check if an endstop was hit (H1 to check, H0 to ignore, other  see note, default is H0)",
          "label": "Hnnn",
          "optional": true,
          "tag": "H",
          "values": []
        },
        {
          "description": " (RepRapFirmware) Restore point number ",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " Laser cutter/engraver power. In RepRapFirmware, when not in laser mode S in interpreted the same as H.",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G0 & G1: Move",
      "url": "https://reprap.org/wiki/G-code#G0_.26_G1:_Move"
    }
  ],
  "G1": [
    {
      "brief": "",
      "codes": [
        "G1"
      ],
      "id": "Klipper.G1[0]",
      "parameters": [
        {
          "description": "",
          "label": "[X<Xpos>]",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": "",
          "label": "[Y<Ypos>]",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": "",
          "label": "[Z<Zpos>]",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": "",
          "label": "[E<Epos>]",
          "optional": true,
          "tag": "E",
          "values": []
        },
        {
          "description": "",
          "label": "[F<Fspeed>]",
          "optional": true,
          "tag": "F",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Add a straight line movement to the planner",
      "codes": [
        "G0",
        "G1"
      ],
      "id": "Marlin.G1[0]",
      "parameters": [
        {
          "description": "An absolute or relative coordinate on the X axis (in current units).",
          "label": "[X<pos>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "An absolute or relative coordinate on the Y axis (in current units).",
          "label": "[Y<pos>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "An absolute or relative coordinate on the Z axis (in current units).",
          "label": "[Z<pos>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "An absolute or relative coordinate on the E (extruder) axis (in current units). The E axis describes the position of the filament in terms of input to the extruder feeder.",
          "label": "[E<pos>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "The maximum movement rate of the move between the start and end point. The feedrate set here applies to subsequent moves that omit this parameter.",
          "label": "[F<rate>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "rate",
              "type": "float"
            }
          ]
        }
      ],
      "related": [
        "G2",
        "G3",
        "G5",
        "M82",
        "M83",
        "G91"
      ],
      "source": "Marlin",
      "title": "Linear Move",
      "url": "https://marlinfw.org/docs/gcode/G000-G001"
    },
    {
      "brief": "* G0 : Rapid Move\n* G1 : Linear Move",
      "codes": [
        "G0",
        "G1"
      ],
      "id": "RepRap.G1[0]",
      "parameters": [
        {
          "description": " The position to move to on the X axis",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " The position to move to on the Y axis",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " The position to move to on the Z axis",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " The amount to extrude between the starting point and ending point",
          "label": "Ennn",
          "optional": true,
          "tag": "E",
          "values": []
        },
        {
          "description": " The feedrate per minute of the move between the starting point and ending point (if supplied)",
          "label": "Fnnn",
          "optional": true,
          "tag": "F",
          "values": []
        },
        {
          "description": " (RepRapFirmware) Flag to check if an endstop was hit (H1 to check, H0 to ignore, other  see note, default is H0)",
          "label": "Hnnn",
          "optional": true,
          "tag": "H",
          "values": []
        },
        {
          "description": " (RepRapFirmware) Restore point number ",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " Laser cutter/engraver power. In RepRapFirmware, when not in laser mode S in interpreted the same as H.",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G0 & G1: Move",
      "url": "https://reprap.org/wiki/G-code#G0_.26_G1:_Move"
    }
  ],
  "G10": [
    {
      "brief": "",
      "codes": [
        "G10"
      ],
      "id": "Klipper.G10[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#firmware-retraction"
    },
    {
      "brief": "Retract the filament",
      "codes": [
        "G10"
      ],
      "id": "Marlin.G10[0]",
      "parameters": [
        {
          "description": "Use `G10 S1` to do a swap retraction, before changing extruders. The subsequent [`G11`](/docs/gcode/G011.html) (after tool change) will do a swap recover. (Requires `EXTRUDERS` > 1)",
          "label": "[S<bool>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Retract",
      "url": "https://marlinfw.org/docs/gcode/G010"
    },
    {
      "brief": "",
      "codes": [
        "G10"
      ],
      "id": "RepRap.G10[0]",
      "parameters": [
        {
          "description": " Tool number",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Offset mode ",
          "label": "Lnnn",
          "optional": true,
          "tag": "L",
          "values": []
        },
        {
          "description": " X offset",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Y offset",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Z offset",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " other axis offsets",
          "label": "U,V,W,A,B,Cnnn",
          "optional": true,
          "tag": "U",
          "values": []
        },
        {
          "description": " Standby temperature(s) (RepRapFirmware)",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " Active temperature(s) (RepRapFirmware)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G10: Set tool Offset and/or workplace coordinates and/or tool temperatures",
      "url": "https://reprap.org/wiki/G-code#G10:_Set_tool_Offset_and.2For_workplace_coordinates_and.2For_tool_temperatures"
    },
    {
      "brief": "",
      "codes": [
        "G10"
      ],
      "id": "RepRap.G10[1]",
      "parameters": [
        {
          "description": " retract length (S1 = long retract, S0 = short retract = default) (Repetier only)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G10: Retract",
      "url": "https://reprap.org/wiki/G-code#G10:_Retract"
    }
  ],
  "G100": [
    {
      "brief": "",
      "codes": [
        "G100"
      ],
      "id": "RepRap.G100[0]",
      "parameters": [
        {
          "description": " Flag to set floor for X axis",
          "label": "X",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Flag to set floor for Y axis",
          "label": "Y",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Flag to set floor for Z axis",
          "label": "Z",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " Radius to add",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G100: Calibrate floor or rod radius",
      "url": "https://reprap.org/wiki/G-code#G100:_Calibrate_floor_or_rod_radius"
    }
  ],
  "G11": [
    {
      "brief": "",
      "codes": [
        "G11"
      ],
      "id": "Klipper.G11[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#firmware-retraction"
    },
    {
      "brief": "Recover the filament with firmware-based retract.",
      "codes": [
        "G11"
      ],
      "id": "Marlin.G11[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Recover",
      "url": "https://marlinfw.org/docs/gcode/G011"
    },
    {
      "brief": "",
      "codes": [
        "G11"
      ],
      "id": "RepRap.G11[0]",
      "parameters": [
        {
          "description": " retract length (S1 = long retract, S0 = short retract = default) (Repetier only)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G11: Unretract",
      "url": "https://reprap.org/wiki/G-code#G11:_Unretract"
    }
  ],
  "G12": [
    {
      "brief": "Perform the nozzle cleaning procedure.",
      "codes": [
        "G12"
      ],
      "id": "Marlin.G12[0]",
      "parameters": [
        {
          "description": "Pattern style selection",
          "label": "[P<0|1|2>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "description": "Stroke straight back and forth",
              "tag": 0
            },
            {
              "description": "Move in a zigzag pattern",
              "tag": 1
            },
            {
              "description": "Move in a circular pattern",
              "tag": 2
            }
          ]
        },
        {
          "description": "Radius of nozzle cleaning circle",
          "label": "[R<radius>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "radius",
              "type": "float"
            }
          ]
        },
        {
          "description": "Number of repetitions of the pattern",
          "label": "[S<count>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "count",
              "type": "int"
            }
          ]
        },
        {
          "description": "Number of triangles in the zigzag pattern",
          "label": "[T<count>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "count",
              "type": "int"
            }
          ]
        },
        {
          "description": "Include X motion when cleaning with limited axes. (Leave out `X`, `Y`, and `Z` for non-limited cleaning.)",
          "label": "[X<flag>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "type": "flag"
            }
          ]
        },
        {
          "description": "Include Y motion when cleaning with limited axes. (Leave out `X`, `Y`, and `Z` for non-limited cleaning.)",
          "label": "[Y<flag>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "type": "flag"
            }
          ]
        },
        {
          "description": "Include Z motion when cleaning with limited axes. (Leave out `X`, `Y`, and `Z` for non-limited cleaning.)",
          "label": "[Z<flag>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "type": "flag"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Clean the Nozzle",
      "url": "https://marlinfw.org/docs/gcode/G012"
    },
    {
      "brief": "",
      "codes": [
        "G12"
      ],
      "id": "RepRap.G12[0]",
      "parameters": [
        {
          "description": " Pattern style selection",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Number of strokes (i.e. back-and-forth movements)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Number of repetitions",
          "label": "Tnnn",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " 0=Never 1=Always apply software endstops (Marlin 2.0.6+)",
          "label": "Ennn",
          "optional": true,
          "tag": "E",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G12: Clean Tool",
      "url": "https://reprap.org/wiki/G-code#G12:_Clean_Tool"
    }
  ],
  "G130": [
    {
      "brief": "",
      "codes": [
        "G130"
      ],
      "id": "RepRap.G130[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G130: Set digital potentiometer value",
      "url": "https://reprap.org/wiki/G-code#G130:_Set_digital_potentiometer_value"
    }
  ],
  "G131": [
    {
      "brief": "",
      "codes": [
        "G131"
      ],
      "id": "RepRap.G131[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G131: Remove offset",
      "url": "https://reprap.org/wiki/G-code#G131:_Remove_offset"
    }
  ],
  "G132": [
    {
      "brief": "",
      "codes": [
        "G132"
      ],
      "id": "RepRap.G132[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G132: Calibrate endstop offsets",
      "url": "https://reprap.org/wiki/G-code#G132:_Calibrate_endstop_offsets"
    }
  ],
  "G133": [
    {
      "brief": "",
      "codes": [
        "G133"
      ],
      "id": "RepRap.G133[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G133: Measure steps to top",
      "url": "https://reprap.org/wiki/G-code#G133:_Measure_steps_to_top"
    }
  ],
  "G161": [
    {
      "brief": "",
      "codes": [
        "G161"
      ],
      "id": "RepRap.G161[0]",
      "parameters": [
        {
          "description": " Flag to home the X axis to its minimum position",
          "label": "X",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Flag to home the Y axis to its minimum position",
          "label": "Y",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Flag to home the Z axis to its minimum position",
          "label": "Z",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " Desired feedrate for this command",
          "label": "Fnnn",
          "optional": true,
          "tag": "F",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G161: Home axes to minimum",
      "url": "https://reprap.org/wiki/G-code#G161:_Home_axes_to_minimum"
    }
  ],
  "G162": [
    {
      "brief": "",
      "codes": [
        "G162"
      ],
      "id": "RepRap.G162[0]",
      "parameters": [
        {
          "description": " Flag to home the X axis to its maximum position",
          "label": "X",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Flag to home the Y axis to its maximum position",
          "label": "Y",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Flag to home the Z axis to its maximum position",
          "label": "Z",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " Desired feedrate for this command",
          "label": "Fnnn",
          "optional": true,
          "tag": "F",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G162: Home axes to maximum",
      "url": "https://reprap.org/wiki/G-code#G162:_Home_axes_to_maximum"
    }
  ],
  "G17": [
    {
      "brief": "Select CNC workspace plane",
      "codes": [
        "G17",
        "G18",
        "G19"
      ],
      "id": "Marlin.G17[0]",
      "parameters": [],
      "related": [
        "G2",
        "G3",
        "G5"
      ],
      "source": "Marlin",
      "title": "CNC Workspace Planes",
      "url": "https://marlinfw.org/docs/gcode/G017-G019"
    },
    {
      "brief": "These codes set the current plane as follows:\n* G17 : XY (default)\n* G18 : ZX\n* G19 : YZ\nThis mode applies to G2/G3 arc moves. Normal arc moves are in the XY plane, and for most applications that's all you need. For CNC routing it can be useful to do small \"digging\" moves while making cuts, so to keep the G-code compact it uses G2/G3 arcs involving the Z plane.\nThese commands are supported in Marlin 1.1.4 and later with ARC_SUPPORT and CNC_WORKSPACE_PLANES enabled.",
      "codes": [
        "G17",
        "G18",
        "G19"
      ],
      "id": "RepRap.G17[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G17..19: Plane Selection (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#G17..19:_Plane_Selection_.28CNC_specific.29"
    }
  ],
  "G18": [
    {
      "brief": "Select CNC workspace plane",
      "codes": [
        "G17",
        "G18",
        "G19"
      ],
      "id": "Marlin.G18[0]",
      "parameters": [],
      "related": [
        "G2",
        "G3",
        "G5"
      ],
      "source": "Marlin",
      "title": "CNC Workspace Planes",
      "url": "https://marlinfw.org/docs/gcode/G017-G019"
    },
    {
      "brief": "These codes set the current plane as follows:\n* G17 : XY (default)\n* G18 : ZX\n* G19 : YZ\nThis mode applies to G2/G3 arc moves. Normal arc moves are in the XY plane, and for most applications that's all you need. For CNC routing it can be useful to do small \"digging\" moves while making cuts, so to keep the G-code compact it uses G2/G3 arcs involving the Z plane.\nThese commands are supported in Marlin 1.1.4 and later with ARC_SUPPORT and CNC_WORKSPACE_PLANES enabled.",
      "codes": [
        "G17",
        "G18",
        "G19"
      ],
      "id": "RepRap.G18[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G17..19: Plane Selection (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#G17..19:_Plane_Selection_.28CNC_specific.29"
    }
  ],
  "G19": [
    {
      "brief": "Select CNC workspace plane",
      "codes": [
        "G17",
        "G18",
        "G19"
      ],
      "id": "Marlin.G19[0]",
      "parameters": [],
      "related": [
        "G2",
        "G3",
        "G5"
      ],
      "source": "Marlin",
      "title": "CNC Workspace Planes",
      "url": "https://marlinfw.org/docs/gcode/G017-G019"
    },
    {
      "brief": "These codes set the current plane as follows:\n* G17 : XY (default)\n* G18 : ZX\n* G19 : YZ\nThis mode applies to G2/G3 arc moves. Normal arc moves are in the XY plane, and for most applications that's all you need. For CNC routing it can be useful to do small \"digging\" moves while making cuts, so to keep the G-code compact it uses G2/G3 arcs involving the Z plane.\nThese commands are supported in Marlin 1.1.4 and later with ARC_SUPPORT and CNC_WORKSPACE_PLANES enabled.",
      "codes": [
        "G17",
        "G18",
        "G19"
      ],
      "id": "RepRap.G19[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G17..19: Plane Selection (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#G17..19:_Plane_Selection_.28CNC_specific.29"
    }
  ],
  "G2": [
    {
      "brief": "",
      "codes": [
        "G2"
      ],
      "id": "Klipper.G2[0]",
      "parameters": [
        {
          "description": "",
          "label": "[X<Xpos>]",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": "",
          "label": "[Y<Ypos>]",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": "",
          "label": "[Z<Zpos>]",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": "",
          "label": "[E<Epos>]",
          "optional": true,
          "tag": "E",
          "values": []
        },
        {
          "description": "",
          "label": "[F<Fspeed>]",
          "optional": true,
          "tag": "F",
          "values": []
        },
        {
          "description": "",
          "label": "I<Ivalue>",
          "optional": false,
          "tag": "I",
          "values": []
        },
        {
          "description": "",
          "label": "J<Jvalue>",
          "optional": false,
          "tag": "J",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-arcs"
    },
    {
      "brief": "Add an arc or circle movement to the planner",
      "codes": [
        "G2",
        "G3"
      ],
      "id": "Marlin.G2[0]",
      "parameters": [
        {
          "description": "An offset from the current X position to use as the arc center",
          "label": "I<offset>",
          "optional": false,
          "tag": "I",
          "type": "float",
          "values": [
            {
              "tag": "offset",
              "type": "float"
            }
          ]
        },
        {
          "description": "An offset from the current Y position to use as the arc center",
          "label": "J<offset>",
          "optional": false,
          "tag": "J",
          "type": "float",
          "values": [
            {
              "tag": "offset",
              "type": "float"
            }
          ]
        },
        {
          "description": "A radius from the current XY position to use as the arc center",
          "label": "R<radius>",
          "optional": false,
          "tag": "R",
          "type": "float",
          "values": [
            {
              "tag": "radius",
              "type": "float"
            }
          ]
        },
        {
          "description": "A coordinate on the X axis",
          "label": "[X<pos>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "A coordinate on the Y axis",
          "label": "[Y<pos>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "A coordinate on the Z axis",
          "label": "[Z<pos>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "The amount to extrude between the start point and end point",
          "label": "[E<pos>]",
          "optional": true,
          "tag": "E",
          "type": "float",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "The maximum rate of the move between the start and end point",
          "label": "[F<rate>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "optional": false,
              "tag": "rate",
              "type": "float"
            }
          ]
        },
        {
          "description": "Specify complete circles. (Requires `ARC_P_CIRCLES`)",
          "label": "[P<count>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "count",
              "type": "int"
            }
          ]
        },
        {
          "description": "Set the Laser power for the move.",
          "label": "[S<power>]",
          "optional": true,
          "since": "2.0.8",
          "tag": "S",
          "values": [
            {
              "tag": "power",
              "type": "float"
            }
          ]
        }
      ],
      "related": [
        "G17",
        "G18",
        "G19"
      ],
      "source": "Marlin",
      "title": "Arc or Circle Move",
      "url": "https://marlinfw.org/docs/gcode/G002-G003"
    },
    {
      "brief": "",
      "codes": [
        "G2",
        "G3"
      ],
      "id": "RepRap.G2[0]",
      "parameters": [
        {
          "description": " The position to move to on the X axis",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " The position to move to on the Y axis",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " The point in X space from the current X position to maintain a constant distance from",
          "label": "Innn",
          "optional": true,
          "tag": "I",
          "values": []
        },
        {
          "description": " The point in Y space from the current Y position to maintain a constant distance from",
          "label": "Jnnn",
          "optional": true,
          "tag": "J",
          "values": []
        },
        {
          "description": " The amount to extrude between the starting point and ending point",
          "label": "Ennn",
          "optional": true,
          "tag": "E",
          "values": []
        },
        {
          "description": " The feedrate per minute of the move between the starting point and ending point (if supplied)",
          "label": "Fnnn",
          "optional": true,
          "tag": "F",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G2 & G3: Controlled Arc Move",
      "url": "https://reprap.org/wiki/G-code#G2_.26_G3:_Controlled_Arc_Move"
    }
  ],
  "G20": [
    {
      "brief": "Set Units to Inches.",
      "codes": [
        "G20"
      ],
      "id": "Marlin.G20[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Inch Units",
      "url": "https://marlinfw.org/docs/gcode/G020"
    },
    {
      "brief": "",
      "codes": [
        "G20"
      ],
      "id": "RepRap.G20[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G20: Set Units to Inches",
      "url": "https://reprap.org/wiki/G-code#G20:_Set_Units_to_Inches"
    }
  ],
  "G21": [
    {
      "brief": "Set Units to Millimeters.",
      "codes": [
        "G21"
      ],
      "id": "Marlin.G21[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Millimeter Units",
      "url": "https://marlinfw.org/docs/gcode/G021"
    },
    {
      "brief": "",
      "codes": [
        "G21"
      ],
      "id": "RepRap.G21[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G21: Set Units to Millimeters",
      "url": "https://reprap.org/wiki/G-code#G21:_Set_Units_to_Millimeters"
    }
  ],
  "G22": [
    {
      "brief": "",
      "codes": [
        "G22"
      ],
      "id": "RepRap.G22[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G22: Firmware Retract",
      "url": "https://reprap.org/wiki/G-code#G22:_Firmware_Retract"
    }
  ],
  "G23": [
    {
      "brief": "",
      "codes": [
        "G23"
      ],
      "id": "RepRap.G23[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G23: Firmware Recover",
      "url": "https://reprap.org/wiki/G-code#G23:_Firmware_Recover"
    }
  ],
  "G26": [
    {
      "brief": "Test the mesh and adjust.",
      "codes": [
        "G26"
      ],
      "id": "Marlin.G26[0]",
      "parameters": [
        {
          "description": "Bed temperature (otherwise 60\u00b0C) to use for the test print.",
          "label": "[B<temp>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "temp",
              "type": "int"
            }
          ]
        },
        {
          "description": "Continue with the closest point (otherwise, don't)",
          "label": "[C<bool>]",
          "optional": true,
          "tag": "C",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Disable leveling compensation (otherwise, enable)",
          "label": "[D<flag>]",
          "optional": true,
          "tag": "D",
          "values": [
            {
              "type": "flag"
            }
          ]
        },
        {
          "description": "Filament diameter (otherwise 1.75mm)",
          "label": "[F<linear>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Hot end temperature (otherwise 205\u00b0C) to use for the test print.",
          "label": "[H<linear>]",
          "optional": true,
          "tag": "H",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Material preset to use for the test print. Overrides `S`.",
          "label": "[I<index>]",
          "optional": true,
          "since": "2.0.6",
          "tag": "I",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Keep heaters on when done",
          "label": "[K<bool>]",
          "optional": true,
          "tag": "K",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Layer height to use for the test",
          "label": "[L<linear>]",
          "optional": true,
          "tag": "L",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Ooze amount (otherwise 0.3mm). Emitted at the start of the test.",
          "label": "[O<linear>]",
          "optional": true,
          "tag": "O",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Prime Length",
          "label": "[P<linear>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Retraction multiplier. `G26` retract and recover are 1.0mm and 1.2mm respectively. Both retract and recover are multiplied by this value.",
          "label": "[Q<float>]",
          "optional": true,
          "tag": "Q",
          "values": [
            {
              "type": "float"
            }
          ]
        },
        {
          "description": "Number of `G26` Repetitions (otherwise 999)",
          "label": "[R<int>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Nozzle size (otherwise 0.4mm)",
          "label": "[S<float>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "float"
            }
          ]
        },
        {
          "description": "Random deviation. (`U` with no value, 50).",
          "label": "[U<linear>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "X position (otherwise, current X position)",
          "label": "[X<linear>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Y position (otherwise, current Y position)",
          "label": "[Y<linear>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Mesh Validation Pattern",
      "url": "https://marlinfw.org/docs/gcode/G026"
    },
    {
      "brief": "",
      "codes": [
        "G26"
      ],
      "id": "RepRap.G26[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G26: Mesh Validation Pattern",
      "url": "https://reprap.org/wiki/G-code#G26:_Mesh_Validation_Pattern"
    }
  ],
  "G27": [
    {
      "brief": "Park the current toolhead",
      "codes": [
        "G27"
      ],
      "id": "Marlin.G27[0]",
      "parameters": [
        {
          "description": "Z axis action",
          "label": "[P<0|1|2>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "description": "If current Z-pos is lower than Z-park then the nozzle will be raised to reach Z-park height",
              "tag": 0
            },
            {
              "description": "No matter the current Z-pos, the nozzle will be raised/lowered to reach Z-park height",
              "tag": 1
            },
            {
              "description": "The nozzle height will be raised by Z-park amount but never going over the machine's limit of `Z_MAX_POS`",
              "tag": 2
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Park toolhead",
      "url": "https://marlinfw.org/docs/gcode/G027"
    },
    {
      "brief": "Park the toolhead (i.e., nozzle) at a predefined XY position, with a Z raise value that applies over 0 or over the current position depending on the P parameter.\nIn Marlin this G-code is enabled by NOZZLE_PARK_FEATURE and the park position is defined by NOZZLE_PARK_POINT. See G27 Park Toolhead for details.",
      "codes": [
        "G27"
      ],
      "id": "RepRap.G27[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G27: Park toolhead",
      "url": "https://reprap.org/wiki/G-code#G27:_Park_toolhead"
    }
  ],
  "G28": [
    {
      "brief": "",
      "codes": [
        "G28"
      ],
      "id": "Klipper.G28[0]",
      "parameters": [
        {
          "description": "",
          "label": "[X]",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": "",
          "label": "[Y]",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": "",
          "label": "[Z]",
          "optional": true,
          "tag": "Z",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Auto home one or more axes.",
      "codes": [
        "G28"
      ],
      "id": "Marlin.G28[0]",
      "parameters": [
        {
          "description": "Flag to restore bed leveling state after homing. (default `true`)",
          "label": "[L]",
          "optional": true,
          "tag": "L",
          "type": "flag"
        },
        {
          "description": "Flag to skip homing if the position is already trusted",
          "label": "[O]",
          "optional": true,
          "since": "1.1.9",
          "tag": "O",
          "type": "flag"
        },
        {
          "description": "The distance to raise the nozzle before homing",
          "label": "[R]",
          "optional": true,
          "since": "1.1.9",
          "tag": "R",
          "type": "float"
        },
        {
          "description": "Flag to home the X axis",
          "label": "[X]",
          "optional": true,
          "tag": "X",
          "type": "bool"
        },
        {
          "description": "Flag to home the Y axis",
          "label": "[Y]",
          "optional": true,
          "tag": "Y",
          "type": "bool"
        },
        {
          "description": "Flag to home the Z axis",
          "label": "[Z]",
          "optional": true,
          "tag": "Z",
          "type": "bool"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Auto Home",
      "url": "https://marlinfw.org/docs/gcode/G028"
    },
    {
      "brief": "",
      "codes": [
        "G28"
      ],
      "id": "RepRap.G28[0]",
      "parameters": [
        {
          "description": " Flag to go back to the X axis origin",
          "label": "X",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Flag to go back to the Y axis origin",
          "label": "Y",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Flag to go back to the Z axis origin",
          "label": "Z",
          "optional": true,
          "tag": "Z",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G28: Move to Origin (Home)",
      "url": "https://reprap.org/wiki/G-code#G28:_Move_to_Origin_.28Home.29"
    }
  ],
  "G29": [
    {
      "brief": "Probe the bed and enable leveling compensation.",
      "codes": [
        "G29"
      ],
      "id": "Marlin.G29[0]",
      "parameters": [
        {
          "description": "Abort leveling procedure in-progress (`PROBE_MANUALLY`)",
          "label": "[A<bool>]",
          "optional": true,
          "tag": "A",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Create a fake grid for testing. (`DEBUG_LEVELING_FEATURE`)",
          "label": "[C<bool>]",
          "optional": true,
          "tag": "C",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Optional. If leveling is already enabled then exit without leveling. (1.1.9)",
          "label": "[O]",
          "optional": true,
          "tag": "O",
          "type": "bool"
        },
        {
          "description": "Query the current leveling state (`PROBE_MANUALLY`, `DEBUG_LEVELING_FEATURE`)",
          "label": "[Q<bool>]",
          "optional": true,
          "tag": "Q",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Specify X when setting a mesh value (`PROBE_MANUALLY`).",
          "label": "[X<int/float>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "type": "int/float"
            }
          ]
        },
        {
          "description": "Specify Y when setting a mesh value.",
          "label": "[Y<int/float>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "type": "int/float"
            }
          ]
        },
        {
          "description": "Specify the Z offset when setting a mesh value.",
          "label": "[Z<float>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "type": "float"
            }
          ]
        },
        {
          "description": "Write a mesh Z offset.\n- Use `X`,`Y` or `I`,`J` to specify the point.\n- Use `Z` to specify the new value to set.\n",
          "label": "[W<bool>]",
          "optional": true,
          "tag": "W",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Set the XY travel speed between probe points.",
          "label": "[S<rate>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "rate",
              "type": "float"
            }
          ]
        },
        {
          "description": "- By default G29 will engage the Z probe, test the bed, then disengage.\n- Include \"E\" to engage/disengage the Z probe for each sample.\n- There's no extra effect if you have a fixed Z probe.\n",
          "label": "[E<bool>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Dry-Run mode. Just probe the grid but don't update the bed leveling data",
          "label": "[D<bool>]",
          "optional": true,
          "tag": "D",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Set the square width and height of the area to probe.",
          "label": "[H<linear>]",
          "optional": true,
          "tag": "H",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Set the front limit of the probing grid.",
          "label": "[F<linear>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Set the back limit of the probing grid.",
          "label": "[B<linear>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Set the left limit of the probing grid.",
          "label": "[L<linear>]",
          "optional": true,
          "tag": "L",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Set the right limit of the probing grid.",
          "label": "[R<linear>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "(Without `W`) Jettison the leveling data stored in SRAM and turn off leveling compensation. Data in EEPROM is not affected.",
          "label": "[J<bool>]",
          "optional": true,
          "tag": "J",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Set the verbose level",
          "label": "[V<0-4>]",
          "optional": true,
          "tag": "V",
          "values": [
            {
              "tag": "0-4",
              "type": "int"
            }
          ]
        }
      ],
      "related": [
        "M420",
        "M421"
      ],
      "source": "Marlin",
      "title": "Bed Leveling (Bilinear)",
      "url": "https://marlinfw.org/docs/gcode/G029-abl-bilinear"
    },
    {
      "brief": "Probe the bed and enable leveling compensation.",
      "codes": [
        "G29"
      ],
      "id": "Marlin.G29[1]",
      "parameters": [
        {
          "description": "Abort leveling procedure in-progress (`PROBE_MANUALLY`)",
          "label": "[A<bool>]",
          "optional": true,
          "tag": "A",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Create fake points for testing. (`DEBUG_LEVELING_FEATURE`)",
          "label": "[C<bool>]",
          "optional": true,
          "tag": "C",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Optional. If leveling is already enabled then exit without leveling. (1.1.9)",
          "label": "[O]",
          "optional": true,
          "tag": "O",
          "type": "bool"
        },
        {
          "description": "Query the current leveling state (`PROBE_MANUALLY`, `DEBUG_LEVELING_FEATURE`)",
          "label": "[Q<bool>]",
          "optional": true,
          "tag": "Q",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "- By default G29 will engage the Z probe, test the bed, then disengage.\n- Include \"E\" to engage/disengage the Z probe for each sample.\n- There's no extra effect if you have a fixed Z probe. (without `PROBE_MANUALLY`)\n",
          "label": "[E<bool>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Dry-Run mode. Just probe the grid but don't update the bed leveling data",
          "label": "[D<bool>]",
          "optional": true,
          "tag": "D",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Jettison the leveling data stored in SRAM and turn off leveling compensation. Data in EEPROM is not affected.",
          "label": "[J<bool>]",
          "optional": true,
          "tag": "J",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Set the verbose level",
          "label": "[V<0-4>]",
          "optional": true,
          "tag": "V",
          "values": [
            {
              "tag": "0-4",
              "type": "int"
            }
          ]
        }
      ],
      "related": [
        "M420"
      ],
      "source": "Marlin",
      "title": "Bed Leveling (3-Point)",
      "url": "https://marlinfw.org/docs/gcode/G029-abl-3point"
    },
    {
      "brief": "Probe the bed and enable leveling compensation.",
      "codes": [
        "G29"
      ],
      "id": "Marlin.G29[2]",
      "parameters": [
        {
          "description": "Abort leveling procedure in-progress (`PROBE_MANUALLY`)",
          "label": "[A<bool>]",
          "optional": true,
          "tag": "A",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Create a fake grid for testing. (`DEBUG_LEVELING_FEATURE`)",
          "label": "[C<bool>]",
          "optional": true,
          "tag": "C",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Optional. If leveling is already enabled then exit without leveling. (1.1.9)",
          "label": "[O]",
          "optional": true,
          "tag": "O",
          "type": "bool"
        },
        {
          "description": "Query the current leveling state (`PROBE_MANUALLY`, `DEBUG_LEVELING_FEATURE`)",
          "label": "[Q<bool>]",
          "optional": true,
          "tag": "Q",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Set the number of columns (in X) that will be probed.",
          "label": "[X<int>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Set the number of rows (in Y) that will be probed.",
          "label": "[Y<int>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Set the size of the square grid that will be probed - P x P points",
          "label": "[P<int>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Set the XY travel speed between probe points.",
          "label": "[S<rate>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "rate",
              "type": "float"
            }
          ]
        },
        {
          "description": "- By default G29 will engage the Z probe, test the bed, then disengage.\n- Include \"E\" to engage/disengage the Z probe for each sample.\n- There's no extra effect if you have a fixed Z probe. (without `PROBE_MANUALLY`)\n",
          "label": "[E<bool>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Dry-Run mode. Just probe the grid but don't update the bed leveling data",
          "label": "[D<bool>]",
          "optional": true,
          "tag": "D",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Generate a Bed Topology Report",
          "label": "[T<bool>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Set the square width and height of the area to probe.",
          "label": "[H<linear>]",
          "optional": true,
          "tag": "H",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Set the front limit of the probing grid.",
          "label": "[F<linear>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Set the back limit of the probing grid.",
          "label": "[B<linear>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Set the left limit of the probing grid.",
          "label": "[L<linear>]",
          "optional": true,
          "tag": "L",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Set the right limit of the probing grid.",
          "label": "[R<linear>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Jettison the leveling data stored in SRAM and turn off leveling compensation. Data in EEPROM is not affected.",
          "label": "[J<bool>]",
          "optional": true,
          "tag": "J",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Set the verbose level. Level 2 and up act like 'T'.",
          "label": "[V<0-4>]",
          "optional": true,
          "tag": "V",
          "values": [
            {
              "tag": "0-4",
              "type": "int"
            }
          ]
        }
      ],
      "related": [
        "M420"
      ],
      "source": "Marlin",
      "title": "Bed Leveling (Linear)",
      "url": "https://marlinfw.org/docs/gcode/G029-abl-linear"
    },
    {
      "brief": "Probe the bed and enable leveling compensation",
      "codes": [
        "G29"
      ],
      "id": "Marlin.G29[3]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Bed Leveling",
      "url": "https://marlinfw.org/docs/gcode/G029"
    },
    {
      "brief": "Measure Z heights in a grid, enable leveling compensation",
      "codes": [
        "G29"
      ],
      "id": "Marlin.G29[4]",
      "parameters": [
        {
          "description": "",
          "label": "S<0|1|2|3|4|5>",
          "optional": false,
          "tag": "S",
          "values": [
            {
              "description": "Produce a mesh report (see examples below).",
              "tag": 0
            },
            {
              "description": "Start probing mesh points.",
              "tag": 1
            },
            {
              "description": "Probe the next mesh point.",
              "tag": 2
            },
            {
              "description": "Manually modify a single point with `X` `Y` `Z` parameters. (See also [`M421`](/docs/gcode/M421.html).)",
              "tag": 3
            },
            {
              "description": "Set a global Z offset. Positive values are away from the bed; negative values are closer.",
              "tag": 4
            },
            {
              "description": "Reset and disable mesh.",
              "tag": 5
            }
          ]
        },
        {
          "description": "**(Marlin 2.x)** With `S3`, the (0...n-1) X index of the mesh value to modify.",
          "label": "[I<index>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "**(Marlin 2.x)** With `S3`, the (0...n-1) Y index of the mesh value to modify.",
          "label": "[J<index>]",
          "optional": true,
          "tag": "J",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "**(Marlin 1.x)** With `S3`, the (1...n) X count of the mesh value to modify.",
          "label": "[X<count>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "count",
              "type": "int"
            }
          ]
        },
        {
          "description": "**(Marlin 1.x)** With `S3`, the (1...n) Y count of the mesh value to modify.",
          "label": "[Y<count>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "count",
              "type": "int"
            }
          ]
        },
        {
          "description": "With `S3`, the new mesh Z value.",
          "label": "[Z<linear>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        }
      ],
      "related": [
        "M420",
        "M421"
      ],
      "source": "Marlin",
      "title": "Bed Leveling (Manual)",
      "url": "https://marlinfw.org/docs/gcode/G029-mbl"
    },
    {
      "brief": "Probe the bed and enable leveling compensation.",
      "codes": [
        "G29"
      ],
      "id": "Marlin.G29[5]",
      "parameters": [
        {
          "description": "**Activate**\nUnified Bed Leveling (i.e., `M420 S1`)\n",
          "label": "[A<flag>]",
          "optional": true,
          "tag": "A",
          "values": [
            {
              "type": "flag"
            }
          ]
        },
        {
          "description": "**Business Card** mode (`P2` only)\n- Use the 'Business Card' mode of the Manual Probe subsystem with `P2`. A value may be given, or else it will be measured.\n- In this mode of `G29 P2`, use a shim that the nozzle can grab onto as it is lowered.\n  In principle, the nozzle-bed distance is the same when the same resistance is felt in the shim. You can omit the numerical value on first invocation of `G29 P2 B` to measure shim thickness. Subsequent use of `B` will apply the previously-measured thickness by default.\n- Note: A non-compressible Spark Gap feeler gauge is recommended over a business card.\n",
          "label": "[B<mm/flag>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "mm/flag",
              "type": "float"
            }
          ]
        },
        {
          "description": "- `G29 P1 C` Continue:\n  Continues the generation of a partially-constructed Mesh without invalidating previous measurements.\n- `G29 P2 C` Constant: specifies a Constant and tells the Manual Probe subsystem to use the current location in its search for the closest unmeasured Mesh Point.\n- `G29 P3 C` Constant: specifies the Constant for the fill. Otherwise, uses a \"reasonable\" value.\n- `G29 Z C` Current: Use the Current location (instead of bed center or nearest edge).\n",
          "label": "[C<bool/float>]",
          "optional": true,
          "tag": "C",
          "values": [
            {
              "tag": "bool/float",
              "type": "value"
            }
          ]
        },
        {
          "description": "Disable Unified Bed Leveling (i.e., `M420 S0`).",
          "label": "[D<flag>]",
          "optional": true,
          "tag": "D",
          "values": [
            {
              "type": "flag"
            }
          ]
        },
        {
          "description": "Stow probe after probing `E`ach point (`P1` only).",
          "label": "[E<flag>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "type": "flag"
            }
          ]
        },
        {
          "description": "**Fade** height. (UBL only! For others use `M420 Z`)\n\nFade the amount of Mesh Based Compensation over a specified height. At the specified height, no correction is applied and natural printer kinematics take over. If no number is specified for the command, 10mm is assumed to be reasonable.\n",
          "label": "[F<float>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "type": "float",
              "unit": "linear"
            }
          ]
        },
        {
          "description": "**Height**:\n- `G29 P2 H`: Height for Manual Probe raise (`P2` only).\n  Specify the Height to raise the nozzle after each manual probe of the bed.\n  If omitted, the nozzle will raise by `Z_CLEARANCE_BETWEEN_PROBES`.\n- `G29 P4 H` : Offset above the mesh height to place the nozzle.\n  If omitted, `Z_CLEARANCE_BETWEEN_PROBES` will be used.\n",
          "label": "[H<float>]",
          "optional": true,
          "tag": "H",
          "values": [
            {
              "type": "float",
              "unit": "linear"
            }
          ]
        },
        {
          "description": "**Invalidate** a number of mesh points (default 1).\n- Invalidate Mesh Points near the given `X Y` (Default: nozzle position)\n- If no `I` value is given, only the point nearest to the given position is invalidated.\n  Use `T` to produce a map afterward. This command is useful to invalidate a portion of the Mesh so it can be adjusted using other UBL tools. When attempting to invalidate an isolated bad mesh point, the `T` option shows the nozzle position in the Mesh with (#).\n- You can move the nozzle around and use this feature to select the center of the area (or cell) to invalidate.\n",
          "label": "[I<int>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "**Grid** (or 3-Point) leveling:\n- These options calculate a plane and adjust the existing mesh to the bed tilt.\n- If a value is provided, probe a grid with the given number of points, squared.\n- With no value, probe 3 points to find the plane of the bed.\n",
          "label": "[J<int>]",
          "optional": true,
          "tag": "J",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "**Kompare**: Subtract (diff) the stored mesh with this index from the current mesh. This destructively operates on the active mesh, and the result should not be used for printing. (Requires `UBL_DEVEL_DEBUGGING`)\n",
          "label": "[K<int>]",
          "optional": true,
          "requires": "UBL_DEVEL_DEBUGGING",
          "tag": "K",
          "values": [
            {
              "type": "int",
              "unit": "index"
            }
          ]
        },
        {
          "description": "**Load** a mesh. If no index is given, load the previously-activated mesh.\nThe given mesh index will be used for subsequent Load and Store operations.\n",
          "label": "[L<int>]",
          "optional": true,
          "tag": "L",
          "values": [
            {
              "type": "int",
              "unit": "index"
            }
          ]
        },
        {
          "description": "**Phase**: The `P`hase commands are used for the bulk of the work to setup a Mesh. In general, you'll start by initializing with a `G29 P0` or a `G29 P1` then do further refinement with additional Phases.\n",
          "label": "[P<0|1|2|3|4|5|6>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "description": "**Zero Mesh Data** and turn off the Mesh Compensation System. This reverts the machine to the same state it was in before UBL Compensation was enabled. Setting the entire Mesh to Zero is a special case to allow a subsequent `G` or `T` leveling operation for backward-compatibility.\n",
              "tag": 0
            },
            {
              "description": "**Automatic Probing** invalidates the mesh and continues automatic probing using the probe.\n- In most cases the probe can't reach all areas that the nozzle can due to the offsets specified by `X_PROBE_OFFSET_FROM_EXTRUDER` and `Y_PROBE_OFFSET_FROM_EXTRUDER`.\n  Deltabots can only probe within the area where `DELTA_PROBEABLE_RADIUS` and `DELTA_PRINTABLE_RADIUS` overlap.\n- Unreachable points can be filled in later with the `P2` and `P3` phases.\n- Use `C` to leave the previous mesh intact and automatically probe needed points. This allows you to invalidate parts of the mesh but still use Automatic Probing.\n- The `X` and `Y` parameters prioritize where to try and measure points. If omitted, the current probe position is used.\n- Use `T` (Topology) in this phase to report the probing results.\n- `P1` will suspend mesh generation if the controller button is held down. Note that you may need to press and hold the switch for several seconds if moves are underway.\n",
              "tag": 1
            },
            {
              "description": "**Probe Areas** of the mesh that can't be automatically handled.\n- Use `H` to set the height between mesh points. If omitted, Z_CLEARANCE_BETWEEN_PROBES is used. Smaller values will be quicker. Move the nozzle down till it barely touches the bed. Make sure the nozzle is clean and unobstructed. Use caution and move slowly. This can damage your printer! (Uses SIZE_OF_LITTLE_RAISE mm if the nozzle is moving less than BIG_RAISE_NOT_NEEDED mm.)\n- The `H` value can be negative if the mesh dips in a large area. Press and hold the controller button to terminate the current Phase 2 command. You can then re-issue `G29 P 2` with an `H` parameter more suitable for the area you're manually probing. Note that the command tries to start in a corner of the bed where movement will be predictable. Override the distance calculation location with the `X` and `Y` parameters. You can print a mesh Map (`G29 T`) to see where the mesh is invalidated and where the nozzle needs to move to complete the command. Use `C` to indicate that the search should be based on the current position.\n- The `B` parameter for this command is described above. It places the manual probe subsystem into Business Card mode where the thickness of a business card is measured and then used to accurately set the nozzle height in all manual probing for the duration of the command. A Business card can be used, but you'll get better results with a flexible Shim that doesn't compress. This makes it easier to produce similar amounts of force and get more accurate measurements. Google if you're not sure how to use a shim.\n- The `T` (Map) parameter helps track mesh building progress.\n- NOTE: `P2` requires an LCD controller!\n",
              "tag": 2
            },
            {
              "description": "**Fill Unpopulated** regions of the mesh with a fixed value (`C`) or use 'smart fill' to extrapolate from already probed points (`no argument`).\n- With a `C` constant, the closest invalid mesh points to the nozzle will be filled, and then a repeat count can also be specified with `R`.\n- Without `C` it does a **Smart Fill**, which scans the mesh from the edges inward looking for invalid mesh points. Adjacent points are used to determine the bed slope. If the bed is sloped upward from the invalid point, it takes the value of the nearest point. If sloped downward, it's replaced by a value that puts all three points in a line. This version of `G29 P3` is a quick, easy and (usually) safe way to populate unprobed mesh regions before continuing to [`G26`](/docs/gcode/G026.html) Mesh Validation Pattern. Note that this populates the mesh with unverified values. Pay attention and use caution.\n",
              "tag": 3
            },
            {
              "description": "**Fine Tune** the Mesh. Generally used in the form `G29 P4 Rnn Xxxx Yyyy`.\n- This phase requires an LCD Panel. To fine-tune the mesh without a controller, use [`G42`](/docs/gcode/G042.html) and [`M421`](/docs/gcode/M421.html).\n- Phase 4 is meant to be used with [`G26`](/docs/gcode/G026.html) Mesh Validation to fine tune the mesh by direct editing of Mesh Points. Raise and lower points to fine tune the mesh until it gives consistently reliable adhesion.\n- `P4` moves to the closest Mesh Point (and/or the given `X` `Y`), raises the nozzle above the mesh height by the given `H` offset (or default Z_CLEARANCE_BETWEEN_PROBES), and waits while the controller is used to adjust the nozzle height. On click the displayed height is saved in the mesh.\n- Start Phase 4 at a specific location with `X` and `Y`. Adjust a specific number of Mesh Points with the `R` (Repeat) parameter. (If `R` is left out, the whole matrix is assumed.) This command can be terminated early (_e.g.,_ after editing the area of interest) by pressing and holding the encoder button.\n- The general form is `G29 P4 [R points] [X position] [Y position]`.\n- The `H[offset]` parameter is useful if a shim is used to fine-tune the mesh. For a 0.4mm shim the command would be `G29 P4 H0.4`. The nozzle is moved to the shim height, you adjust height to the shim, and on click the height minus the shim thickness is saved in the mesh.\n- _USE WITH CAUTION, as a bad mesh can cause the nozzle to crash into the bed!_\n",
              "tag": 4
            },
            {
              "description": "**Find Mean** Mesh Height and Standard Deviation.\n- Typically, it is easier to use and work with the Mesh if it is Mean-Adjusted. You can specify a `C` parameter to Correct the Mesh to a 0.00 Mean Height. With a `C` parameter this will automatically execute a `G29 P6 C[mean height]`.\n",
              "tag": 5
            },
            {
              "description": "**Shift Mesh** height by the `C` value.\n- The entire Mesh's height is adjusted by the height specified by the `C` parameter. It's useful to be able to adjust the height of a mesh. It can be used to compensate for a poorly-calibrated probe or other errors. Ideally, you should have the Mesh adjusted for a Mean Height of 0.00 and the Z-Probe measuring 0.0 at the Z homing position.\n",
              "tag": 6
            }
          ]
        },
        {
          "description": "Test Pattern. Load the specified Test Pattern to check for correct operation. This command is intended for developers and is not required for everyday bed leveling.\n",
          "label": "[Q<int>]",
          "optional": true,
          "tag": "Q",
          "values": [
            {
              "type": "int",
              "unit": "index"
            }
          ]
        },
        {
          "description": "Repeat count. (Default `GRID_MAX_POINTS_X * GRID_MAX_POINTS_Y`).\n- `P3` Example: `G29 P3 R4 C0` will set the 4 points closest to the nozzle to `0`.\n- `P4` Example: `G29 P4 R3 X80 Y80` will allow you to adjust the 3 points closest to X80 Y80.\n- This parameter does not apply to Phase 1! `P1` will always attempt to probe the full grid.\n",
          "label": "[R<int>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "**Save** the mesh to EEPROM in the given slot.\n- If no slot number is given, save to the last-activated slot.\n- Use `S-1` for G-code output that can be used to restore the mesh anytime.\n- Note that this command also saves the current UBL state (enabled or disabled).\n",
          "label": "[S<slot>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "slot",
              "type": "int"
            }
          ]
        },
        {
          "description": "**Topology**: Include a Topology Map in the output.\n- This parameter can be used alone (`G29 T`) or in combination with most of the other commands.\n- This option works with all Phase commands (_e.g.,_ `G29 P4 R 5 T X 50 Y100 C-0.1 O`)\n- A map type can also be specified:\n  - `T0`: Human-readable (the default)\n  - `T1`: Delimited. Suitable to paste into a spreadsheet to obtain a 3D graph of the mesh.\n",
          "label": "[T<0|1>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": 0
            },
            {
              "tag": 1
            }
          ]
        },
        {
          "description": "**Unlevel**: Probe the outer perimeter to assist bed tramming. (Use with `G29 P1 O`)\n- Only used with `G29 P1 T U`. This speeds up the probing of the edge of the bed. This option is useful when the entire bed doesn't need to be probed because it will be physically adjusted (tramming).\n",
          "label": "[U<flag>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "type": "flag"
            }
          ]
        },
        {
          "description": "Verbosity Level (0-4)",
          "label": "[V<0|1|2|3|4>]",
          "optional": true,
          "tag": "V",
          "values": [
            {
              "tag": 0
            },
            {
              "tag": 1
            },
            {
              "tag": 2
            },
            {
              "tag": 3
            },
            {
              "tag": 4
            }
          ]
        },
        {
          "description": "**_What?_**: Display valuable UBL data. (Requires `UBL_DEVEL_DEBUGGING`)\n",
          "label": "[W<flag>]",
          "optional": true,
          "requires": "UBL_DEVEL_DEBUGGING",
          "tag": "W",
          "values": [
            {
              "type": "flag"
            }
          ]
        },
        {
          "description": "**X position** for all phases and commands (Default: current X)\n",
          "label": "[X<float>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "type": "float",
              "unit": "linear"
            }
          ]
        },
        {
          "description": "**Y position** for all phases and commands (Default: current Y)\n",
          "label": "[Y<float>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "type": "float",
              "unit": "linear"
            }
          ]
        }
      ],
      "related": [
        "M420",
        "M421"
      ],
      "source": "Marlin",
      "title": "Bed Leveling (Unified)",
      "url": "https://marlinfw.org/docs/gcode/G029-ubl"
    },
    {
      "brief": "This command uses a probe to measure the bed height at 3 or more points to determine its tilt and overall flatness. It then enables compensation so that the nozzle will remain parallel to the bed. The printer must be homed with G28 before using this command.\nEach firmware behaves differently and depends on the type of bed leveling that's been configured. For example, Marlin 1.0.2 provides 3 different types of automatic bed leveling (probe required) and a manual bed leveling option. See your firmware's documentation for the specific options available.",
      "codes": [
        "G29"
      ],
      "id": "RepRap.G29[0]",
      "parameters": [
        {
          "description": " Firmware-dependent behavior",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Optional file name for bed height map file (RepRapFirmware only)",
          "label": "Pfile.csv",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G29: Detailed Z-Probe",
      "url": "https://reprap.org/wiki/G-code#G29:_Detailed_Z-Probe"
    },
    {
      "brief": "Marlin 1.0.2 and earlier provides three options for automatic bed leveling:\n* The 3-point method probes the bed at three points to produce a matrix, adjusting for a flat but tilted bed.\n* The planar grid method (non-Delta) probes a grid pattern to produce a matrix by the \"least-squares\" method, adjusting for a flat but tilted bed.\n* The bilinear grid method (Delta only) probes a grid pattern to produce a mesh, using bilinear interpolation to adjust for an uneven bed.\nMarlin 1.1.0 and later allows the bilinear grid (i.e., \"mesh\") method to be used on all types of machines, not just deltas. This is the recommended leveling method going forward.\nAlso in Marlin 1.1.0 and later, the PROBE_MANUALLY option allows all forms of Auto Bed Leveling to be used without a probe. The procedure is similar to that of MESH_BED_LEVELING (see below). Begin the process with G29 to move the nozzle to the first point. Adjust the Z axis using G1 or your host software. Send G29 again to move to the next point and repeat until all points have been sampled.",
      "codes": [
        "G29"
      ],
      "id": "RepRap.G29[1]",
      "parameters": [
        {
          "description": " Set the size of the grid that will be probed (P x P points). Not supported by non-linear delta printer bed leveling. Example: G29 P4",
          "label": "P",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Set the XY travel speed between probe points (in units/min)",
          "label": "S",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Dry-Run mode. Just evaluate the bed Topology - Don't apply or clean the rotation Matrix. Useful to check the topology after a first run of G29.",
          "label": "D",
          "optional": true,
          "tag": "D",
          "values": []
        },
        {
          "description": " Set the verbose level (0-4). Example: G29 V3",
          "label": "V",
          "optional": true,
          "tag": "V",
          "values": []
        },
        {
          "description": " Generate a Bed Topology Report. Example: G29 P5 T for a detailed report. This is useful for manual bed leveling and finding flaws in the bed (to assist with part placement). Not supported by non-linear delta printer bed leveling.",
          "label": "T",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " Set the Front limit of the probing grid",
          "label": "F",
          "optional": true,
          "tag": "F",
          "values": []
        },
        {
          "description": " Set the Back limit of the probing grid",
          "label": "B",
          "optional": true,
          "tag": "B",
          "values": []
        },
        {
          "description": " Set the Left limit of the probing grid",
          "label": "L",
          "optional": true,
          "tag": "L",
          "values": []
        },
        {
          "description": " Set the Right limit of the probing grid",
          "label": "R",
          "optional": true,
          "tag": "R",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G29 Auto Bed Leveling (Marlin - MK4duo)",
      "url": "https://reprap.org/wiki/G-code#G29_Auto_Bed_Leveling_.28Marlin_-_MK4duo.29"
    },
    {
      "brief": "Marlin firmware (version 1.1.0 and later) includes the AUTO_BED_LEVELING_UBL option for Unified Bed Leveling. UBL combines mesh leveling, tilted plane adjustment, 3-point leveling, and manual editing tools all together in a single package. To accomplish so much, UBL overloads `G29` with several new parameters and provides an additional G26 Mesh Tuning feature.\nSee the MarlinFW website for a dedicated Unified Bed Leveling page and complete documentation on `G29` for UBL and `G26` Mesh Validation.",
      "codes": [
        "G29"
      ],
      "id": "RepRap.G29[2]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G29 Unified Bed Leveling (Marlin - MK4duo)",
      "url": "https://reprap.org/wiki/G-code#G29_Unified_Bed_Leveling_.28Marlin_-_MK4duo.29"
    },
    {
      "brief": "Marlin firmware (version 1.0.2 and later) also provides a MESH_BED_LEVELING feature that can be used to perform bed leveling on machines lacking a probe. This form of bed leveling compensates for uneven Z height across the surface of the bed using a mesh and bilinear interpolation.",
      "codes": [
        "G29"
      ],
      "id": "RepRap.G29[3]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G29 Manual Bed Leveling (Marlin - MK4duo)",
      "url": "https://reprap.org/wiki/G-code#G29_Manual_Bed_Leveling_.28Marlin_-_MK4duo.29"
    },
    {
      "brief": "Repetier firmware since v0.91 supports G29 with the optional Snnn parameter as described below. Useful to simply detect the Z bed angle so you can manually readjust your bed and get it as close to in plane as possible. If you wish to apply automatic software Z plane compensation on Repetier, use G32 instead with firmware 0.92.8 and above.\n:S0 Default value. Z bed heights are calculated at the measured points, relative to current Z position before issuing G29.\n:S1 Same as S0, except printer immediately moves to Z maximum position (Z max endstop required!), and calculates new Z maximum height. You must first issue G28 Z to home to Z maximum position before issuing G29 Snnn for this to work correctly, or the printer height will be invalid.\n:S2 Same as S1, except new calculated Z height is also stored to EEPROM.",
      "codes": [
        "G29"
      ],
      "id": "RepRap.G29[4]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G29 Auto Bed Leveling (Repetier-Firmware)",
      "url": "https://reprap.org/wiki/G-code#G29_Auto_Bed_Leveling_.28Repetier-Firmware.29"
    },
    {
      "brief": "RepRapFirmware:\n:S0 (default if no S parameter) Probe the bed, save the height map in a file on the SD card, and activate the height map. The default folder for the height map file is /sys and the default file name is heightmap.csv.\n:S1 Load the height map from file and activate bed compensation. The default folder and filename as for S0.\n:S2 Clear the currently-loaded bed height map\nTo define the grid, see M557.\nIn RepRapFirmware 3.2 and later, G29 runs macro file mesh.g if it exists, otherwise it behaves like G29 S0. The mesh.g file can perform other actions (e.g. homing or tool selection) and then use G29 S0 to do the probing.",
      "codes": [
        "G29"
      ],
      "id": "RepRap.G29[5]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G29 Mesh Bed Compensation (RepRapFirmware)",
      "url": "https://reprap.org/wiki/G-code#G29_Mesh_Bed_Compensation_.28RepRapFirmware.29"
    }
  ],
  "G29.1": [
    {
      "brief": "",
      "codes": [
        "G29.1"
      ],
      "id": "RepRap.G29.1[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G29.1: Set Z probe head offset",
      "url": "https://reprap.org/wiki/G-code#G29.1:_Set_Z_probe_head_offset"
    }
  ],
  "G29.2": [
    {
      "brief": "",
      "codes": [
        "G29.2"
      ],
      "id": "RepRap.G29.2[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G29.2: Set Z probe head offset calculated from toolhead position",
      "url": "https://reprap.org/wiki/G-code#G29.2:_Set_Z_probe_head_offset_calculated_from_toolhead_position"
    }
  ],
  "G3": [
    {
      "brief": "Add an arc or circle movement to the planner",
      "codes": [
        "G2",
        "G3"
      ],
      "id": "Marlin.G3[0]",
      "parameters": [
        {
          "description": "An offset from the current X position to use as the arc center",
          "label": "I<offset>",
          "optional": false,
          "tag": "I",
          "type": "float",
          "values": [
            {
              "tag": "offset",
              "type": "float"
            }
          ]
        },
        {
          "description": "An offset from the current Y position to use as the arc center",
          "label": "J<offset>",
          "optional": false,
          "tag": "J",
          "type": "float",
          "values": [
            {
              "tag": "offset",
              "type": "float"
            }
          ]
        },
        {
          "description": "A radius from the current XY position to use as the arc center",
          "label": "R<radius>",
          "optional": false,
          "tag": "R",
          "type": "float",
          "values": [
            {
              "tag": "radius",
              "type": "float"
            }
          ]
        },
        {
          "description": "A coordinate on the X axis",
          "label": "[X<pos>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "A coordinate on the Y axis",
          "label": "[Y<pos>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "A coordinate on the Z axis",
          "label": "[Z<pos>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "The amount to extrude between the start point and end point",
          "label": "[E<pos>]",
          "optional": true,
          "tag": "E",
          "type": "float",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "The maximum rate of the move between the start and end point",
          "label": "[F<rate>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "optional": false,
              "tag": "rate",
              "type": "float"
            }
          ]
        },
        {
          "description": "Specify complete circles. (Requires `ARC_P_CIRCLES`)",
          "label": "[P<count>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "count",
              "type": "int"
            }
          ]
        },
        {
          "description": "Set the Laser power for the move.",
          "label": "[S<power>]",
          "optional": true,
          "since": "2.0.8",
          "tag": "S",
          "values": [
            {
              "tag": "power",
              "type": "float"
            }
          ]
        }
      ],
      "related": [
        "G17",
        "G18",
        "G19"
      ],
      "source": "Marlin",
      "title": "Arc or Circle Move",
      "url": "https://marlinfw.org/docs/gcode/G002-G003"
    },
    {
      "brief": "",
      "codes": [
        "G2",
        "G3"
      ],
      "id": "RepRap.G3[0]",
      "parameters": [
        {
          "description": " The position to move to on the X axis",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " The position to move to on the Y axis",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " The point in X space from the current X position to maintain a constant distance from",
          "label": "Innn",
          "optional": true,
          "tag": "I",
          "values": []
        },
        {
          "description": " The point in Y space from the current Y position to maintain a constant distance from",
          "label": "Jnnn",
          "optional": true,
          "tag": "J",
          "values": []
        },
        {
          "description": " The amount to extrude between the starting point and ending point",
          "label": "Ennn",
          "optional": true,
          "tag": "E",
          "values": []
        },
        {
          "description": " The feedrate per minute of the move between the starting point and ending point (if supplied)",
          "label": "Fnnn",
          "optional": true,
          "tag": "F",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G2 & G3: Controlled Arc Move",
      "url": "https://reprap.org/wiki/G-code#G2_.26_G3:_Controlled_Arc_Move"
    }
  ],
  "G30": [
    {
      "brief": "Probe bed at current XY location",
      "codes": [
        "G30"
      ],
      "id": "Marlin.G30[0]",
      "parameters": [
        {
          "description": "X probe position",
          "label": "[X<pos>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Y probe position",
          "label": "[Y<pos>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Engage the probe for each point",
          "label": "[E<bool>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "default": 0,
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Single Z-Probe",
      "url": "https://marlinfw.org/docs/gcode/G030"
    },
    {
      "brief": "",
      "codes": [
        "G30"
      ],
      "id": "RepRap.G30[0]",
      "parameters": [
        {
          "description": " Probe point number",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " X coordinate",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Y coordinate",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Z coordinate",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " Height correction",
          "label": "Hnnn",
          "optional": true,
          "tag": "H",
          "values": []
        },
        {
          "description": " Set parameter",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G30: Single Z-Probe",
      "url": "https://reprap.org/wiki/G-code#G30:_Single_Z-Probe"
    }
  ],
  "G31": [
    {
      "brief": "Dock the Z probe sled.",
      "codes": [
        "G31"
      ],
      "id": "Marlin.G31[0]",
      "parameters": [],
      "related": "G32",
      "source": "Marlin",
      "title": "Dock Sled",
      "url": "https://marlinfw.org/docs/gcode/G031"
    },
    {
      "brief": "",
      "codes": [
        "G31"
      ],
      "id": "RepRap.G31[0]",
      "parameters": [
        {
          "description": " Trigger value",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Probe X offset",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Probe Y offset",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Trigger Z height",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " Temperature coefficient(s) of trigger height",
          "label": "Cnnn",
          "optional": true,
          "tag": "C",
          "values": []
        },
        {
          "description": " Calibration temperature",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " (RepRapFirmware 1.17 and later) Z probe type to which these parameters apply, defaults to the current Z probe type as defined by M558 P parameter",
          "label": "Tnnn",
          "optional": true,
          "tag": "T",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G31: Set or Report Current Probe status",
      "url": "https://reprap.org/wiki/G-code#G31:_Set_or_Report_Current_Probe_status"
    },
    {
      "brief": "",
      "codes": [
        "G31"
      ],
      "id": "RepRap.G31[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G31: Dock Z Probe sled",
      "url": "https://reprap.org/wiki/G-code#G31:_Dock_Z_Probe_sled"
    }
  ],
  "G32": [
    {
      "brief": "Undock the Z probe sled.",
      "codes": [
        "G32"
      ],
      "id": "Marlin.G32[0]",
      "parameters": [],
      "related": "G31",
      "source": "Marlin",
      "title": "Undock Sled",
      "url": "https://marlinfw.org/docs/gcode/G032"
    },
    {
      "brief": "",
      "codes": [
        "G32"
      ],
      "id": "RepRap.G32[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G32: Probe Z and calculate Z plane",
      "url": "https://reprap.org/wiki/G-code#G32:_Probe_Z_and_calculate_Z_plane"
    },
    {
      "brief": "",
      "codes": [
        "G32"
      ],
      "id": "RepRap.G32[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G32: Undock Z Probe sled",
      "url": "https://reprap.org/wiki/G-code#G32:_Undock_Z_Probe_sled"
    }
  ],
  "G33": [
    {
      "brief": "Calibrate various Delta parameters",
      "codes": [
        "G33"
      ],
      "id": "Marlin.G33[0]",
      "parameters": [
        {
          "description": "If omitted iterations stop at best achievable precision. If set iterations will stop at the set precision.",
          "label": "[C<float>]",
          "optional": true,
          "tag": "C",
          "values": [
            {
              "type": "float"
            }
          ]
        },
        {
          "description": "Engage the probe for each point.",
          "label": "[E<bool>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Run (\"force\") this number of iterations and take the best result.",
          "label": "[F<1-30>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "1-30",
              "type": "int"
            }
          ]
        },
        {
          "description": "Number of probe points. If not specified, uses DELTA_CALIBRATION_DEFAULT_POINTS",
          "label": "[P<int|0|1|2|3|4-10>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "type": "int"
            },
            {
              "description": "Normalize end-stops and tower angle corrections only (no probing).",
              "tag": 0
            },
            {
              "description": "Probe center and set height only.",
              "tag": 1
            },
            {
              "description": "Probe center and towers. Set height, endstops, and delta radius.",
              "tag": 2
            },
            {
              "description": "Probe all positions - center, towers and opposite towers. Set all.",
              "tag": 3
            },
            {
              "description": "Probe all positions with intermediate locations, averaging them.",
              "tag": "4-10"
            }
          ]
        },
        {
          "description": "Disable tower angle corrections calibration (`P3`-`P7`)",
          "label": "[T<bool>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Set the verbose level",
          "label": "[V<int|0|1|2|3>]",
          "optional": true,
          "tag": "V",
          "values": [
            {
              "type": "int"
            },
            {
              "description": "Dry run, no calibration",
              "tag": 0
            },
            {
              "description": "Report settings",
              "tag": 1
            },
            {
              "description": "Report settings and probe results",
              "tag": 2
            },
            {
              "description": "Report settings, probe results, and calibration results",
              "tag": 3
            },
            {
              "default": 1
            }
          ]
        },
        {
          "description": "Probe at probe-offset-relative positions instead of the required kinematic points.",
          "label": "[O<bool>]",
          "optional": true,
          "since": "2.0.9.2",
          "tag": "O",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Temporarily reduce the size of the probe grid by the specified amount.",
          "label": "[R<float>]",
          "optional": true,
          "since": "2.0.9.2",
          "tag": "R",
          "values": [
            {
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Delta Auto Calibration",
      "url": "https://marlinfw.org/docs/gcode/G033"
    },
    {
      "brief": "",
      "codes": [
        "G33"
      ],
      "id": "RepRap.G33[0]",
      "parameters": [
        {
          "description": " List distortion matrix in a report",
          "label": "L0",
          "optional": true,
          "tag": "L",
          "values": []
        },
        {
          "description": " Reset distortion matrix",
          "label": "R0",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " Set correction for nearest point",
          "label": "X[pos] Y[pos] Z[zCorrection]",
          "optional": true,
          "tag": "X",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G33: Measure/List/Adjust Distortion Matrix (Repetier - Redeem)",
      "url": "https://reprap.org/wiki/G-code#G33:_Measure.2FList.2FAdjust_Distortion_Matrix_.28Repetier_-_Redeem.29"
    },
    {
      "brief": "End-stops and tower angle corrections are normalized (P0); \nPerforms a 1-4-7 point calibration of delta height (P1), end-stops, delta radius (P2) and tower angle corrections (P>=3) by a least squares iteration process based on the displacement method.",
      "codes": [
        "G33"
      ],
      "id": "RepRap.G33[1]",
      "parameters": [
        {
          "description": " Number of probe points: n*n (n= 0-10), when P is omitted the default set in Configuration.h is used.",
          "label": "Pn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Do not calibrate tower angle corrections (if used with P>=3); do not use the probe points near the towers, but the probe points opposite to the towers (if used with P=2)",
          "label": "T",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " Force the iterations to stop when a standard deviation from the zero plane less then x.xx mm is achieved; when C is omitted the iterations go on until the best possible standard deviation is reached.",
          "label": "Cx.xx",
          "optional": true,
          "tag": "C",
          "values": []
        },
        {
          "description": " Force to run at least n iterations (n=1-30) and take the best result",
          "label": "Fn",
          "optional": true,
          "tag": "F",
          "values": []
        },
        {
          "description": " Verbose level: (n=0-3) 0 = dry run without calibration; 1(default) = settings at start and end; 2 = settings at all iterations; 3 = settings and probe results",
          "label": "Vn",
          "optional": true,
          "tag": "V",
          "values": []
        },
        {
          "description": " Engage the probe for each point",
          "label": "E",
          "optional": true,
          "tag": "E",
          "values": []
        },
        {
          "description": " Do not probe at the required kinematic points but at positions offseted to the probe-offsets  ",
          "label": "O",
          "optional": true,
          "tag": "O",
          "values": []
        },
        {
          "description": " Temporary reduce the size of the probe grid by the specified amount (mm) ",
          "label": "R",
          "optional": true,
          "tag": "R",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G33: Delta Auto Calibration (Marlin 1.1.x - MK4duo)",
      "url": "https://reprap.org/wiki/G-code#G33:_Delta_Auto_Calibration_.28Marlin_1.1.x_-_MK4duo.29"
    }
  ],
  "G34": [
    {
      "brief": "Align multiple Z steppers using a bed probe",
      "codes": [
        "G34"
      ],
      "id": "Marlin.G34[0]",
      "parameters": [
        {
          "description": "Iterations - must be between 1 - 30",
          "label": "[I]",
          "optional": true,
          "tag": "I"
        },
        {
          "description": "Target accuracy - must be between 0.01 - 1.0",
          "label": "[T]",
          "optional": true,
          "tag": "T"
        },
        {
          "description": "Amplification - must be between 0.5 - 2.0",
          "label": "[A]",
          "optional": true,
          "tag": "A"
        },
        {
          "description": "Stow probe after probing each point.",
          "label": "[E]",
          "optional": true,
          "tag": "E"
        }
      ],
      "related": [
        "M422",
        "M906",
        "M907"
      ],
      "source": "Marlin",
      "title": "Z Steppers Auto-Alignment",
      "url": "https://marlinfw.org/docs/gcode/G034-zsaa"
    },
    {
      "brief": "Modern replacement for Pr\u016f\u0161a's TMC_Z_CALIBRATION",
      "codes": [
        "G34"
      ],
      "id": "Marlin.G34[1]",
      "parameters": [
        {
          "description": "Current value to use for the raise move. (Default: `GANTRY_CALIBRATION_CURRENT`)",
          "label": "[S<int>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "int",
              "unit": "mA"
            }
          ]
        },
        {
          "description": "Extra distance past `Z_MAX_POS` to move the Z axis. (Default: `GANTRY_CALIBRATION_EXTRA_HEIGHT`)",
          "label": "[Z<float>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "type": "float",
              "unit": "linear"
            }
          ]
        }
      ],
      "related": [
        "M422",
        "M906",
        "M907",
        "M915"
      ],
      "source": "Marlin",
      "title": "Mechanical Gantry Calibration",
      "url": "https://marlinfw.org/docs/gcode/G034-mgc"
    },
    {
      "brief": "Use multiple Z steppers and a probe to align Z axis connection points. See M422 for other options.",
      "codes": [
        "G34"
      ],
      "id": "RepRap.G34[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G34: Z Stepper Auto-Align",
      "url": "https://reprap.org/wiki/G-code#G34:_Z_Stepper_Auto-Align"
    },
    {
      "brief": "",
      "codes": [
        "G34"
      ],
      "id": "RepRap.G34[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G34: Calculate Delta Height from toolhead position (DELTA)",
      "url": "https://reprap.org/wiki/G-code#G34:_Calculate_Delta_Height_from_toolhead_position_.28DELTA.29"
    }
  ],
  "G35": [
    {
      "brief": "Run a procedure to tram the bed",
      "codes": [
        "G35"
      ],
      "id": "Marlin.G35[0]",
      "parameters": [
        {
          "description": "Screw thread type",
          "label": "[S<30|31|40|41|50|51>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "description": "M3 clockwise",
              "tag": 30
            },
            {
              "description": "M3 counter-clockwise",
              "tag": 31
            },
            {
              "description": "M4 clockwise",
              "tag": 40
            },
            {
              "description": "M4 counter-clockwise",
              "tag": 41
            },
            {
              "description": "M5 clockwise",
              "tag": 50
            },
            {
              "description": "M5 counter-clockwise",
              "tag": 51
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Tramming Assistant",
      "url": "https://marlinfw.org/docs/gcode/G035"
    }
  ],
  "G38.2": [
    {
      "brief": "Probe towards (or away from) a workpiece",
      "codes": [
        "G38.2",
        "G38.3",
        "G38.4",
        "G38.5"
      ],
      "id": "Marlin.G38.2[0]",
      "parameters": [
        {
          "description": "Target X",
          "label": "[X<pos>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Target Y",
          "label": "[Y<pos>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Target Z",
          "label": "[Z<pos>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Feedrate for the move",
          "label": "[F<rate>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "rate",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Probe target",
      "url": "https://marlinfw.org/docs/gcode/G038"
    },
    {
      "brief": "Monitors probe input while moving linearly towards the specified coordinates, stopping upon detecting contact or reaching specified coordinates.",
      "codes": [
        "G38.2"
      ],
      "id": "RepRap.G38.2[0]",
      "parameters": [
        {
          "description": " target X coordinate",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " target Y coordinate",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " target Z coordinate",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " Feedrate in mm/min",
          "label": "Fnnn",
          "optional": true,
          "tag": "F",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G38.2 probe toward workpiece, stop on contact, signal error if failure",
      "url": "https://reprap.org/wiki/G-code#G38.2_probe_toward_workpiece.2C_stop_on_contact.2C_signal_error_if_failure"
    }
  ],
  "G38.3": [
    {
      "brief": "Probe towards (or away from) a workpiece",
      "codes": [
        "G38.2",
        "G38.3",
        "G38.4",
        "G38.5"
      ],
      "id": "Marlin.G38.3[0]",
      "parameters": [
        {
          "description": "Target X",
          "label": "[X<pos>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Target Y",
          "label": "[Y<pos>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Target Z",
          "label": "[Z<pos>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Feedrate for the move",
          "label": "[F<rate>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "rate",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Probe target",
      "url": "https://marlinfw.org/docs/gcode/G038"
    },
    {
      "brief": "",
      "codes": [
        "G38.3"
      ],
      "id": "RepRap.G38.3[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G38.3 probe toward workpiece, stop on contact",
      "url": "https://reprap.org/wiki/G-code#G38.3_probe_toward_workpiece.2C_stop_on_contact"
    }
  ],
  "G38.4": [
    {
      "brief": "Probe towards (or away from) a workpiece",
      "codes": [
        "G38.2",
        "G38.3",
        "G38.4",
        "G38.5"
      ],
      "id": "Marlin.G38.4[0]",
      "parameters": [
        {
          "description": "Target X",
          "label": "[X<pos>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Target Y",
          "label": "[Y<pos>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Target Z",
          "label": "[Z<pos>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Feedrate for the move",
          "label": "[F<rate>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "rate",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Probe target",
      "url": "https://marlinfw.org/docs/gcode/G038"
    },
    {
      "brief": "",
      "codes": [
        "G38.4"
      ],
      "id": "RepRap.G38.4[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G38.4 probe away from workpiece, stop on loss of contact, signal error if failure",
      "url": "https://reprap.org/wiki/G-code#G38.4_probe_away_from_workpiece.2C_stop_on_loss_of_contact.2C_signal_error_if_failure"
    }
  ],
  "G38.5": [
    {
      "brief": "Probe towards (or away from) a workpiece",
      "codes": [
        "G38.2",
        "G38.3",
        "G38.4",
        "G38.5"
      ],
      "id": "Marlin.G38.5[0]",
      "parameters": [
        {
          "description": "Target X",
          "label": "[X<pos>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Target Y",
          "label": "[Y<pos>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Target Z",
          "label": "[Z<pos>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Feedrate for the move",
          "label": "[F<rate>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "rate",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Probe target",
      "url": "https://marlinfw.org/docs/gcode/G038"
    },
    {
      "brief": "",
      "codes": [
        "G38.5"
      ],
      "id": "RepRap.G38.5[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G38.5 probe away from workpiece, stop on loss of contact",
      "url": "https://reprap.org/wiki/G-code#G38.5_probe_away_from_workpiece.2C_stop_on_loss_of_contact"
    }
  ],
  "G4": [
    {
      "brief": "",
      "codes": [
        "G4"
      ],
      "id": "Klipper.G4[0]",
      "parameters": [
        {
          "description": "",
          "label": "P<Pmilliseconds>",
          "optional": false,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Pause the planner",
      "codes": [
        "G4"
      ],
      "id": "Marlin.G4[0]",
      "parameters": [
        {
          "description": "Amount of time to dwell",
          "label": "[S<time>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "time",
              "type": "int",
              "unit": "sec"
            }
          ]
        },
        {
          "description": "Amount of time to dwell",
          "label": "[P<time>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "time",
              "type": "int",
              "unit": "ms"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Dwell",
      "url": "https://marlinfw.org/docs/gcode/G004"
    },
    {
      "brief": "Pause the machine for a period of time.",
      "codes": [
        "G4"
      ],
      "id": "RepRap.G4[0]",
      "parameters": [
        {
          "description": " Time to wait, in milliseconds (In Teacup, P0, wait until all previous moves are finished)",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Time to wait, in seconds (Only on Repetier, Marlin, Prusa, Smoothieware, and RepRapFirmware 1.16 and later)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G4: Dwell",
      "url": "https://reprap.org/wiki/G-code#G4:_Dwell"
    }
  ],
  "G40": [
    {
      "brief": "G40 turns off cutter compensation. If tool compensation was on the next move must be a linear move and longer than the tool diameter. It is OK to turn compensation off when it is already off.\nhttp://www.linuxcnc.org/docs/2.5/html/gcode/tool_compensation.html",
      "codes": [
        "G40"
      ],
      "id": "RepRap.G40[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G40: Compensation Off (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#G40:_Compensation_Off_.28CNC_specific.29"
    }
  ],
  "G42": [
    {
      "brief": "Move to a specific point in the leveling mesh",
      "codes": [
        "G42"
      ],
      "id": "Marlin.G42[0]",
      "parameters": [
        {
          "description": "The column of the mesh coordinate",
          "label": "[I<pos>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "The row of the mesh coordinate",
          "label": "[J<pos>]",
          "optional": true,
          "tag": "J",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "The maximum movement rate of the move between the start and end point. The feedrate set here applies to subsequent moves that omit this parameter.",
          "label": "[F<rate>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "rate",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Move to mesh coordinate",
      "url": "https://marlinfw.org/docs/gcode/G042"
    },
    {
      "brief": "G42 does a fast move in XY to any of the intersection points in the bed calibration grid. This is useful during calibration to align the nozzle or probe.",
      "codes": [
        "G42"
      ],
      "id": "RepRap.G42[0]",
      "parameters": [
        {
          "description": " Grid X index (zero-based). If omitted, the nearest latitude.",
          "label": "Inn",
          "optional": true,
          "tag": "I",
          "values": []
        },
        {
          "description": " Grid Y index (zero-based). If omitted, the nearest longitude.",
          "label": "Jnn",
          "optional": true,
          "tag": "J",
          "values": []
        },
        {
          "description": " Probe flag. Moves the probe to the grid point (instead of the nozzle).",
          "label": "P",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Feedrate (mm/min)",
          "label": "Fnnn",
          "optional": true,
          "tag": "F",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G42: Move to Grid Point",
      "url": "https://reprap.org/wiki/G-code#G42:_Move_to_Grid_Point"
    }
  ],
  "G425": [
    {
      "brief": "Use a conductive object to calibrate XYZ backlash",
      "codes": [
        "G425"
      ],
      "id": "Marlin.G425[0]",
      "parameters": [
        {
          "description": "Perform calibration of backlash only.",
          "label": "[B]",
          "optional": true,
          "tag": "B"
        },
        {
          "description": "Perform calibration of one toolhead only.",
          "label": "[T<index>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Probe cube and print position, error, backlash and hotend offset. (Requires `CALIBRATION_REPORTING`)",
          "label": "[V]",
          "optional": true,
          "tag": "V"
        },
        {
          "description": "Uncertainty: how far to start probe away from the cube (mm)",
          "label": "[U<linear>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Backlash Calibration",
      "url": "https://marlinfw.org/docs/gcode/G425"
    },
    {
      "brief": "This performs an automatic calibration of backlash, positional errors and nozzle offset by\ntouching the nozzle on the sides of a bed mounted, electrically conductive cube, washer or bolt.",
      "codes": [
        "G425"
      ],
      "id": "RepRap.G425[0]",
      "parameters": [
        {
          "description": " Perform calibration of backlash only.",
          "label": "B",
          "optional": true,
          "tag": "B",
          "values": []
        },
        {
          "description": " Perform calibration of toolhead only.",
          "label": "Tnnn",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " Probe cube and print position, error, backlash and hotend offset.",
          "label": "V",
          "optional": true,
          "tag": "V",
          "values": []
        },
        {
          "description": " Uncertainty, how far to start probe away from the cube (mm)",
          "label": "Unnn",
          "optional": true,
          "tag": "U",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G425: Perform auto-calibration with calibration cube",
      "url": "https://reprap.org/wiki/G-code#G425:_Perform_auto-calibration_with_calibration_cube"
    }
  ],
  "G5": [
    {
      "brief": "Cubic B-spline with XYE destination and IJPQ offsets",
      "codes": [
        "G5"
      ],
      "id": "Marlin.G5[0]",
      "parameters": [
        {
          "description": "A destination coordinate on the X axis",
          "label": "X<pos>",
          "optional": false,
          "tag": "X",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "A destination coordinate on the Y axis",
          "label": "Y<pos>",
          "optional": false,
          "tag": "Y",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Offset from the `X` start point to first control point",
          "label": "I<pos>",
          "optional": false,
          "tag": "I",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Offset from the `Y` start point to first control point",
          "label": "J<pos>",
          "optional": false,
          "tag": "J",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Offset from the `X` end point to second control point",
          "label": "P<pos>",
          "optional": false,
          "tag": "P",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Offset from the `Y` end point to the second control point",
          "label": "Q<pos>",
          "optional": false,
          "tag": "Q",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "The length of filament to feed into the extruder between the start and end point",
          "label": "[E<pos>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "The maximum feedrate of the move between the start and end point (in current units per second). This value applies to all subsequent moves.",
          "label": "[F<rate>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "rate",
              "type": "float"
            }
          ]
        },
        {
          "description": "Set the Laser power for the move.",
          "label": "[S<power>]",
          "optional": true,
          "since": "2.0.8",
          "tag": "S",
          "values": [
            {
              "tag": "power",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "B\u00e9zier cubic spline",
      "url": "https://marlinfw.org/docs/gcode/G005"
    }
  ],
  "G53": [
    {
      "brief": "Apply native workspace to the current move.",
      "codes": [
        "G53"
      ],
      "id": "Marlin.G53[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Move in Machine Coordinates",
      "url": "https://marlinfw.org/docs/gcode/G053"
    },
    {
      "brief": "See linuxcnc.org for more help\nNot all builds of RepRapFirmware support these commands. For those that do (e.g. Duet WiFi/Ethernet and Duet 3), from firmware version 2.02 the workplace coordinate offsets are included in the data saved to config-override.g by the M500 command.",
      "codes": [
        "G53",
        "G54",
        "G55",
        "G56",
        "G57",
        "G58",
        "G59"
      ],
      "id": "RepRap.G53[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G53..59: Coordinate System Select (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#G53..59:_Coordinate_System_Select_.28CNC_specific.29"
    }
  ],
  "G54": [
    {
      "brief": "Select a workspace coordinate system",
      "codes": [
        "G54",
        "G55",
        "G56",
        "G57",
        "G58",
        "G59",
        "G59.1",
        "G59.2",
        "G59.3"
      ],
      "id": "Marlin.G54[0]",
      "parameters": [],
      "related": "G92",
      "source": "Marlin",
      "title": "Workspace Coordinate System",
      "url": "https://marlinfw.org/docs/gcode/G054-G059"
    },
    {
      "brief": "See linuxcnc.org for more help\nNot all builds of RepRapFirmware support these commands. For those that do (e.g. Duet WiFi/Ethernet and Duet 3), from firmware version 2.02 the workplace coordinate offsets are included in the data saved to config-override.g by the M500 command.",
      "codes": [
        "G53",
        "G54",
        "G55",
        "G56",
        "G57",
        "G58",
        "G59"
      ],
      "id": "RepRap.G54[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G53..59: Coordinate System Select (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#G53..59:_Coordinate_System_Select_.28CNC_specific.29"
    }
  ],
  "G55": [
    {
      "brief": "Select a workspace coordinate system",
      "codes": [
        "G54",
        "G55",
        "G56",
        "G57",
        "G58",
        "G59",
        "G59.1",
        "G59.2",
        "G59.3"
      ],
      "id": "Marlin.G55[0]",
      "parameters": [],
      "related": "G92",
      "source": "Marlin",
      "title": "Workspace Coordinate System",
      "url": "https://marlinfw.org/docs/gcode/G054-G059"
    },
    {
      "brief": "See linuxcnc.org for more help\nNot all builds of RepRapFirmware support these commands. For those that do (e.g. Duet WiFi/Ethernet and Duet 3), from firmware version 2.02 the workplace coordinate offsets are included in the data saved to config-override.g by the M500 command.",
      "codes": [
        "G53",
        "G54",
        "G55",
        "G56",
        "G57",
        "G58",
        "G59"
      ],
      "id": "RepRap.G55[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G53..59: Coordinate System Select (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#G53..59:_Coordinate_System_Select_.28CNC_specific.29"
    }
  ],
  "G56": [
    {
      "brief": "Select a workspace coordinate system",
      "codes": [
        "G54",
        "G55",
        "G56",
        "G57",
        "G58",
        "G59",
        "G59.1",
        "G59.2",
        "G59.3"
      ],
      "id": "Marlin.G56[0]",
      "parameters": [],
      "related": "G92",
      "source": "Marlin",
      "title": "Workspace Coordinate System",
      "url": "https://marlinfw.org/docs/gcode/G054-G059"
    },
    {
      "brief": "See linuxcnc.org for more help\nNot all builds of RepRapFirmware support these commands. For those that do (e.g. Duet WiFi/Ethernet and Duet 3), from firmware version 2.02 the workplace coordinate offsets are included in the data saved to config-override.g by the M500 command.",
      "codes": [
        "G53",
        "G54",
        "G55",
        "G56",
        "G57",
        "G58",
        "G59"
      ],
      "id": "RepRap.G56[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G53..59: Coordinate System Select (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#G53..59:_Coordinate_System_Select_.28CNC_specific.29"
    }
  ],
  "G57": [
    {
      "brief": "Select a workspace coordinate system",
      "codes": [
        "G54",
        "G55",
        "G56",
        "G57",
        "G58",
        "G59",
        "G59.1",
        "G59.2",
        "G59.3"
      ],
      "id": "Marlin.G57[0]",
      "parameters": [],
      "related": "G92",
      "source": "Marlin",
      "title": "Workspace Coordinate System",
      "url": "https://marlinfw.org/docs/gcode/G054-G059"
    },
    {
      "brief": "See linuxcnc.org for more help\nNot all builds of RepRapFirmware support these commands. For those that do (e.g. Duet WiFi/Ethernet and Duet 3), from firmware version 2.02 the workplace coordinate offsets are included in the data saved to config-override.g by the M500 command.",
      "codes": [
        "G53",
        "G54",
        "G55",
        "G56",
        "G57",
        "G58",
        "G59"
      ],
      "id": "RepRap.G57[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G53..59: Coordinate System Select (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#G53..59:_Coordinate_System_Select_.28CNC_specific.29"
    }
  ],
  "G58": [
    {
      "brief": "Select a workspace coordinate system",
      "codes": [
        "G54",
        "G55",
        "G56",
        "G57",
        "G58",
        "G59",
        "G59.1",
        "G59.2",
        "G59.3"
      ],
      "id": "Marlin.G58[0]",
      "parameters": [],
      "related": "G92",
      "source": "Marlin",
      "title": "Workspace Coordinate System",
      "url": "https://marlinfw.org/docs/gcode/G054-G059"
    },
    {
      "brief": "See linuxcnc.org for more help\nNot all builds of RepRapFirmware support these commands. For those that do (e.g. Duet WiFi/Ethernet and Duet 3), from firmware version 2.02 the workplace coordinate offsets are included in the data saved to config-override.g by the M500 command.",
      "codes": [
        "G53",
        "G54",
        "G55",
        "G56",
        "G57",
        "G58",
        "G59"
      ],
      "id": "RepRap.G58[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G53..59: Coordinate System Select (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#G53..59:_Coordinate_System_Select_.28CNC_specific.29"
    }
  ],
  "G59": [
    {
      "brief": "Select a workspace coordinate system",
      "codes": [
        "G54",
        "G55",
        "G56",
        "G57",
        "G58",
        "G59",
        "G59.1",
        "G59.2",
        "G59.3"
      ],
      "id": "Marlin.G59[0]",
      "parameters": [],
      "related": "G92",
      "source": "Marlin",
      "title": "Workspace Coordinate System",
      "url": "https://marlinfw.org/docs/gcode/G054-G059"
    },
    {
      "brief": "See linuxcnc.org for more help\nNot all builds of RepRapFirmware support these commands. For those that do (e.g. Duet WiFi/Ethernet and Duet 3), from firmware version 2.02 the workplace coordinate offsets are included in the data saved to config-override.g by the M500 command.",
      "codes": [
        "G53",
        "G54",
        "G55",
        "G56",
        "G57",
        "G58",
        "G59"
      ],
      "id": "RepRap.G59[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G53..59: Coordinate System Select (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#G53..59:_Coordinate_System_Select_.28CNC_specific.29"
    }
  ],
  "G59.1": [
    {
      "brief": "Select a workspace coordinate system",
      "codes": [
        "G54",
        "G55",
        "G56",
        "G57",
        "G58",
        "G59",
        "G59.1",
        "G59.2",
        "G59.3"
      ],
      "id": "Marlin.G59.1[0]",
      "parameters": [],
      "related": "G92",
      "source": "Marlin",
      "title": "Workspace Coordinate System",
      "url": "https://marlinfw.org/docs/gcode/G054-G059"
    }
  ],
  "G59.2": [
    {
      "brief": "Select a workspace coordinate system",
      "codes": [
        "G54",
        "G55",
        "G56",
        "G57",
        "G58",
        "G59",
        "G59.1",
        "G59.2",
        "G59.3"
      ],
      "id": "Marlin.G59.2[0]",
      "parameters": [],
      "related": "G92",
      "source": "Marlin",
      "title": "Workspace Coordinate System",
      "url": "https://marlinfw.org/docs/gcode/G054-G059"
    }
  ],
  "G59.3": [
    {
      "brief": "Select a workspace coordinate system",
      "codes": [
        "G54",
        "G55",
        "G56",
        "G57",
        "G58",
        "G59",
        "G59.1",
        "G59.2",
        "G59.3"
      ],
      "id": "Marlin.G59.3[0]",
      "parameters": [],
      "related": "G92",
      "source": "Marlin",
      "title": "Workspace Coordinate System",
      "url": "https://marlinfw.org/docs/gcode/G054-G059"
    }
  ],
  "G6": [
    {
      "brief": "Perform a direct, uninterpolated, and non-kinematic synchronized move",
      "codes": [
        "G6"
      ],
      "id": "Marlin.G6[0]",
      "parameters": [
        {
          "description": "Set page index",
          "label": "[I<index>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Step rate per second. Last value is cached for future invocations.",
          "label": "[R<rate>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "rate",
              "type": "float"
            }
          ]
        },
        {
          "description": "Number of steps to take. Defaults to max steps.",
          "label": "[S<rate>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "rate",
              "type": "float"
            }
          ]
        },
        {
          "description": "1 for positive, 0 for negative. Last value is cached for future invocations. Not used for directional formats.",
          "label": "[X<direction>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "direction",
              "type": "int"
            }
          ]
        },
        {
          "description": "1 for positive, 0 for negative. Last value is cached for future invocations. Not used for directional formats.",
          "label": "[Y<direction>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "direction",
              "type": "int"
            }
          ]
        },
        {
          "description": "1 for positive, 0 for negative. Last value is cached for future invocations. Not used for directional formats.",
          "label": "[Z<direction>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "direction",
              "type": "int"
            }
          ]
        },
        {
          "description": "1 for positive, 0 for negative. Last value is cached for future invocations. Not used for directional formats.",
          "label": "[E<direction>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "direction",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Direct Stepper Move",
      "url": "https://marlinfw.org/docs/gcode/G006"
    },
    {
      "brief": "Perform a direct, uninterpolated, and non-kinematic synchronized move of one or more steppers directly. Units may be linear (e.g., mm or inches on DELTA) or specified in degrees (SCARA). This command is useful for initialization, diagnostics, and calibration, and should be disabled on production equipment. This type of move can be potentially dangerous, especially for deltabots, so implementations should do their best to limit movement to prevent twerking and damaging the carriage assembly.",
      "codes": [
        "G6"
      ],
      "id": "RepRap.G6[0]",
      "parameters": [
        {
          "description": " Stepper A position or angle",
          "label": "Annn",
          "optional": true,
          "tag": "A",
          "values": []
        },
        {
          "description": " Stepper B position or angle",
          "label": "Bnnn",
          "optional": true,
          "tag": "B",
          "values": []
        },
        {
          "description": " Stepper C position or angle",
          "label": "Cnnn",
          "optional": true,
          "tag": "C",
          "values": []
        },
        {
          "description": " Relative move flag",
          "label": "R",
          "optional": true,
          "tag": "R",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G6: Direct Stepper Move",
      "url": "https://reprap.org/wiki/G-code#G6:_Direct_Stepper_Move"
    }
  ],
  "G60": [
    {
      "brief": "Save current position to specified slot",
      "codes": [
        "G60"
      ],
      "id": "Marlin.G60[0]",
      "parameters": [
        {
          "description": "Memory slot. If omitted, the first slot (0) is used.",
          "label": "[S<slot>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "slot",
              "type": "int"
            }
          ]
        }
      ],
      "related": [
        "G61"
      ],
      "source": "Marlin",
      "title": "Save Current Position",
      "url": "https://marlinfw.org/docs/gcode/G060"
    },
    {
      "brief": "",
      "codes": [
        "G60"
      ],
      "id": "RepRap.G60[0]",
      "parameters": [
        {
          "description": " <nn> specifies memory slot # (0-based) to save into (default 0)",
          "label": "Snn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G60: save current position to slot",
      "url": "https://reprap.org/wiki/G-code#G60:_save_current_position_to_slot"
    }
  ],
  "G61": [
    {
      "brief": "Return to saved position of specified slot",
      "codes": [
        "G61"
      ],
      "id": "Marlin.G61[0]",
      "parameters": [
        {
          "description": "Move feedrate",
          "label": "[F<rate>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "rate",
              "type": "float"
            }
          ]
        },
        {
          "description": "Memory slot (0 if omitted)",
          "label": "[S<slot>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "slot",
              "type": "int"
            }
          ]
        },
        {
          "description": "Flag to restore the X axis",
          "label": "[X<flag>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "type": "flag"
            }
          ]
        },
        {
          "description": "Flag to restore the Y axis",
          "label": "[Y<flag>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "type": "flag"
            }
          ]
        },
        {
          "description": "Flag to restore the Z axis",
          "label": "[Z<flag>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "type": "flag"
            }
          ]
        },
        {
          "description": "Flag to restore the E axis",
          "label": "[E<flag>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "type": "flag"
            }
          ]
        }
      ],
      "related": [
        "G60"
      ],
      "source": "Marlin",
      "title": "Return to Saved Position",
      "url": "https://marlinfw.org/docs/gcode/G061"
    }
  ],
  "G68": [
    {
      "brief": "",
      "codes": [
        "G68"
      ],
      "id": "RepRap.G68[0]",
      "parameters": [
        {
          "description": " Centre coordinates to rotate about",
          "label": "Xnnn, Ynnn...",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " first centre coordinate in the selected plane (e.g. equivalent to Xnnn if the selected plane is XY)",
          "label": "Annn",
          "optional": true,
          "tag": "A",
          "values": []
        },
        {
          "description": " second centre coordinate in the selected plane (e.g. equivalent to Ynnn if the selected plane is XY)",
          "label": "Bnnn",
          "optional": true,
          "tag": "B",
          "values": []
        },
        {
          "description": " angle to rotate in degrees. Positive angles rotate anticlockwise when viewing the selected plane from above.",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " if this parameter is present, the R parameter is added to the existing rotation instead of being absolute",
          "label": "I",
          "optional": true,
          "tag": "I",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G68: Coordinate rotation",
      "url": "https://reprap.org/wiki/G-code#G68:_Coordinate_rotation"
    }
  ],
  "G69": [
    {
      "brief": "",
      "codes": [
        "G69"
      ],
      "id": "RepRap.G69[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G69: Cancel coordinate rotation",
      "url": "https://reprap.org/wiki/G-code#G69:_Cancel_coordinate_rotation"
    }
  ],
  "G75": [
    {
      "brief": "Show/print PINDA temperature interpolating.",
      "codes": [
        "G75"
      ],
      "id": "RepRap.G75[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G75: Print temperature interpolation",
      "url": "https://reprap.org/wiki/G-code#G75:_Print_temperature_interpolation"
    }
  ],
  "G76": [
    {
      "brief": "Calibrate probe temperature compensation",
      "codes": [
        "G76"
      ],
      "id": "Marlin.G76[0]",
      "parameters": [
        {
          "description": "Calibrate bed only",
          "label": "[B]",
          "optional": true,
          "tag": "B"
        },
        {
          "description": "Calibrate probe only",
          "label": "[P]",
          "optional": true,
          "tag": "P"
        }
      ],
      "related": [
        "M192",
        "M871"
      ],
      "source": "Marlin",
      "title": "Probe temperature calibration",
      "url": "https://marlinfw.org/docs/gcode/G076"
    },
    {
      "brief": "This G-code is used to calibrate the temperature drift of the PINDA (inductive Sensor).\nThe PINDAv2 sensor has a built-in thermistor which has the advantage that the calibration can be done once for all materials.\nThe Original i3 Prusa MK2/s uses PINDAv1 and this calibration improves the temperature drift, but not as good as the PINDAv2.",
      "codes": [
        "G76"
      ],
      "id": "RepRap.G76[0]",
      "parameters": [
        {
          "description": " Calibrate bed only ",
          "label": "B",
          "optional": true,
          "tag": "B",
          "values": []
        },
        {
          "description": " Calibrate probe only ",
          "label": "P",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G76: PINDA probe temperature calibration",
      "url": "https://reprap.org/wiki/G-code#G76:_PINDA_probe_temperature_calibration"
    }
  ],
  "G80": [
    {
      "brief": "Cancel the current motion mode",
      "codes": [
        "G80"
      ],
      "id": "Marlin.G80[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Cancel Current Motion Mode",
      "url": "https://marlinfw.org/docs/gcode/G080"
    },
    {
      "brief": "It cancel canned cycle modal motion.\nG80 is part of modal group 1, so programming any other G code from modal group 1 will also cancel the canned cycle.",
      "codes": [
        "G80"
      ],
      "id": "RepRap.G80[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G80: Cancel Canned Cycle (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#G80:_Cancel_Canned_Cycle_.28CNC_specific.29"
    },
    {
      "brief": "Default 3x3 grid can be changed on MK2.5/s and MK3/s to 7x7 grid.",
      "codes": [
        "G80"
      ],
      "id": "RepRap.G80[1]",
      "parameters": [
        {
          "description": " Number of mesh points on x axis. Default is 3. Valid values are 3 and 7.",
          "label": "N",
          "optional": true,
          "tag": "N",
          "values": []
        },
        {
          "description": " Probe retries. Default 3 max. 10",
          "label": "R",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " Verbosity level 1=low, 10=mid, 20=high.It can be only used if firmware has been compiled with SUPPORT_VERBOSITY active.",
          "label": "V",
          "optional": true,
          "tag": "V",
          "values": []
        },
        {
          "description": " Left Bed Level correct value in um.",
          "label": "L",
          "optional": true,
          "tag": "L",
          "values": []
        },
        {
          "description": " Right Bed Level correct value in um.",
          "label": "R",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " Front Bed Level correct value in um.",
          "label": "F",
          "optional": true,
          "tag": "F",
          "values": []
        },
        {
          "description": " Back Bed Level correct value in um.",
          "label": "B",
          "optional": true,
          "tag": "B",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G80: Mesh-based Z probe",
      "url": "https://reprap.org/wiki/G-code#G80:_Mesh-based_Z_probe"
    }
  ],
  "G81": [
    {
      "brief": "Prints mesh bed leveling status and bed profile if activated.",
      "codes": [
        "G81"
      ],
      "id": "RepRap.G81[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G81: Mesh bed leveling status",
      "url": "https://reprap.org/wiki/G-code#G81:_Mesh_bed_leveling_status"
    }
  ],
  "G82": [
    {
      "brief": "WARNING! USE WITH CAUTION! If you'll try to probe where is no leveling pad, nasty things can happen!",
      "codes": [
        "G82"
      ],
      "id": "RepRap.G82[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G82: Single Z probe at current location",
      "url": "https://reprap.org/wiki/G-code#G82:_Single_Z_probe_at_current_location"
    }
  ],
  "G83": [
    {
      "brief": "",
      "codes": [
        "G83"
      ],
      "id": "RepRap.G83[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G83: Babystep in Z and store to EEPROM",
      "url": "https://reprap.org/wiki/G-code#G83:_Babystep_in_Z_and_store_to_EEPROM"
    }
  ],
  "G84": [
    {
      "brief": "",
      "codes": [
        "G84"
      ],
      "id": "RepRap.G84[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G84: UNDO Babystep Z (move Z axis back)",
      "url": "https://reprap.org/wiki/G-code#G84:_UNDO_Babystep_Z_.28move_Z_axis_back.29"
    }
  ],
  "G85": [
    {
      "brief": "",
      "codes": [
        "G85"
      ],
      "id": "RepRap.G85[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G85: Pick best babystep",
      "url": "https://reprap.org/wiki/G-code#G85:_Pick_best_babystep"
    }
  ],
  "G86": [
    {
      "brief": "This G-code will be performed at the start of a calibration script.",
      "codes": [
        "G86"
      ],
      "id": "RepRap.G86[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G86: Disable babystep correction after home",
      "url": "https://reprap.org/wiki/G-code#G86:_Disable_babystep_correction_after_home"
    }
  ],
  "G87": [
    {
      "brief": "This G-code will be performed at the end of a calibration script.",
      "codes": [
        "G87"
      ],
      "id": "RepRap.G87[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G87: Enable babystep correction after home",
      "url": "https://reprap.org/wiki/G-code#G87:_Enable_babystep_correction_after_home"
    }
  ],
  "G88": [
    {
      "brief": "",
      "codes": [
        "G88"
      ],
      "id": "RepRap.G88[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G88: Reserved",
      "url": "https://reprap.org/wiki/G-code#G88:_Reserved"
    }
  ],
  "G90": [
    {
      "brief": "",
      "codes": [
        "G90"
      ],
      "id": "Klipper.G90[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Set the interpreter to absolute positions",
      "codes": [
        "G90"
      ],
      "id": "Marlin.G90[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Absolute Positioning",
      "url": "https://marlinfw.org/docs/gcode/G090"
    },
    {
      "brief": "",
      "codes": [
        "G90"
      ],
      "id": "RepRap.G90[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G90: Set to Absolute Positioning",
      "url": "https://reprap.org/wiki/G-code#G90:_Set_to_Absolute_Positioning"
    }
  ],
  "G91": [
    {
      "brief": "Set the interpreter to relative positions",
      "codes": [
        "G91"
      ],
      "id": "Marlin.G91[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Relative Positioning",
      "url": "https://marlinfw.org/docs/gcode/G091"
    },
    {
      "brief": "",
      "codes": [
        "G91"
      ],
      "id": "RepRap.G91[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G91: Set to Relative Positioning",
      "url": "https://reprap.org/wiki/G-code#G91:_Set_to_Relative_Positioning"
    }
  ],
  "G92": [
    {
      "brief": "",
      "codes": [
        "G92"
      ],
      "id": "Klipper.G92[0]",
      "parameters": [
        {
          "description": "",
          "label": "[X<Xpos>]",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": "",
          "label": "[Y<Ypos>]",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": "",
          "label": "[Z<Zpos>]",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": "",
          "label": "[E<Epos>]",
          "optional": true,
          "tag": "E",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Set the current position of one or more axes.",
      "codes": [
        "G92"
      ],
      "id": "Marlin.G92[0]",
      "parameters": [
        {
          "description": "New X axis position",
          "label": "[X<pos>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "New Y axis position",
          "label": "[Y<pos>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "New Z axis position",
          "label": "[Z<pos>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "New extruder position",
          "label": "[E<pos>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Position",
      "url": "https://marlinfw.org/docs/gcode/G092"
    },
    {
      "brief": "",
      "codes": [
        "G92"
      ],
      "id": "RepRap.G92[0]",
      "parameters": [
        {
          "description": " new X axis position",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " new Y axis position",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " new Z axis position",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " new extruder position",
          "label": "Ennn",
          "optional": true,
          "tag": "E",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G92: Set Position",
      "url": "https://reprap.org/wiki/G-code#G92:_Set_Position"
    }
  ],
  "G92.x": [
    {
      "brief": "",
      "codes": [
        "G92.x"
      ],
      "id": "RepRap.G92.x[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G92.x: Reset Coordinate System Offsets (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#G92.x:_Reset_Coordinate_System_Offsets_.28CNC_specific.29"
    }
  ],
  "G93": [
    {
      "brief": "G93 is Inverse Time Mode. In inverse time feed rate mode, an F word means the move should be completed in (one divided by the F number) minutes.\nFor example, F2.0 means the move should be completed in a half a minute.\nWhen the inverse time feed rate mode is active, an F word must appear on every line which has a G1, G2, or G3 motion, and an F word on a line that does not have G1, G2, or G3 is ignored. Being in inverse time feed rate mode does not affect G0 (rapid move) motions.",
      "codes": [
        "G93"
      ],
      "id": "RepRap.G93[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G93: Feed Rate Mode (Inverse Time Mode) (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#G93:_Feed_Rate_Mode_.28Inverse_Time_Mode.29_.28CNC_specific.29"
    }
  ],
  "G94": [
    {
      "brief": "G94 is Units per Minute Mode. In units per minute feed mode, an F word is interpreted to mean the controlled point should move at a certain number of inches per minute, millimeters per minute, or degrees per minute, depending upon what length units are being used and which axis or axes are moving.",
      "codes": [
        "G94"
      ],
      "id": "RepRap.G94[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G94: Feed Rate Mode (Units per Minute) (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#G94:_Feed_Rate_Mode_.28Units_per_Minute.29_.28CNC_specific.29"
    }
  ],
  "G98": [
    {
      "brief": "Enable Prusa-specific Farm functions and g-code.",
      "codes": [
        "G98"
      ],
      "id": "RepRap.G98[0]",
      "parameters": [
        {
          "description": "",
          "label": "Ping",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": "                    Prints revision of the printer.",
          "label": "PRN",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": "                    Prints fan details.",
          "label": "FAN",
          "optional": true,
          "tag": "F",
          "values": []
        },
        {
          "description": "                     Prints farm number.",
          "label": "fn",
          "optional": true,
          "tag": "f",
          "values": []
        },
        {
          "description": "",
          "label": "thx",
          "optional": true,
          "tag": "t",
          "values": []
        },
        {
          "description": "                   Resets UVLO aka Power Panic and continues SD print.",
          "label": "uvlo",
          "optional": true,
          "tag": "u",
          "values": []
        },
        {
          "description": "        Filament sensor recover - restore print and continue.",
          "label": "fsensor_recover",
          "optional": true,
          "tag": "f",
          "values": []
        },
        {
          "description": "                 Reset MMU.",
          "label": "MMURES",
          "optional": true,
          "tag": "M",
          "values": []
        },
        {
          "description": "                  Resets Printer.",
          "label": "Reset",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": "                     ??? get file version. ???",
          "label": "fv",
          "optional": true,
          "tag": "f",
          "values": []
        },
        {
          "description": "                    M28 write to SD.",
          "label": "M28",
          "optional": true,
          "tag": "M",
          "values": []
        },
        {
          "description": "                     Get serial number from 32U2 processor. Typical format of S/N is:CZPX0917X003XC13518",
          "label": "SN",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": "                    Prints firmware version.",
          "label": "Fir",
          "optional": true,
          "tag": "F",
          "values": []
        },
        {
          "description": "                    Prints filament size, elelectronics, nozzle type.",
          "label": "Rev",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": "                   Reset the language.",
          "label": "Lang",
          "optional": true,
          "tag": "L",
          "values": []
        },
        {
          "description": "                     ??? maybe resets Live Z values to 0 ???",
          "label": "Lz",
          "optional": true,
          "tag": "L",
          "values": []
        },
        {
          "description": "                   Kick farm link timer.",
          "label": "Beat",
          "optional": true,
          "tag": "B",
          "values": []
        },
        {
          "description": "                     Full factory reset.",
          "label": "FR",
          "optional": true,
          "tag": "F",
          "values": []
        },
        {
          "description": " Set nozzle diameter.",
          "label": "nozzle set 'diameter' ",
          "optional": true,
          "tag": "n",
          "values": []
        },
        {
          "description": "     Check nozzle diameter.",
          "label": "nozzle D'diameter'",
          "optional": true,
          "tag": "n",
          "values": []
        },
        {
          "description": "                 Print nozzle diameter",
          "label": "nozzle",
          "optional": true,
          "tag": "n",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "G98: Activate farm mode",
      "url": "https://reprap.org/wiki/G-code#G98:_Activate_farm_mode"
    }
  ],
  "G99": [
    {
      "brief": "",
      "codes": [
        "G99"
      ],
      "id": "RepRap.G99[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "G99: Deactivate farm mode",
      "url": "https://reprap.org/wiki/G-code#G99:_Deactivate_farm_mode"
    }
  ],
  "GET_CURRENT_SKEW": [
    {
      "brief": "Reports the current printer skew for each plane  in both radians and degrees. The skew is calculated based on  parameters provided via the",
      "codes": [
        "GET_CURRENT_SKEW"
      ],
      "id": "Klipper.GET_CURRENT_SKEW[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "Reports the current printer skew for each plane  in both radians and degrees",
      "url": "https://www.klipper3d.org/G-Codes.html#skew-correction"
    }
  ],
  "GET_POSITION": [
    {
      "brief": "Return information on the current location of the  toolhead.",
      "codes": [
        "GET_POSITION"
      ],
      "id": "Klipper.GET_POSITION[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "Return information on the current location of the  toolhead",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "GET_RETRACTION": [
    {
      "brief": "Queries the current parameters used by firmware  retraction and displays them on the terminal.",
      "codes": [
        "GET_RETRACTION"
      ],
      "id": "Klipper.GET_RETRACTION[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "Queries the current parameters used by firmware  retraction and displays them on the terminal",
      "url": "https://www.klipper3d.org/G-Codes.html#firmware-retraction"
    }
  ],
  "HELP": [
    {
      "brief": "Report the list of available extended G-Code commands.",
      "codes": [
        "HELP"
      ],
      "id": "Klipper.HELP[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "Report the list of available extended G-Code commands",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "INIT_TMC": [
    {
      "brief": "This command will intitialize the TMC  registers. Needed to re-enable the driver if power to the chip is  turned off then back on.",
      "codes": [
        "INIT_TMC"
      ],
      "id": "Klipper.INIT_TMC[0]",
      "parameters": [
        {
          "description": "",
          "label": "STEPPER=<name>",
          "optional": false,
          "tag": "STEPPER",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This command will intitialize the TMC  registers",
      "url": "https://www.klipper3d.org/G-Codes.html#tmc-stepper-drivers"
    }
  ],
  "M0": [
    {
      "brief": "Stop and wait for user",
      "codes": [
        "M0",
        "M1"
      ],
      "id": "Marlin.M0[0]",
      "parameters": [
        {
          "description": "Expire time, in seconds",
          "label": "[S<sec>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "sec",
              "type": "int"
            }
          ]
        },
        {
          "description": "Expire time, in milliseconds",
          "label": "[P<ms>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "ms",
              "type": "int"
            }
          ]
        },
        {
          "description": "An optional message to display on the LCD",
          "label": "[string]",
          "optional": true,
          "tag": "string"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Unconditional stop",
      "url": "https://marlinfw.org/docs/gcode/M000-M001"
    },
    {
      "brief": "",
      "codes": [
        "M0"
      ],
      "id": "RepRap.M0[0]",
      "parameters": [
        {
          "description": " Time to wait, in milliseconds",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Time to wait, in seconds",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M0: Stop or Unconditional stop",
      "url": "https://reprap.org/wiki/G-code#M0:_Stop_or_Unconditional_stop"
    }
  ],
  "M1": [
    {
      "brief": "Stop and wait for user",
      "codes": [
        "M0",
        "M1"
      ],
      "id": "Marlin.M1[0]",
      "parameters": [
        {
          "description": "Expire time, in seconds",
          "label": "[S<sec>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "sec",
              "type": "int"
            }
          ]
        },
        {
          "description": "Expire time, in milliseconds",
          "label": "[P<ms>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "ms",
              "type": "int"
            }
          ]
        },
        {
          "description": "An optional message to display on the LCD",
          "label": "[string]",
          "optional": true,
          "tag": "string"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Unconditional stop",
      "url": "https://marlinfw.org/docs/gcode/M000-M001"
    },
    {
      "brief": "",
      "codes": [
        "M1"
      ],
      "id": "RepRap.M1[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M1: Sleep or Conditional stop",
      "url": "https://reprap.org/wiki/G-code#M1:_Sleep_or_Conditional_stop"
    }
  ],
  "M10": [
    {
      "brief": "Enable and disable the Cutter Vacuum or Laser Blower Motor.",
      "codes": [
        "M10",
        "M11"
      ],
      "id": "Marlin.M10[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Vacuum / Blower Control",
      "url": "https://marlinfw.org/docs/gcode/M010-M011"
    },
    {
      "brief": "",
      "codes": [
        "M10"
      ],
      "id": "RepRap.M10[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M10: Vacuum On (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#M10:_Vacuum_On_.28CNC_specific.29"
    }
  ],
  "M100": [
    {
      "brief": "Observe memory used by code",
      "codes": [
        "M100"
      ],
      "id": "Marlin.M100[0]",
      "parameters": [
        {
          "description": "Dump the free memory block from `__brkval` to the stack pointer",
          "label": "[D]",
          "optional": true,
          "tag": "D"
        },
        {
          "description": "Return the number of free bytes in the memory pool along with other vital statistics that define the memory pool",
          "label": "[F]",
          "optional": true,
          "tag": "F"
        },
        {
          "description": "Initialize the free memory pool so it can be watched and print vital statistics that define the free memory pool",
          "label": "[I]",
          "optional": true,
          "tag": "I"
        },
        {
          "description": "Corrupt 'n' locations in the free memory pool and report the locations of the corruption. This is useful to check the correctness of the `M100 D` and `M100 F` commands",
          "label": "[C<n>]",
          "optional": true,
          "tag": "C",
          "values": [
            {
              "tag": "n",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Free Memory",
      "url": "https://marlinfw.org/docs/gcode/M100"
    }
  ],
  "M101": [
    {
      "brief": "In Teacup firmware:\nIf a DC extruder is present, turn that on. Else, undo filament retraction, which means, make the extruder ready for extrusion. Complement to M103.\nIn BFB/RapMan:\nTurn extruder on (forward/filament in).\nIn RepRapFirmware: undo filament retraction. The length and speed are set by the M207 command. RepRapFirmware supports this command for compatibility with Simplify3D.\nIn other firmwares:\nDeprecated. Regarding filament retraction, see G10, G11, M207, M208, M227, M228, M229.",
      "codes": [
        "M101"
      ],
      "id": "RepRap.M101[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M101: Turn extruder 1 on (Forward), Undo Retraction",
      "url": "https://reprap.org/wiki/G-code#M101:_Turn_extruder_1_on_.28Forward.29.2C_Undo_Retraction"
    }
  ],
  "M102": [
    {
      "brief": "In BFB/RapMan firmware:\nTurn extruder on Reverse (Still to add)\nIn other firmwares:\nDeprecated.",
      "codes": [
        "M102"
      ],
      "id": "RepRap.M102[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M102: Turn extruder 1 on (Reverse)",
      "url": "https://reprap.org/wiki/G-code#M102:_Turn_extruder_1_on_.28Reverse.29"
    }
  ],
  "M103": [
    {
      "brief": "In Teacup firmware:\nIf a DC extruder is present, turn that off. Else, retract the filament in the hope to prevent nozzle drooling. Complement to M101.\nIn BFB/RapMan firmware:\nTurn extruder off.\nIn RepRapFirmware: retract filament. The length and speed are set by the M207 command. RepRapFirmware supports this command for compatibility with Simplify3D.\nIn other firmwares: Deprecated. Regarding filament retraction, see G10, G11, M207, M208, M227, M228, M229.",
      "codes": [
        "M103"
      ],
      "id": "RepRap.M103[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M103: Turn all extruders off, Extruder Retraction",
      "url": "https://reprap.org/wiki/G-code#M103:_Turn_all_extruders_off.2C_Extruder_Retraction"
    }
  ],
  "M104": [
    {
      "brief": "",
      "codes": [
        "M104"
      ],
      "id": "Klipper.M104[0]",
      "parameters": [
        {
          "description": "",
          "label": "[T<Tindex>]",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": "",
          "label": "[S<Stemperature>]",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Set a new target hot end temperature.",
      "codes": [
        "M104"
      ],
      "id": "Marlin.M104[0]",
      "parameters": [
        {
          "description": "Material preset index. Overrides `S`.",
          "label": "[I<index>]",
          "optional": true,
          "since": "2.0.6",
          "tag": "I",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Target temperature.<br/>`AUTOTEMP`: the min auto-temperature.",
          "label": "[S<temp>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "temp",
              "type": "float"
            }
          ]
        },
        {
          "description": "`AUTOTEMP`: Autotemp flag. Omit to disable autotemp.",
          "label": "[F<flag>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "`AUTOTEMP`: The max auto-temperature.",
          "label": "[B<temp>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "temp",
              "type": "float"
            }
          ]
        },
        {
          "description": "Hotend index. If omitted, the currently active hotend will be used.",
          "label": "[T<index>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Hotend Temperature",
      "url": "https://marlinfw.org/docs/gcode/M104"
    },
    {
      "brief": "",
      "codes": [
        "M104"
      ],
      "id": "RepRap.M104[0]",
      "parameters": [
        {
          "description": " Display temperature (Only Prusa)",
          "label": "Dnnn",
          "optional": true,
          "tag": "D",
          "values": []
        },
        {
          "description": " Target temperature",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Idle temperature (Only MK4duo)",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M104: Set Extruder Temperature",
      "url": "https://reprap.org/wiki/G-code#M104:_Set_Extruder_Temperature"
    },
    {
      "brief": "See Marlin Wiki. In Marlin Firmware, using M104 with no parameters will turn off the heater for the current extruder. This is also the case for M104 S without a number after the S parameter.",
      "codes": [
        "M104"
      ],
      "id": "RepRap.M104[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M104 in Marlin Firmware",
      "url": "https://reprap.org/wiki/G-code#M104_in_Marlin_Firmware"
    },
    {
      "brief": "In Teacup Firmware, M104 can be additionally used to handle all devices using a temperature sensor. It supports the additional P parameter, which is a zero-based index into the list of sensors in config.h. For devices without a temp sensor, see  M106.",
      "codes": [
        "M104"
      ],
      "id": "RepRap.M104[2]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M104 in Teacup Firmware",
      "url": "https://reprap.org/wiki/G-code#M104_in_Teacup_Firmware"
    },
    {
      "brief": "RepRapFirmware and some other firmwares support the optional T parameter (as generated by slic3r) to specify which tool the command applies to.",
      "codes": [
        "M104"
      ],
      "id": "RepRap.M104[3]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M104 in RepRapFirmware and Klipper",
      "url": "https://reprap.org/wiki/G-code#M104_in_RepRapFirmware_and_Klipper"
    }
  ],
  "M105": [
    {
      "brief": "",
      "codes": [
        "M105"
      ],
      "id": "Klipper.M105[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Send a temperature report to the host.",
      "codes": [
        "M105"
      ],
      "id": "Marlin.M105[0]",
      "parameters": [
        {
          "description": "Include the Redundant temperature sensor (if any)",
          "label": "[R<flag>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "type": "flag"
            }
          ]
        },
        {
          "description": "Hotend index",
          "label": "[T<index>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        }
      ],
      "related": "M155",
      "source": "Marlin",
      "title": "Report Temperatures",
      "url": "https://marlinfw.org/docs/gcode/M105"
    },
    {
      "brief": "",
      "codes": [
        "M105"
      ],
      "id": "RepRap.M105[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M105: Get Extruder Temperature",
      "url": "https://reprap.org/wiki/G-code#M105:_Get_Extruder_Temperature"
    }
  ],
  "M106": [
    {
      "brief": "",
      "codes": [
        "M106"
      ],
      "id": "Klipper.M106[0]",
      "parameters": [
        {
          "description": "",
          "label": "S<Svalue>",
          "optional": false,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Turn on the fan and set its speed",
      "codes": [
        "M106"
      ],
      "id": "Marlin.M106[0]",
      "parameters": [
        {
          "description": "Material preset index. Overrides `S`.",
          "label": "[I<index>]",
          "optional": true,
          "since": "2.0.6",
          "tag": "I",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Speed, from 0 to 255. S255 provides 100% duty cycle; S128 produces 50%.",
          "label": "[S<speed>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "speed",
              "type": "byte"
            }
          ]
        },
        {
          "description": "Fan index",
          "label": "[P<index>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Secondary speed. Added in Marlin 1.1.7. (Requires `EXTRA_FAN_SPEED`)\n- `M106 P<fan> T3-255` sets a secondary speed for `<fan>`.\n- `M106 P<fan> T2` uses the set secondary speed.\n- `M106 P<fan> T1` restores the previous fan speed.\n",
          "label": "[T<secondary>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "secondary",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Fan Speed",
      "url": "https://marlinfw.org/docs/gcode/M106"
    },
    {
      "brief": "",
      "codes": [
        "M106"
      ],
      "id": "RepRap.M106[0]",
      "parameters": [
        {
          "description": " Fan number (optional, defaults to 0)",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Fan speed (0 to 255; RepRapFirmware also accepts 0.0 to 1.0))",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M106: Fan On",
      "url": "https://reprap.org/wiki/G-code#M106:_Fan_On"
    },
    {
      "brief": "If an S parameter is provided but no other parameter is present, then the speeds of the print cooling fans associated with the current tool will be set (see the F parameter in the M563 command). If no tool is active then the speed of Fan 0 will be set. Either way, the speed is remembered so that it can be recalled using the R2 parameter (see below).\nIf no S parameter is given but the R1 parameter is used, the fan speed when the print was last paused will be set. If the R2 parameter is used, then the speeds of the print cooling fans associated with the current tool will be set to the remembered value (see above).\nThe T and H parameters allow a fan to be configured to operate in thermostatic mode, for example to use one of the fan channels to control the hot end fan. In this mode the fan will be fully on when the temperature of any of the heaters listed in the H parameter is at or above the trigger temperature set by the T parameter, and off otherwise. Thermostatic mode can be disabled using parameter H-1.\nThe B parameter sets the time for which the fan will be operated at full PWM when started from cold, to allow low fan speeds t be used. A value of 0.1 seconds is usually sufficient.\nThe L parameter defines the minimum PWM value that is usable with this fan. If a lower value is commanded that is not zero, it will be rounded up to this value.\nThe X parameter defines the maximum PWM value that is allowed for this fan. If a higher value is commanded, it will be rounded down to this value.\nThe I parameter causes the fan output signal to be inverted if its value is greater than zero. This makes the cooling fan output suitable for feeding the PWM input of a 4-wire fan via a diode. If the parameter is present and zero, the output is not inverted. If the I parameter is negative then in RRF 1.16 and later the fan is disabled, which frees up the pin for use as a general purpose I/O pin that can be controlled using M42.",
      "codes": [
        "M106"
      ],
      "id": "RepRap.M106[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M106 in RepRapFirmware",
      "url": "https://reprap.org/wiki/G-code#M106_in_RepRapFirmware"
    },
    {
      "brief": "Additionally to the above, Teacup Firmware uses M106 to control general devices. It supports the additional P parameter, which is an zero-based index into the list of heaters/devices in config.h.",
      "codes": [
        "M106"
      ],
      "id": "RepRap.M106[2]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M106 in Teacup Firmware",
      "url": "https://reprap.org/wiki/G-code#M106_in_Teacup_Firmware"
    }
  ],
  "M107": [
    {
      "brief": "",
      "codes": [
        "M107"
      ],
      "id": "Klipper.M107[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Turn off a fan",
      "codes": [
        "M107"
      ],
      "id": "Marlin.M107[0]",
      "parameters": [
        {
          "description": "Fan index",
          "label": "[P<index>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Fan Off",
      "url": "https://marlinfw.org/docs/gcode/M107"
    },
    {
      "brief": "Deprecated in Teacup firmware and in RepRapFirmware. Use M106 S0 instead.",
      "codes": [
        "M107"
      ],
      "id": "RepRap.M107[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M107: Fan Off",
      "url": "https://reprap.org/wiki/G-code#M107:_Fan_Off"
    }
  ],
  "M108": [
    {
      "brief": "Break out of the current waiting loop",
      "codes": [
        "M108"
      ],
      "id": "Marlin.M108[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Break and Continue",
      "url": "https://marlinfw.org/docs/gcode/M108"
    },
    {
      "brief": "Breaks out of an M109 or M190 wait-for-temperature loop, continuing the print job. Use this command with caution! If cold extrusion prevention is enabled (see M302) and the temperature is too low, this will start \"printing\" without extrusion. If cold extrusion prevention is disabled and the hot-end temperature is too low, the extruder may jam.\nThis command was introduced in Marlin 1.1.0. As with other emergency commands [e.g., M112] this requires the host to leave space in the command buffer, or the command won't be executed until later.\nRecent versions of Marlin introduce EMERGENCY_PARSER, which overcomes the buffer limitation by watching the incoming serial stream. Commands M108, M112, M410, and M876 can all be intercepted by the emergency parser, so it is recommended to enable this feature.",
      "codes": [
        "M108"
      ],
      "id": "RepRap.M108[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M108: Cancel Heating",
      "url": "https://reprap.org/wiki/G-code#M108:_Cancel_Heating"
    },
    {
      "brief": "Sets speed of extruder motor.\n(Deprecated in FiveD firmware, see M113)",
      "codes": [
        "M108"
      ],
      "id": "RepRap.M108[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M108: Set Extruder Speed (BFB)",
      "url": "https://reprap.org/wiki/G-code#M108:_Set_Extruder_Speed_.28BFB.29"
    }
  ],
  "M109": [
    {
      "brief": "",
      "codes": [
        "M109"
      ],
      "id": "Klipper.M109[0]",
      "parameters": [
        {
          "description": "",
          "label": "[T<Tindex>]",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": "",
          "label": "S<Stemperature>",
          "optional": false,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Wait for the hot end to reach its target.",
      "codes": [
        "M109"
      ],
      "id": "Marlin.M109[0]",
      "parameters": [
        {
          "description": "Material preset index. Overrides `S`.",
          "label": "[I<index>]",
          "optional": true,
          "since": "2.0.6",
          "tag": "I",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Target temperature (wait only when heating). Also `AUTOTEMP`: The min auto-temperature.",
          "label": "[S<temp>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "temp",
              "type": "float"
            }
          ]
        },
        {
          "description": "Target temperature (wait for cooling or heating).",
          "label": "[R<temp>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "temp",
              "type": "float"
            }
          ]
        },
        {
          "description": "Autotemp flag. Omit to disable autotemp.",
          "label": "[F<flag>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "With `AUTOTEMP`, the max auto-temperature.",
          "label": "[B<temp>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "temp",
              "type": "float"
            }
          ]
        },
        {
          "description": "Hotend index. If omitted, the currently active hotend will be used.",
          "label": "[T<index>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Wait for Hotend Temperature",
      "url": "https://marlinfw.org/docs/gcode/M109"
    },
    {
      "brief": "",
      "codes": [
        "M109"
      ],
      "id": "RepRap.M109[0]",
      "parameters": [
        {
          "description": " minimum target temperature, waits until heating",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " maximum target temperature, waits until cooling (Sprinter)",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " accurate target temperature, waits until heating and cooling (Marlin and MK4duo)",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " tool number (RepRapFirmware and Klipper), optional",
          "label": "Tn",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " use extruder fan to speed up cooling (if not heating)",
          "label": "F",
          "optional": true,
          "tag": "F",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M109: Set Extruder Temperature and Wait",
      "url": "https://reprap.org/wiki/G-code#M109:_Set_Extruder_Temperature_and_Wait"
    },
    {
      "brief": "Not needed. To mimic Marlin behaviour, use  M104 followed by  M116.",
      "codes": [
        "M109"
      ],
      "id": "RepRap.M109[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M109 in Teacup",
      "url": "https://reprap.org/wiki/G-code#M109_in_Teacup"
    },
    {
      "brief": "Set extruder heater temperature in degrees celsius and wait for this temperature to be achieved.",
      "codes": [
        "M109"
      ],
      "id": "RepRap.M109[2]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M109 in Marlin, MK4duo, Sprinter (ATmega port), RepRapFirmware, Prusa",
      "url": "https://reprap.org/wiki/G-code#M109_in_Marlin.2C_MK4duo.2C_Sprinter_.28ATmega_port.29.2C_RepRapFirmware.2C_Prusa"
    },
    {
      "brief": "Parameters:  S (optional), set target temperature value. If not specified, waits for the temperature set by  M104. R (optional), sets target temperature range maximum value.",
      "codes": [
        "M109"
      ],
      "id": "RepRap.M109[3]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M109 in Sprinter (4pi port)",
      "url": "https://reprap.org/wiki/G-code#M109_in_Sprinter_.284pi_port.29"
    },
    {
      "brief": "",
      "codes": [
        "M109"
      ],
      "id": "RepRap.M109[4]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M109 in MakerBot",
      "url": "https://reprap.org/wiki/G-code#M109_in_MakerBot"
    },
    {
      "brief": "According to the documentation, Klipper will wait for the specified temperature to settle, i.e. it will wait until it goes back down in case it overshoots. Klipper also supports the optional T parameter to specify which tool the command refers to (see above).",
      "codes": [
        "M109"
      ],
      "id": "RepRap.M109[5]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M109 in Klipper",
      "url": "https://reprap.org/wiki/G-code#M109_in_Klipper"
    }
  ],
  "M11": [
    {
      "brief": "Enable and disable the Cutter Vacuum or Laser Blower Motor.",
      "codes": [
        "M10",
        "M11"
      ],
      "id": "Marlin.M11[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Vacuum / Blower Control",
      "url": "https://marlinfw.org/docs/gcode/M010-M011"
    },
    {
      "brief": "",
      "codes": [
        "M11"
      ],
      "id": "RepRap.M11[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M11: Vacuum Off (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#M11:_Vacuum_Off_.28CNC_specific.29"
    }
  ],
  "M110": [
    {
      "brief": "Set the current line number.",
      "codes": [
        "M110"
      ],
      "id": "Marlin.M110[0]",
      "parameters": [
        {
          "description": "Line number",
          "label": "N<line>",
          "optional": false,
          "tag": "N",
          "values": [
            {
              "tag": "line",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Line Number",
      "url": "https://marlinfw.org/docs/gcode/M110"
    },
    {
      "brief": "",
      "codes": [
        "M110"
      ],
      "id": "RepRap.M110[0]",
      "parameters": [
        {
          "description": " Line number",
          "label": "Nnnn",
          "optional": true,
          "tag": "N",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M110: Set Current Line Number",
      "url": "https://reprap.org/wiki/G-code#M110:_Set_Current_Line_Number"
    }
  ],
  "M111": [
    {
      "brief": "Report and optionally set the debug flags.",
      "codes": [
        "M111"
      ],
      "id": "Marlin.M111[0]",
      "parameters": [
        {
          "description": "Debug flag bits",
          "label": "[S<flags>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "flags",
              "type": "byte"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Debug Level",
      "url": "https://marlinfw.org/docs/gcode/M111"
    },
    {
      "brief": "",
      "codes": [
        "M111"
      ],
      "id": "RepRap.M111[0]",
      "parameters": [
        {
          "description": " Debug module",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Debug on/off",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M111: Set Debug Level",
      "url": "https://reprap.org/wiki/G-code#M111:_Set_Debug_Level"
    },
    {
      "brief": "RepRapFirmware allows debugging to be set for each module. If the optional 'P' parameter is not specified, debugging will be enabled for all modules. For a list of modules, send M111 S1 P15.",
      "codes": [
        "M111"
      ],
      "id": "RepRap.M111[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M111 in RepRapFirmware",
      "url": "https://reprap.org/wiki/G-code#M111_in_RepRapFirmware"
    },
    {
      "brief": "Set the level of debugging information transmitted back to the host to level 6. The level is the OR of three bits:\n #define DEBUG_ECHO (1<<0)\n #define DEBUG_INFO (1<<1)\n #define DEBUG_ERRORS (1<<2)\n #define DEBUG_DRYRUN (1<<3) // repetier-firmware\n #define DEBUG_COMMUNICATION (1<<4) // repetier-firmware\nThus 6 means send information and errors, but don't echo commands. (This is the RepRap default.)\nFor firmware that supports ethernet and web interfaces M111 S9 will turn web debug information on without changing any other debug settings, and M111 S8 will turn it off. Web debugging usually means that HTTP requests will be echoed to the USB interface, as will the responses.",
      "codes": [
        "M111"
      ],
      "id": "RepRap.M111[2]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M111 in Repetier",
      "url": "https://reprap.org/wiki/G-code#M111_in_Repetier"
    }
  ],
  "M112": [
    {
      "brief": "",
      "codes": [
        "M112"
      ],
      "id": "Klipper.M112[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Shut everything down and halt the machine.",
      "codes": [
        "M112"
      ],
      "id": "Marlin.M112[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Emergency Stop",
      "url": "https://marlinfw.org/docs/gcode/M112"
    },
    {
      "brief": "",
      "codes": [
        "M112"
      ],
      "id": "RepRap.M112[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M112: Full (Emergency) Stop",
      "url": "https://reprap.org/wiki/G-code#M112:_Full_.28Emergency.29_Stop"
    }
  ],
  "M113": [
    {
      "brief": "Get or set the host keepalive interval.",
      "codes": [
        "M113"
      ],
      "id": "Marlin.M113[0]",
      "parameters": [
        {
          "description": "Keepalive interval (0-60).",
          "label": "[S<seconds>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "seconds",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Host Keepalive",
      "url": "https://marlinfw.org/docs/gcode/M113"
    },
    {
      "brief": "",
      "codes": [
        "M113"
      ],
      "id": "RepRap.M113[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M113: Set Extruder PWM",
      "url": "https://reprap.org/wiki/G-code#M113:_Set_Extruder_PWM"
    },
    {
      "brief": "During some lengthy processes, such as G29, Marlin may appear to the host to have \u201cgone away.\u201d The \u201chost keepalive\u201d feature will send messages to the host when Marlin is busy or waiting for user response so the host won\u2019t try to reconnect.",
      "codes": [
        "M113"
      ],
      "id": "RepRap.M113[1]",
      "parameters": [
        {
          "description": " keepalive interval to set",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M113: Host Keepalive",
      "url": "https://reprap.org/wiki/G-code#M113:_Host_Keepalive"
    }
  ],
  "M114": [
    {
      "brief": "",
      "codes": [
        "M114"
      ],
      "id": "Klipper.M114[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Report the current tool position to the host.",
      "codes": [
        "M114"
      ],
      "id": "Marlin.M114[0]",
      "parameters": [
        {
          "description": "Detailed information (requires `M114_DETAIL`)",
          "label": "[D<flag>]",
          "optional": true,
          "tag": "D",
          "values": [
            {
              "type": "flag"
            }
          ]
        },
        {
          "description": "Report E stepper position (requires `M114_DETAIL`)",
          "label": "[E<flag>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "type": "flag"
            }
          ]
        },
        {
          "description": "Real position information (requires `M114_REALTIME`)",
          "label": "[R<flag>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "type": "flag"
            }
          ]
        }
      ],
      "related": "M154",
      "source": "Marlin",
      "title": "Get Current Position",
      "url": "https://marlinfw.org/docs/gcode/M114"
    },
    {
      "brief": "",
      "codes": [
        "M114"
      ],
      "id": "RepRap.M114[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M114: Get Current Position",
      "url": "https://reprap.org/wiki/G-code#M114:_Get_Current_Position"
    }
  ],
  "M115": [
    {
      "brief": "",
      "codes": [
        "M115"
      ],
      "id": "Klipper.M115[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Print the firmware info and capabilities.",
      "codes": [
        "M115"
      ],
      "id": "Marlin.M115[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Firmware Info",
      "url": "https://marlinfw.org/docs/gcode/M115"
    },
    {
      "brief": "",
      "codes": [
        "M115"
      ],
      "id": "RepRap.M115[0]",
      "parameters": [
        {
          "description": " (RepRapFirmware 3 only) Expansion board number (typically the CAN address) for which the firmware version is requested, default 0 (i.e. main board)",
          "label": "Bnnn",
          "optional": true,
          "tag": "B",
          "values": []
        },
        {
          "description": " Electronics type",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Report the Prusa version number",
          "label": "V",
          "optional": true,
          "tag": "V",
          "values": []
        },
        {
          "description": " Check the firmware version provided",
          "label": "Unnnnnn",
          "optional": true,
          "tag": "U",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M115: Get Firmware Version and Capabilities",
      "url": "https://reprap.org/wiki/G-code#M115:_Get_Firmware_Version_and_Capabilities"
    }
  ],
  "M116": [
    {
      "brief": "",
      "codes": [
        "M116"
      ],
      "id": "RepRap.M116[0]",
      "parameters": [
        {
          "description": " Tool number",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Heater number",
          "label": "Hnnn",
          "optional": true,
          "tag": "H",
          "values": []
        },
        {
          "description": " Chamber number",
          "label": "Cnnn",
          "optional": true,
          "tag": "C",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M116: Wait",
      "url": "https://reprap.org/wiki/G-code#M116:_Wait"
    }
  ],
  "M117": [
    {
      "brief": "",
      "codes": [
        "M117"
      ],
      "id": "Klipper.M117[0]",
      "parameters": [
        {
          "description": "",
          "label": "<message>",
          "optional": false,
          "tag": "message",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-display-commands"
    },
    {
      "brief": "Set the message line on the LCD.",
      "codes": [
        "M117"
      ],
      "id": "Marlin.M117[0]",
      "parameters": [
        {
          "description": "LCD status message",
          "label": "[string]",
          "optional": true,
          "tag": "string"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set LCD Message",
      "url": "https://marlinfw.org/docs/gcode/M117"
    },
    {
      "brief": "",
      "codes": [
        "M117"
      ],
      "id": "RepRap.M117[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M117: Get Zero Position",
      "url": "https://reprap.org/wiki/G-code#M117:_Get_Zero_Position"
    },
    {
      "brief": "",
      "codes": [
        "M117"
      ],
      "id": "RepRap.M117[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M117: Display Message",
      "url": "https://reprap.org/wiki/G-code#M117:_Display_Message"
    }
  ],
  "M118": [
    {
      "brief": "",
      "codes": [
        "M118"
      ],
      "id": "Klipper.M118[0]",
      "parameters": [
        {
          "description": "",
          "label": "<message>",
          "optional": false,
          "tag": "message",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#send-message-respond-to-host"
    },
    {
      "brief": "Send text to serial",
      "codes": [
        "M118"
      ],
      "id": "Marlin.M118[0]",
      "parameters": [
        {
          "description": "Message string. If omitted, a blank line will be sent.",
          "label": "[string]",
          "optional": true,
          "tag": "string"
        },
        {
          "description": "Prepend `// ` to denote a comment or action command. Hosts like OctoPrint can interpret such commands to perform special actions. See your host's documentation.",
          "label": "[A1]",
          "optional": true,
          "tag": "A1"
        },
        {
          "description": "Prepend `echo:` to the message. Some hosts will display echo messages differently when preceded by `echo:`.",
          "label": "[E1]",
          "optional": true,
          "tag": "E1"
        },
        {
          "description": "Send message to host serial port (1-9).",
          "label": "[Pn<0|1|2>]",
          "optional": true,
          "tag": "Pn",
          "values": [
            {
              "description": "Send message to all ports.",
              "tag": 0
            },
            {
              "description": "Send message to main host serial port.",
              "tag": 1
            },
            {
              "description": "Send message to secondary host serial port. Requires `SERIAL_PORT_2`.",
              "tag": 2
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Serial print",
      "url": "https://marlinfw.org/docs/gcode/M118"
    },
    {
      "brief": "Use this code to print a visible message to the host console, preceded by 'echo:'.",
      "codes": [
        "M118"
      ],
      "id": "RepRap.M118[0]",
      "parameters": [
        {
          "description": " (RepRapFirmware only) Message targets(s): 0 = generic [default], 1 = USB, 2 = LCD, 3 = HTTP, 4 = Telnet",
          "label": "Pn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " (RepRepFirmware only) Message to send",
          "label": "S\"msg\"",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M118: Echo message on host",
      "url": "https://reprap.org/wiki/G-code#M118:_Echo_message_on_host"
    },
    {
      "brief": "",
      "codes": [
        "M118"
      ],
      "id": "RepRap.M118[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M118: Negotiate Features",
      "url": "https://reprap.org/wiki/G-code#M118:_Negotiate_Features"
    }
  ],
  "M119": [
    {
      "brief": "",
      "codes": [
        "M119"
      ],
      "id": "Klipper.M119[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#other-available-g-code-commands"
    },
    {
      "brief": "Report endstop and probe states to the host.",
      "codes": [
        "M119"
      ],
      "id": "Marlin.M119[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Endstop States",
      "url": "https://marlinfw.org/docs/gcode/M119"
    },
    {
      "brief": "",
      "codes": [
        "M119"
      ],
      "id": "RepRap.M119[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M119: Get Endstop Status",
      "url": "https://reprap.org/wiki/G-code#M119:_Get_Endstop_Status"
    }
  ],
  "M120": [
    {
      "brief": "Enable endstops and keep them enabled when not homing.",
      "codes": [
        "M120"
      ],
      "id": "Marlin.M120[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Enable Endstops",
      "url": "https://marlinfw.org/docs/gcode/M120"
    },
    {
      "brief": "",
      "codes": [
        "M120"
      ],
      "id": "RepRap.M120[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M120: Push",
      "url": "https://reprap.org/wiki/G-code#M120:_Push"
    },
    {
      "brief": "",
      "codes": [
        "M120"
      ],
      "id": "RepRap.M120[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M120: Enable endstop detection",
      "url": "https://reprap.org/wiki/G-code#M120:_Enable_endstop_detection"
    }
  ],
  "M121": [
    {
      "brief": "Disable endstops and keep them enabled when not homing.",
      "codes": [
        "M121"
      ],
      "id": "Marlin.M121[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Disable Endstops",
      "url": "https://marlinfw.org/docs/gcode/M121"
    },
    {
      "brief": "",
      "codes": [
        "M121"
      ],
      "id": "RepRap.M121[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M121: Pop",
      "url": "https://reprap.org/wiki/G-code#M121:_Pop"
    },
    {
      "brief": "",
      "codes": [
        "M121"
      ],
      "id": "RepRap.M121[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M121: Disable endstop detection",
      "url": "https://reprap.org/wiki/G-code#M121:_Disable_endstop_detection"
    }
  ],
  "M122": [
    {
      "brief": "Get TMC Debug Info",
      "codes": [
        "M122"
      ],
      "id": "Marlin.M122[0]",
      "parameters": [
        {
          "description": "Flag to re-initialize stepper drivers with current settings.",
          "label": "[I]",
          "optional": true,
          "since": "2.0.6",
          "tag": "I"
        },
        {
          "description": "Target X driver(s) only.",
          "label": "[X]",
          "optional": true,
          "tag": "X"
        },
        {
          "description": "Target Y driver(s) only.",
          "label": "[Y]",
          "optional": true,
          "tag": "Y"
        },
        {
          "description": "Target Z driver(s) only.",
          "label": "[Z]",
          "optional": true,
          "tag": "Z"
        },
        {
          "description": "Target E driver(s) only.",
          "label": "[E]",
          "optional": true,
          "tag": "E"
        },
        {
          "description": "Report raw register data. Refer to the datasheet to decypher.",
          "label": "[V]",
          "optional": true,
          "requires": "TMC_DEBUG",
          "tag": "V"
        },
        {
          "description": "Flag to enable/disable continuous debug reporting.",
          "label": "[S]",
          "optional": true,
          "requires": "TMC_DEBUG, MONITOR_DRIVER_STATUS",
          "tag": "S",
          "type": "bool"
        },
        {
          "description": "Interval between continuous debug reports, in milliseconds.",
          "label": "[P<ms>]",
          "optional": true,
          "requires": "TMC_DEBUG, MONITOR_DRIVER_STATUS",
          "tag": "P",
          "values": [
            {
              "tag": "ms",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "TMC Debugging",
      "url": "https://marlinfw.org/docs/gcode/M122"
    },
    {
      "brief": "",
      "codes": [
        "M122"
      ],
      "id": "RepRap.M122[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M122: Diagnose (RepRapFirmware)",
      "url": "https://reprap.org/wiki/G-code#M122:_Diagnose_.28RepRapFirmware.29"
    },
    {
      "brief": "Disabled or Enabled Software Endstop\nM122 S<0/1>",
      "codes": [
        "M122"
      ],
      "id": "RepRap.M122[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M122: Set Software Endstop (MK4duo)",
      "url": "https://reprap.org/wiki/G-code#M122:_Set_Software_Endstop_.28MK4duo.29"
    },
    {
      "brief": "Get diagnostic info about L6470 or Trinamic stepper drivers having a UART or SPI interface.\nWith Trinamic drivers there are some extra parameters, and depending on the configuration either basic or detailed information will be reported. Use parameters X, Y, Z, etc. to limit the report only to the specified steppers, otherwise all steppers are reported. Pass I to re-initialize the drivers. Use parameter S to sample at regular intervals. The P parameter can be used to set the sample interval in milliseconds.",
      "codes": [
        "M122"
      ],
      "id": "RepRap.M122[2]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M122: Debug Stepper drivers (Marlin)",
      "url": "https://reprap.org/wiki/G-code#M122:_Debug_Stepper_drivers_.28Marlin.29"
    }
  ],
  "M123": [
    {
      "brief": "Report fan speeds from tachometers",
      "codes": [
        "M123"
      ],
      "id": "Marlin.M123[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Fan Tachometers",
      "url": "https://marlinfw.org/docs/gcode/M123"
    },
    {
      "brief": "Sending a M123 causes the RepRap to transmit filament tachometer values from all extruders.\nSending a M123 is used in Prusa firmware to report fan speeds and fan pwm values.1\nSending a M123 is used in Marlin firmware to report only extruders fans speeds and pwm values.2",
      "codes": [
        "M123"
      ],
      "id": "RepRap.M123[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M123: Tachometer value (RepRap, Prusa & Marlin)",
      "url": "https://reprap.org/wiki/G-code#M123:_Tachometer_value_.28RepRap.2C_Prusa_.26_Marlin.29"
    },
    {
      "brief": "",
      "codes": [
        "M123"
      ],
      "id": "RepRap.M123[1]",
      "parameters": [
        {
          "description": " X Logic",
          "label": "Xn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Y Logic",
          "label": "Yn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Z Logic",
          "label": "Zn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " X2 Logic",
          "label": "In",
          "optional": true,
          "tag": "I",
          "values": []
        },
        {
          "description": " Y2 Logic",
          "label": "Jn",
          "optional": true,
          "tag": "J",
          "values": []
        },
        {
          "description": " Z2 Logic",
          "label": "Kn",
          "optional": true,
          "tag": "K",
          "values": []
        },
        {
          "description": " Probe Logic",
          "label": "Pn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Door Logic",
          "label": "Dn",
          "optional": true,
          "tag": "D",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M123: Endstop Logic (MK4duo)",
      "url": "https://reprap.org/wiki/G-code#M123:_Endstop_Logic_.28MK4duo.29"
    }
  ],
  "M124": [
    {
      "brief": "Immediately stops all motors.",
      "codes": [
        "M124"
      ],
      "id": "RepRap.M124[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M124: Immediate motor stop",
      "url": "https://reprap.org/wiki/G-code#M124:_Immediate_motor_stop"
    },
    {
      "brief": "",
      "codes": [
        "M124"
      ],
      "id": "RepRap.M124[1]",
      "parameters": [
        {
          "description": " X     Pullup on/off",
          "label": "Xn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Y     Pullup on/off",
          "label": "Yn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Z     Pullup on/off",
          "label": "Zn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " X2    Pullup on/off",
          "label": "In",
          "optional": true,
          "tag": "I",
          "values": []
        },
        {
          "description": " Y2    Pullup on/off",
          "label": "Jn",
          "optional": true,
          "tag": "J",
          "values": []
        },
        {
          "description": " Z2    Pullup on/off",
          "label": "Kn",
          "optional": true,
          "tag": "K",
          "values": []
        },
        {
          "description": " Probe Pullup on/off",
          "label": "Pn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Door  Pullup on/off",
          "label": "Dn",
          "optional": true,
          "tag": "D",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M124: Set Endstop Pullup",
      "url": "https://reprap.org/wiki/G-code#M124:_Set_Endstop_Pullup"
    }
  ],
  "M125": [
    {
      "brief": "Save current position and move to filament change position.",
      "codes": [
        "M125"
      ],
      "id": "Marlin.M125[0]",
      "parameters": [
        {
          "description": "Retract length (otherwise `FILAMENT_CHANGE_RETRACT_LENGTH`)",
          "label": "[L<linear>]",
          "optional": true,
          "tag": "L",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "X position to park at (otherwise `FILAMENT_CHANGE_X_POS`)",
          "label": "[X<linear>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Y position to park at (otherwise `FILAMENT_CHANGE_Y_POS`)",
          "label": "[Y<linear>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Z raise before park (otherwise `FILAMENT_CHANGE_Z_ADD`)",
          "label": "[Z<linear>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Always show a prompt and await a response (With an LCD menu)",
          "label": "[P<bool>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Park Head",
      "url": "https://marlinfw.org/docs/gcode/M125"
    }
  ],
  "M126": [
    {
      "brief": "Open the valve for Baricuda 1.",
      "codes": [
        "M126"
      ],
      "id": "Marlin.M126[0]",
      "parameters": [
        {
          "description": "Valve pressure",
          "label": "[S<pressure>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "pressure",
              "type": "byte"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Baricuda 1 Open",
      "url": "https://marlinfw.org/docs/gcode/M126"
    },
    {
      "brief": "",
      "codes": [
        "M126"
      ],
      "id": "RepRap.M126[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M126: Open Valve",
      "url": "https://reprap.org/wiki/G-code#M126:_Open_Valve"
    },
    {
      "brief": "",
      "codes": [
        "M126"
      ],
      "id": "RepRap.M126[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M126 in MakerBot",
      "url": "https://reprap.org/wiki/G-code#M126_in_MakerBot"
    }
  ],
  "M127": [
    {
      "brief": "Close the valve for Baricuda 1.",
      "codes": [
        "M127"
      ],
      "id": "Marlin.M127[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Baricuda 1 Close",
      "url": "https://marlinfw.org/docs/gcode/M127"
    },
    {
      "brief": "",
      "codes": [
        "M127"
      ],
      "id": "RepRap.M127[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M127: Close Valve",
      "url": "https://reprap.org/wiki/G-code#M127:_Close_Valve"
    },
    {
      "brief": "",
      "codes": [
        "M127"
      ],
      "id": "RepRap.M127[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M127 in MakerBot",
      "url": "https://reprap.org/wiki/G-code#M127_in_MakerBot"
    }
  ],
  "M128": [
    {
      "brief": "Open the valve for Baricuda 2.",
      "codes": [
        "M128"
      ],
      "id": "Marlin.M128[0]",
      "parameters": [
        {
          "description": "Valve pressure",
          "label": "[S<pressure>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "pressure",
              "type": "byte"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Baricuda 2 Open",
      "url": "https://marlinfw.org/docs/gcode/M128"
    },
    {
      "brief": "",
      "codes": [
        "M128"
      ],
      "id": "RepRap.M128[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M128: Extruder Pressure PWM",
      "url": "https://reprap.org/wiki/G-code#M128:_Extruder_Pressure_PWM"
    }
  ],
  "M129": [
    {
      "brief": "Close the valve for Baricuda 2.",
      "codes": [
        "M129"
      ],
      "id": "Marlin.M129[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Baricuda 2 Close",
      "url": "https://marlinfw.org/docs/gcode/M129"
    },
    {
      "brief": "",
      "codes": [
        "M129"
      ],
      "id": "RepRap.M129[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M129: Extruder pressure off",
      "url": "https://reprap.org/wiki/G-code#M129:_Extruder_pressure_off"
    }
  ],
  "M13": [
    {
      "brief": "This one M-code does the work of both M03 and M08. It is not unusual for specific machine models to have such combined commands, which make for shorter, more quickly written programs.",
      "codes": [
        "M13"
      ],
      "id": "RepRap.M13[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M13: Spindle on (clockwise rotation) and coolant on (flood)",
      "url": "https://reprap.org/wiki/G-code#M13:_Spindle_on_.28clockwise_rotation.29_and_coolant_on_.28flood.29"
    }
  ],
  "M130": [
    {
      "brief": "",
      "codes": [
        "M130"
      ],
      "id": "RepRap.M130[0]",
      "parameters": [
        {
          "description": " heater number",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " proportional (Kp)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M130: Set PID P value",
      "url": "https://reprap.org/wiki/G-code#M130:_Set_PID_P_value"
    }
  ],
  "M131": [
    {
      "brief": "",
      "codes": [
        "M131"
      ],
      "id": "RepRap.M131[0]",
      "parameters": [
        {
          "description": " heater number",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " integral (Ki)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M131: Set PID I value",
      "url": "https://reprap.org/wiki/G-code#M131:_Set_PID_I_value"
    }
  ],
  "M132": [
    {
      "brief": "",
      "codes": [
        "M132"
      ],
      "id": "RepRap.M132[0]",
      "parameters": [
        {
          "description": " heater number",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " derivative (Kd)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M132: Set PID D value",
      "url": "https://reprap.org/wiki/G-code#M132:_Set_PID_D_value"
    },
    {
      "brief": "",
      "codes": [
        "M132"
      ],
      "id": "RepRap.M132[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M132 in MakerBot",
      "url": "https://reprap.org/wiki/G-code#M132_in_MakerBot"
    }
  ],
  "M133": [
    {
      "brief": "",
      "codes": [
        "M133"
      ],
      "id": "RepRap.M133[0]",
      "parameters": [
        {
          "description": " heater number",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " integral limit (Ki)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M133: Set PID I limit value",
      "url": "https://reprap.org/wiki/G-code#M133:_Set_PID_I_limit_value"
    },
    {
      "brief": "Wait for the toolhead to reach its target temperature.",
      "codes": [
        "M133"
      ],
      "id": "RepRap.M133[1]",
      "parameters": [
        {
          "description": " : Extruder to wait for",
          "label": "Tnn",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " : Time limit, in seconds",
          "label": "Pnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M133 in MakerBot",
      "url": "https://reprap.org/wiki/G-code#M133_in_MakerBot"
    }
  ],
  "M134": [
    {
      "brief": "",
      "codes": [
        "M134"
      ],
      "id": "RepRap.M134[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M134: Write PID values to EEPROM",
      "url": "https://reprap.org/wiki/G-code#M134:_Write_PID_values_to_EEPROM"
    },
    {
      "brief": "",
      "codes": [
        "M134"
      ],
      "id": "RepRap.M134[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M134 in MakerBot",
      "url": "https://reprap.org/wiki/G-code#M134_in_MakerBot"
    }
  ],
  "M135": [
    {
      "brief": "",
      "codes": [
        "M135"
      ],
      "id": "RepRap.M135[0]",
      "parameters": [
        {
          "description": " Heat sample time in seconds",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M135: Set PID sample interval",
      "url": "https://reprap.org/wiki/G-code#M135:_Set_PID_sample_interval"
    },
    {
      "brief": "",
      "codes": [
        "M135"
      ],
      "id": "RepRap.M135[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M135 in MakerBot",
      "url": "https://reprap.org/wiki/G-code#M135_in_MakerBot"
    }
  ],
  "M136": [
    {
      "brief": "",
      "codes": [
        "M136"
      ],
      "id": "RepRap.M136[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M136: Print PID settings to host",
      "url": "https://reprap.org/wiki/G-code#M136:_Print_PID_settings_to_host"
    }
  ],
  "M140": [
    {
      "brief": "",
      "codes": [
        "M140"
      ],
      "id": "Klipper.M140[0]",
      "parameters": [
        {
          "description": "",
          "label": "[S<Stemperature>]",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Set a new target bed temperature.",
      "codes": [
        "M140"
      ],
      "id": "Marlin.M140[0]",
      "parameters": [
        {
          "description": "Material preset index. Overrides `S`.",
          "label": "[I<index>]",
          "optional": true,
          "since": "2.0.6",
          "tag": "I",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Target temperature",
          "label": "[S<temp>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "temp",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Bed Temperature",
      "url": "https://marlinfw.org/docs/gcode/M140"
    },
    {
      "brief": "",
      "codes": [
        "M140"
      ],
      "id": "RepRap.M140[0]",
      "parameters": [
        {
          "description": " Bed heater index",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Heater number",
          "label": "Hnnn",
          "optional": true,
          "tag": "H",
          "values": []
        },
        {
          "description": " Tool number",
          "label": "Tnnn",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " Active/Target temperature",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Standby temperature ",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M140: Set Bed Temperature (Fast)",
      "url": "https://reprap.org/wiki/G-code#M140:_Set_Bed_Temperature_.28Fast.29"
    }
  ],
  "M141": [
    {
      "brief": "Set a new target chamber temperature.",
      "codes": [
        "M141"
      ],
      "id": "Marlin.M141[0]",
      "parameters": [
        {
          "description": "Target temperature.<br/>`AUTOTEMP`: the min auto-temperature.",
          "label": "[S<temp>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "temp",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Chamber Temperature",
      "url": "https://marlinfw.org/docs/gcode/M141"
    },
    {
      "brief": "",
      "codes": [
        "M141"
      ],
      "id": "RepRap.M141[0]",
      "parameters": [
        {
          "description": " Chamber index",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Heater number",
          "label": "Hnnn",
          "optional": true,
          "tag": "H",
          "values": []
        },
        {
          "description": " Tool number",
          "label": "Tnnn",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " Active/Target temperature",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Standby temperature ",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M141: Set Chamber Temperature (Fast)",
      "url": "https://reprap.org/wiki/G-code#M141:_Set_Chamber_Temperature_.28Fast.29"
    }
  ],
  "M142": [
    {
      "brief": "",
      "codes": [
        "M142"
      ],
      "id": "RepRap.M142[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M142: Holding Pressure",
      "url": "https://reprap.org/wiki/G-code#M142:_Holding_Pressure"
    },
    {
      "brief": "",
      "codes": [
        "M142"
      ],
      "id": "RepRap.M142[1]",
      "parameters": [
        {
          "description": " Tool number",
          "label": "Tnnn",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " Active/Target temperature",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Standby temperature",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M142: Set Cooler Temperature (Fast)",
      "url": "https://reprap.org/wiki/G-code#M142:_Set_Cooler_Temperature_.28Fast.29"
    }
  ],
  "M143": [
    {
      "brief": "Set a new target laser coolant temperature.",
      "codes": [
        "M143"
      ],
      "id": "Marlin.M143[0]",
      "parameters": [
        {
          "description": "Target laser coolant temperature.",
          "label": "[S<temp>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "temp",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Laser Cooler Temperature",
      "url": "https://marlinfw.org/docs/gcode/M143"
    },
    {
      "brief": "",
      "codes": [
        "M143"
      ],
      "id": "RepRap.M143[0]",
      "parameters": [
        {
          "description": " Heater number (RepRapFirmware 1.17 and later, default 1 which is normally the first hot end)",
          "label": "H",
          "optional": true,
          "tag": "H",
          "values": []
        },
        {
          "description": " Maximum temperature",
          "label": "S",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M143: Maximum heater temperature",
      "url": "https://reprap.org/wiki/G-code#M143:_Maximum_heater_temperature"
    }
  ],
  "M144": [
    {
      "brief": "",
      "codes": [
        "M144"
      ],
      "id": "RepRap.M144[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M144: Bed Standby",
      "url": "https://reprap.org/wiki/G-code#M144:_Bed_Standby"
    }
  ],
  "M145": [
    {
      "brief": "Set material presets in the LCD menu.",
      "codes": [
        "M145"
      ],
      "id": "Marlin.M145[0]",
      "parameters": [
        {
          "description": "Material index",
          "label": "[S<index>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Hotend temperature",
          "label": "[H<temp>]",
          "optional": true,
          "tag": "H",
          "values": [
            {
              "tag": "temp",
              "type": "int"
            }
          ]
        },
        {
          "description": "Bed temperature",
          "label": "[B<temp>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "temp",
              "type": "int"
            }
          ]
        },
        {
          "description": "Fan speed",
          "label": "[F<speed>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "speed",
              "type": "byte"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Material Preset",
      "url": "https://marlinfw.org/docs/gcode/M145"
    }
  ],
  "M146": [
    {
      "brief": "",
      "codes": [
        "M146"
      ],
      "id": "RepRap.M146[0]",
      "parameters": [
        {
          "description": " Relative humidity in percent",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M146: Set Chamber Humidity",
      "url": "https://reprap.org/wiki/G-code#M146:_Set_Chamber_Humidity"
    }
  ],
  "M149": [
    {
      "brief": "Set temperature units to Celsius, Fahrenheit, or Kelvin.",
      "codes": [
        "M149"
      ],
      "id": "Marlin.M149[0]",
      "parameters": [
        {
          "description": "Celsius",
          "label": "[C]",
          "optional": true,
          "tag": "C"
        },
        {
          "description": "Fahrenheit",
          "label": "[F]",
          "optional": true,
          "tag": "F"
        },
        {
          "description": "Kelvin",
          "label": "[K]",
          "optional": true,
          "tag": "K"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Temperature Units",
      "url": "https://marlinfw.org/docs/gcode/M149"
    },
    {
      "brief": "",
      "codes": [
        "M149"
      ],
      "id": "RepRap.M149[0]",
      "parameters": [
        {
          "description": " Flag to treat temperature as degrees Celsius",
          "label": "C",
          "optional": true,
          "tag": "C",
          "values": []
        },
        {
          "description": " Flag to treat temperature as Kelvin",
          "label": "K",
          "optional": true,
          "tag": "K",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M149: Set temperature units",
      "url": "https://reprap.org/wiki/G-code#M149:_Set_temperature_units"
    }
  ],
  "M150": [
    {
      "brief": "Set the color of the RGB(W) LED, backlight, or LED strip.",
      "codes": [
        "M150"
      ],
      "id": "Marlin.M150[0]",
      "parameters": [
        {
          "description": "Red component from 0 to 255",
          "label": "[R<intensity>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "intensity",
              "type": "byte"
            }
          ]
        },
        {
          "description": "Green component from 0 to 255",
          "label": "[U<intensity>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "tag": "intensity",
              "type": "byte"
            }
          ]
        },
        {
          "description": "Blue component from 0 to 255",
          "label": "[B<intensity>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "intensity",
              "type": "byte"
            }
          ]
        },
        {
          "description": "White component from 0 to 255 (`RGBW_LED` or `NEOPIXEL_LED` only)",
          "label": "[W<intensity>]",
          "optional": true,
          "tag": "W",
          "values": [
            {
              "tag": "intensity",
              "type": "byte"
            }
          ]
        },
        {
          "description": "Brightness from 0 to 255 (Requires `NEOPIXEL_LED`)",
          "label": "[P<intensity>]",
          "optional": true,
          "requires": "NEOPIXEL_LED",
          "tag": "P",
          "values": [
            {
              "tag": "intensity",
              "type": "byte"
            }
          ]
        },
        {
          "description": "NeoPixel pixel index (0 .. pixels-1) (Requires `NEOPIXEL_LED`)",
          "label": "[I<pixel>]",
          "optional": true,
          "requires": "NEOPIXEL_LED",
          "since": "2.0.6",
          "tag": "I",
          "values": [
            {
              "tag": "pixel",
              "type": "int"
            }
          ]
        },
        {
          "description": "NeoPixel strip index (0 or 1) (Requires `NEOPIXEL2_SEPARATE`)",
          "label": "[S<strip>]",
          "optional": true,
          "requires": "NEOPIXEL2_SEPARATE",
          "since": "2.0.6.1",
          "tag": "S",
          "values": [
            {
              "tag": "strip",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set RGB(W) Color",
      "url": "https://marlinfw.org/docs/gcode/M150"
    },
    {
      "brief": "",
      "codes": [
        "M150"
      ],
      "id": "RepRap.M150[0]",
      "parameters": [
        {
          "description": " Red component",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " Green component",
          "label": "Unnn",
          "optional": true,
          "tag": "U",
          "values": []
        },
        {
          "description": " Blue component",
          "label": "Bnnn",
          "optional": true,
          "tag": "B",
          "values": []
        },
        {
          "description": " White component (Marlin)",
          "label": "Wnnn",
          "optional": true,
          "tag": "W",
          "values": []
        },
        {
          "description": " Brightness (0-255) (Marlin, also RepRapFirmware 2.03 and later)",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Set full brightness (Marlin)",
          "label": "P",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " (RepRapFirmware) Number of individual LEDs to set to these colours",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " (RepRapFirmware) Following command action. F0 (default) means this is the last command for the LED strip, so the next M150 command starts at the beginning of the strip. F1 means further M150 commands for the remainder of the strip follow this one.",
          "label": "Fn",
          "optional": true,
          "tag": "F",
          "values": []
        },
        {
          "description": " (RepRapFirmware) LED type: X0 (default) = DotStar, X1 = NeoPixel. This parameter is remembered from one call to the next, so it only needs to be given once.",
          "label": "Xn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " (RepRapFirmware) Brightness, 0-31 (alternative to P 0-255)",
          "label": "Ynn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " (RepRapFirmware) Use specified SPI frequency (in Hz) instead of default frequency. This parameter is only processed if X parameter also present. When using NeoPixels, only frequencies between about 2.5MHz and 4MHz will work.",
          "label": "Qnnn",
          "optional": true,
          "tag": "Q",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M150: Set LED color",
      "url": "https://reprap.org/wiki/G-code#M150:_Set_LED_color"
    }
  ],
  "M154": [
    {
      "brief": "Periodically auto-report position to serial",
      "codes": [
        "M154"
      ],
      "id": "Marlin.M154[0]",
      "parameters": [
        {
          "description": "Interval in seconds between auto-reports. `S0` to disable.",
          "label": "[S<seconds>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "seconds",
              "type": "int"
            }
          ]
        }
      ],
      "related": "M114",
      "source": "Marlin",
      "title": "Position Auto-Report",
      "url": "https://marlinfw.org/docs/gcode/M154"
    },
    {
      "brief": "Hosts normally monitor printer position by sending M114 every couple of seconds. This adds more serial traffic and fails if the command queue is full. M154 reduces traffic by setting the firmware to report the 'projected' position at regular intervals. This behavior is disabled by default for best compatibility with existing hosts. If the firmware supports M154 the output of M115 will report the AUTOREPORT_POS capability.",
      "codes": [
        "M154"
      ],
      "id": "RepRap.M154[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M154: Auto Report Position",
      "url": "https://reprap.org/wiki/G-code#M154:_Auto_Report_Position"
    }
  ],
  "M155": [
    {
      "brief": "Auto-report temperatures to host periodically.",
      "codes": [
        "M155"
      ],
      "id": "Marlin.M155[0]",
      "parameters": [
        {
          "description": "Interval in seconds between auto-reports. `S0` to disable.",
          "label": "[S<seconds>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "seconds",
              "type": "int"
            }
          ]
        }
      ],
      "related": "M105",
      "source": "Marlin",
      "title": "Temperature Auto-Report",
      "url": "https://marlinfw.org/docs/gcode/M155"
    },
    {
      "brief": "",
      "codes": [
        "M155"
      ],
      "id": "RepRap.M155[0]",
      "parameters": [
        {
          "description": " enable sending temperatures = 1, disable = 0",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Interval in seconds between auto-reports. S0 to disable. (Marlin) Prusa has a Maximum: 255",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Activate auto-report function (bit mask). Default is temperature.",
          "label": "Cnn",
          "optional": true,
          "tag": "C",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M155: Automatically send temperatures",
      "url": "https://reprap.org/wiki/G-code#M155:_Automatically_send_temperatures"
    }
  ],
  "M16": [
    {
      "brief": "Prevent G-code usage on the wrong machine",
      "codes": [
        "M16"
      ],
      "id": "Marlin.M16[0]",
      "parameters": [
        {
          "description": "The string to compare to MACHINE_NAME.",
          "label": "string",
          "optional": false,
          "tag": "string"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Expected Printer Check",
      "url": "https://marlinfw.org/docs/gcode/M016"
    },
    {
      "brief": "Do a case-sensitive comparison between the string argument and the configured MACHINE_NAME. If the machine name doesn't match, halt the printer so that a reset is required. This safety feature is meant to prevent G-code sliced for a specific machine from being used on any other machine. In Marlin this feature is enabled with EXPECTED_PRINTER_CHECK.",
      "codes": [
        "M16"
      ],
      "id": "RepRap.M16[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M16: Expected Printer Check",
      "url": "https://reprap.org/wiki/G-code#M16:_Expected_Printer_Check"
    }
  ],
  "M160": [
    {
      "brief": "",
      "codes": [
        "M160"
      ],
      "id": "RepRap.M160[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M160: Number of mixed materials",
      "url": "https://reprap.org/wiki/G-code#M160:_Number_of_mixed_materials"
    }
  ],
  "M163": [
    {
      "brief": "Set a single mix factor for a mixing extruder.",
      "codes": [
        "M163"
      ],
      "id": "Marlin.M163[0]",
      "parameters": [
        {
          "description": "Component index",
          "label": "[S<index>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Mix factor",
          "label": "[P<factor>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "factor",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Mix Factor",
      "url": "https://marlinfw.org/docs/gcode/M163"
    },
    {
      "brief": "",
      "codes": [
        "M163"
      ],
      "id": "RepRap.M163[0]",
      "parameters": [
        {
          "description": " extruder number",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " weight",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M163: Set weight of mixed material",
      "url": "https://reprap.org/wiki/G-code#M163:_Set_weight_of_mixed_material"
    }
  ],
  "M164": [
    {
      "brief": "Save the current mix as a virtual tool.",
      "codes": [
        "M164"
      ],
      "id": "Marlin.M164[0]",
      "parameters": [
        {
          "description": "Tool index (active virtual tool if omitted)",
          "label": "S<index>",
          "optional": false,
          "tag": "S",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Save Mix",
      "url": "https://marlinfw.org/docs/gcode/M164"
    },
    {
      "brief": "",
      "codes": [
        "M164"
      ],
      "id": "RepRap.M164[0]",
      "parameters": [
        {
          "description": " virtual extruder number",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " store to eeprom (P0 = no, P1 = yes)",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M164: Store weights",
      "url": "https://reprap.org/wiki/G-code#M164:_Store_weights"
    }
  ],
  "M165": [
    {
      "brief": "Set all mix factors for the mixing extruder.",
      "codes": [
        "M165"
      ],
      "id": "Marlin.M165[0]",
      "parameters": [
        {
          "description": "Mix factor 1",
          "label": "[A<factor>]",
          "optional": true,
          "tag": "A",
          "values": [
            {
              "tag": "factor",
              "type": "float"
            }
          ]
        },
        {
          "description": "Mix factor 2",
          "label": "[B<factor>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "factor",
              "type": "float"
            }
          ]
        },
        {
          "description": "Mix factor 3",
          "label": "[C<factor>]",
          "optional": true,
          "tag": "C",
          "values": [
            {
              "tag": "factor",
              "type": "float"
            }
          ]
        },
        {
          "description": "Mix factor 4",
          "label": "[D<factor>]",
          "optional": true,
          "tag": "D",
          "values": [
            {
              "tag": "factor",
              "type": "float"
            }
          ]
        },
        {
          "description": "Mix factor 5",
          "label": "[H<factor>]",
          "optional": true,
          "tag": "H",
          "values": [
            {
              "tag": "factor",
              "type": "float"
            }
          ]
        },
        {
          "description": "Mix factor 6",
          "label": "[I<factor>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "factor",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Mix",
      "url": "https://marlinfw.org/docs/gcode/M165"
    },
    {
      "brief": "",
      "codes": [
        "M165"
      ],
      "id": "RepRap.M165[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M165: Set multiple mix weights",
      "url": "https://reprap.org/wiki/G-code#M165:_Set_multiple_mix_weights"
    }
  ],
  "M166": [
    {
      "brief": "Set a Gradient Mix",
      "codes": [
        "M166"
      ],
      "id": "Marlin.M166[0]",
      "parameters": [
        {
          "description": "Starting Z Height. (Use `Z` to set the Ending Z Height.)",
          "label": "A<linear>",
          "optional": false,
          "tag": "A",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Ending Z Height. (Use `A` to set the Starting Z Height.)",
          "label": "Z<linear>",
          "optional": false,
          "tag": "Z",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Starting Virtual Tool. The Gradient begins with this tool-mix. Below the Starting Z Height the Starting Virtual Tool fully applies.",
          "label": "I<index>",
          "optional": false,
          "tag": "I",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Ending Virtual Tool. The Gradient transitions to this tool-mix as Z approaches the Ending Z Height. Above the Ending Z Height the Ending Virtual Tool fully applies.",
          "label": "J<index>",
          "optional": false,
          "tag": "J",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Enable / disable the gradient in manual mode. When using the tool index alias, tool-change commands determine whether or not the gradient is enabled.",
          "label": "[S<enable>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "enable",
              "type": "bool"
            }
          ]
        },
        {
          "description": "A tool index to reassign to the gradient. If no index is given, cancel the tool assignment.",
          "label": "[T<index>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Gradient Mix",
      "url": "https://marlinfw.org/docs/gcode/M166"
    }
  ],
  "M17": [
    {
      "brief": "Enable steppers",
      "codes": [
        "M17"
      ],
      "id": "Marlin.M17[0]",
      "parameters": [
        {
          "description": "X Enable",
          "label": "[X<flag>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "Y Enable",
          "label": "[Y<flag>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "Z Enable",
          "label": "[Z<flag>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "E Enable",
          "label": "[E<flag>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Enable Steppers",
      "url": "https://marlinfw.org/docs/gcode/M017"
    },
    {
      "brief": "",
      "codes": [
        "M17"
      ],
      "id": "RepRap.M17[0]",
      "parameters": [
        {
          "description": " X axis",
          "label": "X",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Y axis",
          "label": "Y",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Z axis",
          "label": "Z",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " All extruders",
          "label": "E",
          "optional": true,
          "tag": "E",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M17: Enable/Power all stepper motors",
      "url": "https://reprap.org/wiki/G-code#M17:_Enable.2FPower_all_stepper_motors"
    }
  ],
  "M18": [
    {
      "brief": "",
      "codes": [
        "M18"
      ],
      "id": "Klipper.M18[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Disable steppers (same as M84).",
      "codes": [
        "M18",
        "M84"
      ],
      "id": "Marlin.M18[0]",
      "parameters": [
        {
          "description": "Inactivity Timeout. If none specified, disable now.",
          "label": "[S<seconds>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "seconds",
              "type": "int"
            }
          ]
        },
        {
          "description": "X Disable",
          "label": "[X<flag>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "Y Disable",
          "label": "[Y<flag>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "Z Disable",
          "label": "[Z<flag>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "E Disable",
          "label": "[E<flag>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Disable steppers",
      "url": "https://marlinfw.org/docs/gcode/M018"
    },
    {
      "brief": "",
      "codes": [
        "M18"
      ],
      "id": "RepRap.M18[0]",
      "parameters": [
        {
          "description": " X axis",
          "label": "X",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Y axis",
          "label": "Y",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Z axis",
          "label": "Z",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " Extruder drive(s)",
          "label": "E",
          "optional": true,
          "tag": "E",
          "values": []
        },
        {
          "description": " Seconds",
          "label": "S",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M18: Disable all stepper motors",
      "url": "https://reprap.org/wiki/G-code#M18:_Disable_all_stepper_motors"
    }
  ],
  "M190": [
    {
      "brief": "",
      "codes": [
        "M190"
      ],
      "id": "Klipper.M190[0]",
      "parameters": [
        {
          "description": "",
          "label": "S<Stemperature>",
          "optional": false,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Wait for the bed to reach target temperature.",
      "codes": [
        "M190"
      ],
      "id": "Marlin.M190[0]",
      "parameters": [
        {
          "description": "Material preset index. Overrides `S`.",
          "label": "[I<index>]",
          "optional": true,
          "since": "2.0.6",
          "tag": "I",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Target temperature (wait only when heating).",
          "label": "[S<temp>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "temp",
              "type": "float"
            }
          ]
        },
        {
          "description": "Target temperature (wait for cooling or heating).",
          "label": "[R<temp>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "temp",
              "type": "float"
            }
          ]
        }
      ],
      "related": [
        "M140"
      ],
      "source": "Marlin",
      "title": "Wait for Bed Temperature",
      "url": "https://marlinfw.org/docs/gcode/M190"
    },
    {
      "brief": "",
      "codes": [
        "M190"
      ],
      "id": "RepRap.M190[0]",
      "parameters": [
        {
          "description": " minimum target temperature, waits until heating",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " accurate target temperature, waits until heating and cooling (Marlin and Prusa)",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M190: Wait for bed temperature to reach target temp",
      "url": "https://reprap.org/wiki/G-code#M190:_Wait_for_bed_temperature_to_reach_target_temp"
    }
  ],
  "M191": [
    {
      "brief": "Wait for the chamber to reach target temperature.",
      "codes": [
        "M191"
      ],
      "id": "Marlin.M191[0]",
      "parameters": [
        {
          "description": "Target temperature (wait only when heating).",
          "label": "[S<temp>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "temp",
              "type": "float"
            }
          ]
        },
        {
          "description": "Target temperature (wait for cooling or heating).",
          "label": "[R<temp>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "temp",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Wait for Chamber Temperature",
      "url": "https://marlinfw.org/docs/gcode/M191"
    },
    {
      "brief": "",
      "codes": [
        "M191"
      ],
      "id": "RepRap.M191[0]",
      "parameters": [
        {
          "description": " minimum target temperature, waits until heating",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " accurate target temperature, waits until heating and cooling (Marlin)",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M191: Wait for chamber temperature to reach target temp",
      "url": "https://reprap.org/wiki/G-code#M191:_Wait_for_chamber_temperature_to_reach_target_temp"
    }
  ],
  "M192": [
    {
      "brief": "Wait for the probe temperature sensor to reach a target",
      "codes": [
        "M192"
      ],
      "id": "Marlin.M192[0]",
      "parameters": [
        {
          "description": "Temperature to wait for, whether heating or cooling.",
          "label": "[R<temp>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "temp",
              "type": "int"
            }
          ]
        },
        {
          "description": "A minimum temperature to wait for. No wait if already higher.",
          "label": "[S<temp>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "temp",
              "type": "int"
            }
          ]
        }
      ],
      "related": [
        "G76",
        "M871"
      ],
      "source": "Marlin",
      "title": "Wait for Probe temperature",
      "url": "https://marlinfw.org/docs/gcode/M192"
    },
    {
      "brief": "Use M192 to dwell until the probe is at or above a given temperature.",
      "codes": [
        "M192"
      ],
      "id": "RepRap.M192[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M192: Wait for Probe Temperature",
      "url": "https://reprap.org/wiki/G-code#M192:_Wait_for_Probe_Temperature"
    }
  ],
  "M193": [
    {
      "brief": "Set a new target laser coolant temperature.",
      "codes": [
        "M193"
      ],
      "id": "Marlin.M193[0]",
      "parameters": [
        {
          "description": "Target laser coolant temperature.",
          "label": "[S<temp>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "temp",
              "type": "float"
            }
          ]
        }
      ],
      "related": [
        "M143"
      ],
      "source": "Marlin",
      "title": "Set Laser Cooler Temperature",
      "url": "https://marlinfw.org/docs/gcode/M193"
    }
  ],
  "M2": [
    {
      "brief": "",
      "codes": [
        "M2"
      ],
      "id": "RepRap.M2[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M2: Program End",
      "url": "https://reprap.org/wiki/G-code#M2:_Program_End"
    }
  ],
  "M20": [
    {
      "brief": "",
      "codes": [
        "M20"
      ],
      "id": "Klipper.M20[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-sd-card-commands"
    },
    {
      "brief": "List the contents of the SD Card.",
      "codes": [
        "M20"
      ],
      "id": "Marlin.M20[0]",
      "parameters": [
        {
          "description": "Include the long filename in the listing.",
          "experimental": true,
          "label": "[L<flag>]",
          "optional": true,
          "requires": "LONG_FILENAME_HOST_SUPPORT",
          "since": "2.0.9",
          "tag": "L",
          "values": [
            {
              "type": "flag"
            }
          ]
        }
      ],
      "related": [
        "M33"
      ],
      "source": "Marlin",
      "title": "List SD Card",
      "url": "https://marlinfw.org/docs/gcode/M020"
    },
    {
      "brief": "",
      "codes": [
        "M20"
      ],
      "id": "RepRap.M20[0]",
      "parameters": [
        {
          "description": " Output style",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " File number to start at",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " Directory to list",
          "label": "P\"ddd\"",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Reports long filenames instead of just short filenames. Requires host software parsing (Cap:EXTENDED_M20).",
          "label": "L",
          "optional": true,
          "tag": "L",
          "values": []
        },
        {
          "description": " Report timestamps as well. The value is one uint32_t encoded as hex. Requires host software parsing (Cap:EXTENDED_M20).",
          "label": "T",
          "optional": true,
          "tag": "T",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M20: List SD card",
      "url": "https://reprap.org/wiki/G-code#M20:_List_SD_card"
    }
  ],
  "M200": [
    {
      "brief": "Set the diameter for volumetric extrusion.",
      "codes": [
        "M200"
      ],
      "id": "Marlin.M200[0]",
      "parameters": [
        {
          "description": "Filament diameter",
          "label": "[D<diameter>]",
          "optional": true,
          "tag": "D",
          "values": [
            {
              "tag": "diameter",
              "type": "float"
            }
          ]
        },
        {
          "description": "Set volumetric extruder limit (in mm<sup>3</sup>/sec). `L0` disables the limit. (Requires `VOLUMETRIC_EXTRUDER_LIMIT`.)",
          "label": "[L<volume>]",
          "optional": true,
          "tag": "L",
          "values": [
            {
              "tag": "volume",
              "type": "float"
            }
          ]
        },
        {
          "description": "0 to disable volumetric extrusion mode, otherwise volumetric is enabled.",
          "label": "[S<flag>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "Extruder index. If omitted, the currently active extruder will be used.",
          "label": "[T<index>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Filament Diameter",
      "url": "https://marlinfw.org/docs/gcode/M200"
    },
    {
      "brief": "Volumetric Extrusion is a firmware mode (and an option you can set in some slicers) wherein all extrusion amounts are specified as a volume \u2014using cubic millimeters or inches (i.e., mm3 or in3)\u2014 instead of a linear distance. This makes it possible to use the same G-code with any filament diameter.\nM200 tells the firmware what the filament diameter is, and (if non-zero) to enable Volumetric Extrusion.\nSend M200 without parameters to get the current Volumetric Extrusion state and filament diameters.\nNote that slicer-commanded retraction amounts must also be specified in mm3 since the E axis is interpreted as a volume. However, when using Firmware Retraction (G10 / G11) the retractions specified by M207 are still set in linear units.",
      "codes": [
        "M200"
      ],
      "id": "RepRap.M200[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M200: Set filament diameter",
      "url": "https://reprap.org/wiki/G-code#M200:_Set_filament_diameter"
    }
  ],
  "M201": [
    {
      "brief": "Set maximum acceleration for print moves one or more axes.",
      "codes": [
        "M201"
      ],
      "id": "Marlin.M201[0]",
      "parameters": [
        {
          "description": "X axis max acceleration",
          "label": "[X<accel>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "accel",
              "type": "float"
            }
          ]
        },
        {
          "description": "Y axis max acceleration",
          "label": "[Y<accel>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "accel",
              "type": "float"
            }
          ]
        },
        {
          "description": "Z axis max acceleration",
          "label": "[Z<accel>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "accel",
              "type": "float"
            }
          ]
        },
        {
          "description": "E axis max acceleration",
          "label": "[E<accel>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "accel",
              "type": "float"
            }
          ]
        },
        {
          "description": "Target extruder (Requires `DISTINCT_E_FACTORS`)",
          "label": "[T<index>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Print Max Acceleration",
      "url": "https://marlinfw.org/docs/gcode/M201"
    },
    {
      "brief": "",
      "codes": [
        "M201"
      ],
      "id": "RepRap.M201[0]",
      "parameters": [
        {
          "description": " Acceleration for X axis in units/s",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Acceleration for Y axis in units/s",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Acceleration for Z axis in units/s",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " Acceleration for the active or specified extruder in units/s",
          "label": "Ennn",
          "optional": true,
          "tag": "E",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M201: Set max acceleration",
      "url": "https://reprap.org/wiki/G-code#M201:_Set_max_acceleration"
    }
  ],
  "M201.1": [
    {
      "brief": "",
      "codes": [
        "M201.1"
      ],
      "id": "RepRap.M201.1[0]",
      "parameters": [
        {
          "description": " Acceleration for X axis in units/s",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Acceleration for Y axis in units/s",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Acceleration for Z axis in units/s",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " Acceleration for the extruders in units/s",
          "label": "Ennn:nnn...",
          "optional": true,
          "tag": "E",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M201.1: Set reduced acceleration for special move types",
      "url": "https://reprap.org/wiki/G-code#M201.1:_Set_reduced_acceleration_for_special_move_types"
    }
  ],
  "M202": [
    {
      "brief": "Set max travel acceleration in units/s^2 for travel moves (M202 X1000 Y1000). Unused in Marlin!!",
      "codes": [
        "M202"
      ],
      "id": "RepRap.M202[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M202: Set max travel acceleration",
      "url": "https://reprap.org/wiki/G-code#M202:_Set_max_travel_acceleration"
    }
  ],
  "M203": [
    {
      "brief": "Set maximum feedrate for one or more axes.",
      "codes": [
        "M203"
      ],
      "id": "Marlin.M203[0]",
      "parameters": [
        {
          "description": "X axis max feedrate",
          "label": "[X<units/s>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "units/s",
              "type": "float"
            }
          ]
        },
        {
          "description": "Y axis max feedrate",
          "label": "[Y<units/s>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "units/s",
              "type": "float"
            }
          ]
        },
        {
          "description": "Z axis max feedrate",
          "label": "[Z<units/s>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "units/s",
              "type": "float"
            }
          ]
        },
        {
          "description": "E axis max feedrate",
          "label": "[E<units/s>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "units/s",
              "type": "float"
            }
          ]
        },
        {
          "description": "Target extruder (Requires `DISTINCT_E_FACTORS`)",
          "label": "[T<index>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Max Feedrate",
      "url": "https://marlinfw.org/docs/gcode/M203"
    },
    {
      "brief": "",
      "codes": [
        "M203"
      ],
      "id": "RepRap.M203[0]",
      "parameters": [
        {
          "description": " Maximum feedrate for X axis",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Maximum feedrate for Y axis",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Maximum feedrate for Z axis",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " Maximum feedrate for extruder drives",
          "label": "Ennn",
          "optional": true,
          "tag": "E",
          "values": []
        },
        {
          "description": " (RepRapFirmware) Minimum feed rate (optional) ",
          "label": "Innn",
          "optional": true,
          "tag": "I",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M203: Set maximum feedrate",
      "url": "https://reprap.org/wiki/G-code#M203:_Set_maximum_feedrate"
    }
  ],
  "M203 (Repetier)": [
    {
      "brief": "Set temperature monitor to Sx. Repetier Firmware only.",
      "codes": [
        "M203 (Repetier)"
      ],
      "id": "RepRap.M203 (Repetier)[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M203 (Repetier): Set temperature monitor",
      "url": "https://reprap.org/wiki/G-code#M203_.28Repetier.29:_Set_temperature_monitor"
    }
  ],
  "M204": [
    {
      "brief": "",
      "codes": [
        "M204"
      ],
      "id": "Klipper.M204[0]",
      "parameters": [
        {
          "description": "",
          "label": "S<Svalue>",
          "optional": false,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Set the starting acceleration for moves by type.",
      "codes": [
        "M204"
      ],
      "id": "Marlin.M204[0]",
      "parameters": [
        {
          "description": "Printing acceleration. Used for moves that include extrusion (i.e., which employ the current tool).",
          "label": "[P<accel>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "accel",
              "type": "float"
            }
          ]
        },
        {
          "description": "Retract acceleration. Used for extruder retraction moves.",
          "label": "[R<accel>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "accel",
              "type": "float"
            }
          ]
        },
        {
          "description": "Travel acceleration. Used for moves that include no extrusion.",
          "label": "[T<accel>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "accel",
              "type": "float"
            }
          ]
        },
        {
          "description": "Legacy parameter for move acceleration. Set both printing and travel acceleration.",
          "label": "[S<accel>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "accel",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Starting Acceleration",
      "url": "https://marlinfw.org/docs/gcode/M204"
    },
    {
      "brief": "",
      "codes": [
        "M204"
      ],
      "id": "RepRap.M204[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M204: Set default acceleration",
      "url": "https://reprap.org/wiki/G-code#M204:_Set_default_acceleration"
    }
  ],
  "M204 (Repetier)": [
    {
      "brief": "",
      "codes": [
        "M204 (Repetier)"
      ],
      "id": "RepRap.M204 (Repetier)[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M204 (Repetier): Set PID values",
      "url": "https://reprap.org/wiki/G-code#M204_.28Repetier.29:_Set_PID_values"
    }
  ],
  "M205": [
    {
      "brief": "Set some advanced settings related to movement.",
      "codes": [
        "M205"
      ],
      "id": "Marlin.M205[0]",
      "parameters": [
        {
          "description": "X max jerk (units/s)",
          "label": "[X<jerk>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "jerk",
              "type": "float"
            }
          ]
        },
        {
          "description": "Y max jerk (units/s)",
          "label": "[Y<jerk>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "jerk",
              "type": "float"
            }
          ]
        },
        {
          "description": "Z max jerk (units/s)",
          "label": "[Z<jerk>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "jerk",
              "type": "float"
            }
          ]
        },
        {
          "description": "E max jerk (units/s)",
          "label": "[E<jerk>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "jerk",
              "type": "float"
            }
          ]
        },
        {
          "description": "Minimum segment time (\u00b5s)",
          "label": "[B<\u00b5s>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "\u00b5s",
              "type": "int"
            }
          ]
        },
        {
          "description": "Minimum feedrate for print moves (units/s)",
          "label": "[S<units/s>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "units/s",
              "type": "float"
            }
          ]
        },
        {
          "description": "Minimum feedrate for travel moves (units/s)",
          "label": "[T<units/s>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "units/s",
              "type": "float"
            }
          ]
        },
        {
          "description": "Junction deviation (requires `JUNCTION_DEVIATION`)",
          "label": "[J<deviation>]",
          "optional": true,
          "tag": "J",
          "values": [
            {
              "tag": "deviation",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Advanced Settings",
      "url": "https://marlinfw.org/docs/gcode/M205"
    },
    {
      "brief": "",
      "codes": [
        "M205"
      ],
      "id": "RepRap.M205[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M205: Advanced settings",
      "url": "https://reprap.org/wiki/G-code#M205:_Advanced_settings"
    }
  ],
  "M205 (Repetier)": [
    {
      "brief": "Output EEPROM settings. Repetier Firmware only.",
      "codes": [
        "M205 (Repetier)"
      ],
      "id": "RepRap.M205 (Repetier)[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M205 (Repetier): EEPROM Report",
      "url": "https://reprap.org/wiki/G-code#M205_.28Repetier.29:_EEPROM_Report"
    }
  ],
  "M206": [
    {
      "brief": "Apply a persistent offset",
      "codes": [
        "M206"
      ],
      "id": "Marlin.M206[0]",
      "parameters": [
        {
          "description": "SCARA Psi offset (Requires `MORGAN_SCARA`)",
          "label": "[P<offset>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "offset",
              "type": "float"
            }
          ]
        },
        {
          "description": "SCARA Theta offset (Requires `MORGAN_SCARA`)",
          "label": "[T<offset>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "offset",
              "type": "float"
            }
          ]
        },
        {
          "description": "X home offset",
          "label": "[X<offset>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "offset",
              "type": "float"
            }
          ]
        },
        {
          "description": "Y home offset",
          "label": "[Y<offset>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "offset",
              "type": "float"
            }
          ]
        },
        {
          "description": "Z home offset",
          "label": "[Z<offset>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "offset",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Home Offsets",
      "url": "https://marlinfw.org/docs/gcode/M206"
    },
    {
      "brief": "",
      "codes": [
        "M206"
      ],
      "id": "RepRap.M206[0]",
      "parameters": [
        {
          "description": " X axis offset",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Y axis offset",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Z axis offset",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M206: Offset axes",
      "url": "https://reprap.org/wiki/G-code#M206:_Offset_axes"
    }
  ],
  "M206 (Repetier)": [
    {
      "brief": "Set a Repetier Firmware EEPROM value.",
      "codes": [
        "M206 (Repetier)"
      ],
      "id": "RepRap.M206 (Repetier)[0]",
      "parameters": [
        {
          "description": " Value type",
          "label": "T[type]",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " Value position",
          "label": "P[pos]",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " An integer value",
          "label": "[S(long)]",
          "optional": true,
          "tag": "[",
          "values": []
        },
        {
          "description": " A float value",
          "label": "[X(float)]",
          "optional": true,
          "tag": "[",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M206 (Repetier): Set EEPROM value",
      "url": "https://reprap.org/wiki/G-code#M206_.28Repetier.29:_Set_EEPROM_value"
    }
  ],
  "M207": [
    {
      "brief": "Set options for firmware-based retraction.",
      "codes": [
        "M207"
      ],
      "id": "Marlin.M207[0]",
      "parameters": [
        {
          "description": "Retract length",
          "label": "[S<length>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "length",
              "type": "float"
            }
          ]
        },
        {
          "description": "Retract swap length (multi-extruder)",
          "label": "[W<length>]",
          "optional": true,
          "tag": "W",
          "values": [
            {
              "tag": "length",
              "type": "float"
            }
          ]
        },
        {
          "description": "Retract feedrate (units/min)",
          "label": "[F<feedrate>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "feedrate",
              "type": "float"
            }
          ]
        },
        {
          "description": "Z lift on retraction",
          "label": "[Z<length>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "length",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Firmware Retraction",
      "url": "https://marlinfw.org/docs/gcode/M207"
    },
    {
      "brief": "",
      "codes": [
        "M207"
      ],
      "id": "RepRap.M207[0]",
      "parameters": [
        {
          "description": " positive length to retract, in mm",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " positive or negative additional length to un-retract, in mm (RepRapFirmware only)",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " retraction feedrate, in mm/min",
          "label": "Fnnn",
          "optional": true,
          "tag": "F",
          "values": []
        },
        {
          "description": " feedrate for un-retraction if different from retraction, mm/min (RepRapFirmware 1.16 and later only)",
          "label": "Tnnn",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " additional zlift/hop",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M207: Set retract length",
      "url": "https://reprap.org/wiki/G-code#M207:_Set_retract_length"
    },
    {
      "brief": "",
      "codes": [
        "M207"
      ],
      "id": "RepRap.M207[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M207 Calibrate Z axis with Z max endstop",
      "url": "https://reprap.org/wiki/G-code#M207_Calibrate_Z_axis_with_Z_max_endstop"
    }
  ],
  "M207 (Repetier)": [
    {
      "brief": "Repetier Firmware only. Change the maximum instantaneous speed change (\"jerk\") values, but don't store the change in EEPROM.\nSince Repetier 0.91 December 2013  (if not earlier)",
      "codes": [
        "M207 (Repetier)"
      ],
      "id": "RepRap.M207 (Repetier)[0]",
      "parameters": [
        {
          "description": " Temporarily set XY jerk in mm/s",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Temporarily set Z jerk in mm/s",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " Temporarily set Extruder jerk in mm/s",
          "label": "Ennn",
          "optional": true,
          "tag": "E",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M207 (Repetier): Set jerk without saving to EEPROM",
      "url": "https://reprap.org/wiki/G-code#M207_.28Repetier.29:_Set_jerk_without_saving_to_EEPROM"
    }
  ],
  "M208": [
    {
      "brief": "Firmware-retraction recover settings.",
      "codes": [
        "M208"
      ],
      "id": "Marlin.M208[0]",
      "parameters": [
        {
          "description": "Additional recover length. Can be negative to reduce recover length.",
          "label": "[S<length>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "length",
              "type": "float"
            }
          ]
        },
        {
          "description": "Additional recover swap length. Can be negative to reduce the length.",
          "label": "[W<length>]",
          "optional": true,
          "tag": "W",
          "values": [
            {
              "tag": "length",
              "type": "float"
            }
          ]
        },
        {
          "description": "Recover feedrate (units/min)",
          "label": "[F<feedrate>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "feedrate",
              "type": "float"
            }
          ]
        },
        {
          "description": "Swap recover feedrate (units/min)",
          "label": "[R<feedrate>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "feedrate",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Firmware Recover",
      "url": "https://marlinfw.org/docs/gcode/M208"
    },
    {
      "brief": "",
      "codes": [
        "M208"
      ],
      "id": "RepRap.M208[0]",
      "parameters": [
        {
          "description": " positive length surplus to the M207 Snnn, in mm",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " feedrate, in mm/sec",
          "label": "Fnnn",
          "optional": true,
          "tag": "F",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M208: Set unretract length",
      "url": "https://reprap.org/wiki/G-code#M208:_Set_unretract_length"
    }
  ],
  "M208 (RepRapFirmware)": [
    {
      "brief": "",
      "codes": [
        "M208 (RepRapFirmware)"
      ],
      "id": "RepRap.M208 (RepRapFirmware)[0]",
      "parameters": [
        {
          "description": " 0 = set axis maximum (default), 1 = set axis minimum",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " X axis limit",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Y axis limit",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Z axis limit",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M208 (RepRapFirmware): Set axis max travel",
      "url": "https://reprap.org/wiki/G-code#M208_.28RepRapFirmware.29:_Set_axis_max_travel"
    }
  ],
  "M209": [
    {
      "brief": "Enable / disable auto-retraction.",
      "codes": [
        "M209"
      ],
      "id": "Marlin.M209[0]",
      "parameters": [
        {
          "description": "Set Auto-Retract on/off",
          "label": "S<flag>",
          "optional": false,
          "tag": "S",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Auto Retract",
      "url": "https://marlinfw.org/docs/gcode/M209"
    },
    {
      "brief": "With automatic retract detection, G-code generated by slicers without G10/G11 support can take advantage of Firmware Retraction. The firmware converts E-only moves into retract/recover moves, using the firmware's tuned lengths and feedrates in place of the original E moves.",
      "codes": [
        "M209"
      ],
      "id": "RepRap.M209[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M209: Enable automatic retract",
      "url": "https://reprap.org/wiki/G-code#M209:_Enable_automatic_retract"
    }
  ],
  "M21": [
    {
      "brief": "",
      "codes": [
        "M21"
      ],
      "id": "Klipper.M21[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-sd-card-commands"
    },
    {
      "brief": "Attempt to detect an SD card in the slot.",
      "codes": [
        "M21"
      ],
      "id": "Marlin.M21[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Init SD card",
      "url": "https://marlinfw.org/docs/gcode/M021"
    },
    {
      "brief": "",
      "codes": [
        "M21"
      ],
      "id": "RepRap.M21[0]",
      "parameters": [
        {
          "description": " SD card number (RepRapFirmware only, default 0)",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M21: Initialize SD card",
      "url": "https://reprap.org/wiki/G-code#M21:_Initialize_SD_card"
    }
  ],
  "M210": [
    {
      "brief": "",
      "codes": [
        "M210"
      ],
      "id": "RepRap.M210[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M210: Set homing feedrates",
      "url": "https://reprap.org/wiki/G-code#M210:_Set_homing_feedrates"
    }
  ],
  "M211": [
    {
      "brief": "Set and/or get the software endstops state",
      "codes": [
        "M211"
      ],
      "id": "Marlin.M211[0]",
      "parameters": [
        {
          "description": "Software endstops state (S1=enable S0=disable)",
          "label": "[S<flag>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Software Endstops",
      "url": "https://marlinfw.org/docs/gcode/M211"
    },
    {
      "brief": "The boolean value S 1=enable or 0=disable controls state of software endstop.\nThe boolean value X, Y or Z 1=max endstop or 0=min endstop selects which endstop is controlled.",
      "codes": [
        "M211"
      ],
      "id": "RepRap.M211[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M211: Disable/Enable software endstops",
      "url": "https://reprap.org/wiki/G-code#M211:_Disable.2FEnable_software_endstops"
    }
  ],
  "M212": [
    {
      "brief": "This G-Code command is known to be available in the newer versions of PrintrBot's branch of Marlin. It may not be available in other firmware.",
      "codes": [
        "M212"
      ],
      "id": "RepRap.M212[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M212: Set Bed Level Sensor Offset",
      "url": "https://reprap.org/wiki/G-code#M212:_Set_Bed_Level_Sensor_Offset"
    }
  ],
  "M217": [
    {
      "brief": "Set length and speed for filament swapping",
      "codes": [
        "M217"
      ],
      "id": "Marlin.M217[0]",
      "parameters": [
        {
          "description": "Prime active tool using TOOLCHANGE_FILAMENT_SWAP settings",
          "label": "[Q]",
          "optional": true,
          "tag": "Q",
          "type": "flag"
        },
        {
          "description": "Swap length",
          "label": "[S<linear>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Extra resume",
          "label": "[B<linear>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Extra Prime Length",
          "label": "[E<linear>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Prime feedrate",
          "label": "[P<feedrate>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "feedrate",
              "type": "int"
            }
          ]
        },
        {
          "description": "Retract feedrate",
          "label": "[R<feedrate>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "feedrate",
              "type": "int"
            }
          ]
        },
        {
          "description": "Unretract feedrate",
          "label": "[U<linear>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "tag": "linear",
              "type": "int"
            }
          ]
        },
        {
          "description": "Fan speed (0-255)",
          "label": "[F<linear>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "linear",
              "type": "int"
            }
          ]
        },
        {
          "description": "Fan Time (seconds)",
          "label": "[G<linear>]",
          "optional": true,
          "tag": "G",
          "values": [
            {
              "tag": "linear",
              "type": "int"
            }
          ]
        },
        {
          "description": "Migration Auto Mode. Requires `TOOLCHANGE_MIGRATION_FEATURE`.",
          "label": "[A<linear>]",
          "optional": true,
          "tag": "A",
          "values": [
            {
              "tag": "linear",
              "type": "int"
            }
          ]
        },
        {
          "description": "Last Migration. Requires `TOOLCHANGE_MIGRATION_FEATURE`.",
          "label": "[L<linear>]",
          "optional": true,
          "tag": "L",
          "values": [
            {
              "tag": "linear",
              "type": "int"
            }
          ]
        },
        {
          "description": "Enable Park Feature. Requires `TOOLCHANGE_PARK` - was `SINGLENOZZLE_SWAP_PARK`.",
          "label": "[W<linear>]",
          "optional": true,
          "tag": "W",
          "values": [
            {
              "tag": "linear",
              "type": "int"
            }
          ]
        },
        {
          "description": "Park X position. Requires `TOOLCHANGE_PARK` - was `SINGLENOZZLE_SWAP_PARK`.",
          "label": "[X<linear>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Park Y position. Requires `TOOLCHANGE_PARK` - was `SINGLENOZZLE_SWAP_PARK`.",
          "label": "[Y<linear>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Enable First Prime on uninitialized Nozzles. Requires `TOOLCHANGE_FS_PRIME_FIRST_USED`.",
          "label": "[V<linear>]",
          "optional": true,
          "tag": "V",
          "values": [
            {
              "tag": "linear",
              "type": "int"
            }
          ]
        },
        {
          "description": "Z Raise.",
          "label": "[Z<feedrate>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "feedrate",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Filament swap parameters",
      "url": "https://marlinfw.org/docs/gcode/M217"
    },
    {
      "brief": "If arguments are given, sets tool-change retract and prime length (mm), prime feedrate (mm/min), retract feedrate (mm/min), and park position/raise (mm) or Z raise (mm): S<length> P<prime_speed> R<retract_speed> X<xpos> Y<ypos> Z<zraise>. XY arguments require SINGLENOZZLE_SWAP_PARK. If no arguments are given, reports current values. Currently used to set the SINGLENOZZLE tool-change options in Marlin 2.0 and up. May be extended for other tool-changing systems in the future.",
      "codes": [
        "M217"
      ],
      "id": "RepRap.M217[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M217: Toolchange Parameters",
      "url": "https://reprap.org/wiki/G-code#M217:_Toolchange_Parameters"
    }
  ],
  "M218": [
    {
      "brief": "Set the offset of a hotend (from hotend 0).",
      "codes": [
        "M218"
      ],
      "id": "Marlin.M218[0]",
      "parameters": [
        {
          "description": "Hotend index. Active extruder by default.",
          "label": "[T<index>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Hotend X offset",
          "label": "[X<offset>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "offset",
              "type": "float"
            }
          ]
        },
        {
          "description": "Hotend Y offset",
          "label": "[Y<offset>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "offset",
              "type": "float"
            }
          ]
        },
        {
          "description": "Hotend Z offset. Requires `DUAL_X_CARRIAGE` or `SWITCHING_NOZZLE`.",
          "label": "[Z<offset>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "offset",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Hotend Offset",
      "url": "https://marlinfw.org/docs/gcode/M218"
    },
    {
      "brief": "Sets hotend offset (in mm): T<extruder_number> X<offset_on_X> Y<offset_on_Y>.",
      "codes": [
        "M218"
      ],
      "id": "RepRap.M218[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M218: Set Hotend Offset",
      "url": "https://reprap.org/wiki/G-code#M218:_Set_Hotend_Offset"
    }
  ],
  "M22": [
    {
      "brief": "Simulate ejection of the SD card",
      "codes": [
        "M22"
      ],
      "id": "Marlin.M22[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Release SD card",
      "url": "https://marlinfw.org/docs/gcode/M022"
    },
    {
      "brief": "",
      "codes": [
        "M22"
      ],
      "id": "RepRap.M22[0]",
      "parameters": [
        {
          "description": " SD card number (RepRapFirmware only, default 0)",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M22: Release SD card",
      "url": "https://reprap.org/wiki/G-code#M22:_Release_SD_card"
    }
  ],
  "M220": [
    {
      "brief": "",
      "codes": [
        "M220"
      ],
      "id": "Klipper.M220[0]",
      "parameters": [
        {
          "description": "",
          "label": "S<Spercent>",
          "optional": false,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Set the global feedrate percentage.",
      "codes": [
        "M220"
      ],
      "id": "Marlin.M220[0]",
      "parameters": [
        {
          "description": "Feedrate percentage",
          "label": "[S<percent>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "percent",
              "type": "int"
            }
          ]
        },
        {
          "description": "Back up current factor",
          "label": "[B<flag>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "Restore the last-saved factor",
          "label": "[R<flag>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Feedrate Percentage",
      "url": "https://marlinfw.org/docs/gcode/M220"
    },
    {
      "brief": "",
      "codes": [
        "M220"
      ],
      "id": "RepRap.M220[0]",
      "parameters": [
        {
          "description": " Speed factor override percentage (0..100 or higher)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M220: Set speed factor override percentage",
      "url": "https://reprap.org/wiki/G-code#M220:_Set_speed_factor_override_percentage"
    },
    {
      "brief": "",
      "codes": [
        "M220"
      ],
      "id": "RepRap.M220[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M220: Turn off AUX V1.0.5",
      "url": "https://reprap.org/wiki/G-code#M220:_Turn_off_AUX_V1.0.5"
    }
  ],
  "M221": [
    {
      "brief": "",
      "codes": [
        "M221"
      ],
      "id": "Klipper.M221[0]",
      "parameters": [
        {
          "description": "",
          "label": "S<Spercent>",
          "optional": false,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Set the flow percentage, which applies to all E moves.",
      "codes": [
        "M221"
      ],
      "id": "Marlin.M221[0]",
      "parameters": [
        {
          "description": "Feedrate percentage",
          "label": "S<percent>",
          "optional": false,
          "tag": "S",
          "values": [
            {
              "tag": "percent",
              "type": "int"
            }
          ]
        },
        {
          "description": "Target extruder (requires multi-extruder). Default is the active extruder.",
          "label": "[T<index>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Flow Percentage",
      "url": "https://marlinfw.org/docs/gcode/M221"
    },
    {
      "brief": "",
      "codes": [
        "M221"
      ],
      "id": "RepRap.M221[0]",
      "parameters": [
        {
          "description": " Extrude factor override percentage (0..100 or higher), default 100%",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Extruder drive number (RepRapFirmware only), default 0",
          "label": "Dnnn",
          "optional": true,
          "tag": "D",
          "values": []
        },
        {
          "description": " Extruder drive number (Prusa Firmware only), default 0 if not set.",
          "label": "Tnnn",
          "optional": true,
          "tag": "T",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M221: Set extrude factor override percentage",
      "url": "https://reprap.org/wiki/G-code#M221:_Set_extrude_factor_override_percentage"
    },
    {
      "brief": "",
      "codes": [
        "M221"
      ],
      "id": "RepRap.M221[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M221: Turn on AUX V1.0.5",
      "url": "https://reprap.org/wiki/G-code#M221:_Turn_on_AUX_V1.0.5"
    }
  ],
  "M222": [
    {
      "brief": "",
      "codes": [
        "M222"
      ],
      "id": "RepRap.M222[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M222: Set speed of fast XY moves",
      "url": "https://reprap.org/wiki/G-code#M222:_Set_speed_of_fast_XY_moves"
    }
  ],
  "M223": [
    {
      "brief": "",
      "codes": [
        "M223"
      ],
      "id": "RepRap.M223[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M223: Set speed of fast Z moves",
      "url": "https://reprap.org/wiki/G-code#M223:_Set_speed_of_fast_Z_moves"
    }
  ],
  "M224": [
    {
      "brief": "",
      "codes": [
        "M224"
      ],
      "id": "RepRap.M224[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M224: Enable extruder during fast moves",
      "url": "https://reprap.org/wiki/G-code#M224:_Enable_extruder_during_fast_moves"
    }
  ],
  "M225": [
    {
      "brief": "",
      "codes": [
        "M225"
      ],
      "id": "RepRap.M225[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M225: Disable on extruder during fast moves",
      "url": "https://reprap.org/wiki/G-code#M225:_Disable_on_extruder_during_fast_moves"
    }
  ],
  "M226": [
    {
      "brief": "Wait for a pin to have a given state.",
      "codes": [
        "M226"
      ],
      "id": "Marlin.M226[0]",
      "parameters": [
        {
          "description": "Pin number",
          "label": "P<pin>",
          "optional": false,
          "tag": "P",
          "values": [
            {
              "tag": "pin",
              "type": "byte"
            }
          ]
        },
        {
          "description": "State 0 or 1. Default -1 for inverted.",
          "label": "[S<state>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "state",
              "type": "byte"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Wait for Pin State",
      "url": "https://marlinfw.org/docs/gcode/M226"
    },
    {
      "brief": "",
      "codes": [
        "M226"
      ],
      "id": "RepRap.M226[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M226: G-code Initiated Pause",
      "url": "https://reprap.org/wiki/G-code#M226:_G-code_Initiated_Pause"
    },
    {
      "brief": "",
      "codes": [
        "M226"
      ],
      "id": "RepRap.M226[1]",
      "parameters": [
        {
          "description": " pin number",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " pin state",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M226: Wait for pin state",
      "url": "https://reprap.org/wiki/G-code#M226:_Wait_for_pin_state"
    }
  ],
  "M227": [
    {
      "brief": "",
      "codes": [
        "M227"
      ],
      "id": "RepRap.M227[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M227: Enable Automatic Reverse and Prime",
      "url": "https://reprap.org/wiki/G-code#M227:_Enable_Automatic_Reverse_and_Prime"
    }
  ],
  "M228": [
    {
      "brief": "",
      "codes": [
        "M228"
      ],
      "id": "RepRap.M228[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M228: Disable Automatic Reverse and Prime",
      "url": "https://reprap.org/wiki/G-code#M228:_Disable_Automatic_Reverse_and_Prime"
    }
  ],
  "M229": [
    {
      "brief": "",
      "codes": [
        "M229"
      ],
      "id": "RepRap.M229[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M229: Enable Automatic Reverse and Prime",
      "url": "https://reprap.org/wiki/G-code#M229:_Enable_Automatic_Reverse_and_Prime"
    }
  ],
  "M23": [
    {
      "brief": "",
      "codes": [
        "M23"
      ],
      "id": "Klipper.M23[0]",
      "parameters": [
        {
          "description": "",
          "label": "<filename>",
          "optional": false,
          "tag": "filename",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-sd-card-commands"
    },
    {
      "brief": "Select an SD file to be executed",
      "codes": [
        "M23"
      ],
      "id": "Marlin.M23[0]",
      "parameters": [
        {
          "description": "The filename of the file to open.",
          "label": "filename",
          "optional": false,
          "tag": "filename"
        }
      ],
      "related": [
        "M24"
      ],
      "source": "Marlin",
      "title": "Select SD file",
      "url": "https://marlinfw.org/docs/gcode/M023"
    },
    {
      "brief": "",
      "codes": [
        "M23"
      ],
      "id": "RepRap.M23[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M23: Select SD file",
      "url": "https://reprap.org/wiki/G-code#M23:_Select_SD_file"
    }
  ],
  "M230": [
    {
      "brief": "",
      "codes": [
        "M230"
      ],
      "id": "RepRap.M230[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M230: Disable / Enable Wait for Temperature Change",
      "url": "https://reprap.org/wiki/G-code#M230:_Disable_.2F_Enable_Wait_for_Temperature_Change"
    }
  ],
  "M231": [
    {
      "brief": " M231 S[OPS_MODE] X[Min_Distance] Y[Retract] Z[Backslash] F[RetractMove]",
      "codes": [
        "M231"
      ],
      "id": "RepRap.M231[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M231: Set OPS parameter",
      "url": "https://reprap.org/wiki/G-code#M231:_Set_OPS_parameter"
    }
  ],
  "M232": [
    {
      "brief": "",
      "codes": [
        "M232"
      ],
      "id": "RepRap.M232[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M232: Read and reset max. advance values",
      "url": "https://reprap.org/wiki/G-code#M232:_Read_and_reset_max._advance_values"
    }
  ],
  "M24": [
    {
      "brief": "",
      "codes": [
        "M24"
      ],
      "id": "Klipper.M24[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-sd-card-commands"
    },
    {
      "brief": "Start or resume a file selected with [`M23`](/docs/gcode/M023.html)",
      "codes": [
        "M24"
      ],
      "id": "Marlin.M24[0]",
      "parameters": [
        {
          "description": "Position in file to resume from (requires `POWER_LOSS_RECOVERY`)",
          "label": "[S<pos>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "pos",
              "type": "long"
            }
          ]
        },
        {
          "description": "Elapsed time since start of print (requires `POWER_LOSS_RECOVERY`)",
          "label": "[T<time>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "time",
              "type": "long"
            }
          ]
        }
      ],
      "related": [
        "M23"
      ],
      "source": "Marlin",
      "title": "Start or Resume SD print",
      "url": "https://marlinfw.org/docs/gcode/M024"
    },
    {
      "brief": "",
      "codes": [
        "M24"
      ],
      "id": "RepRap.M24[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M24: Start/resume SD print",
      "url": "https://reprap.org/wiki/G-code#M24:_Start.2Fresume_SD_print"
    }
  ],
  "M240": [
    {
      "brief": "Trigger a camera shutter",
      "codes": [
        "M240"
      ],
      "id": "Marlin.M240[0]",
      "parameters": [
        {
          "description": "Offset to the X return position. (Requires `PHOTO_POSITION`)",
          "label": "[A<offset>]",
          "optional": true,
          "tag": "A",
          "values": [
            {
              "tag": "offset",
              "type": "float"
            }
          ]
        },
        {
          "description": "Offset to the Y return position. (Requires `PHOTO_POSITION`)",
          "label": "[B<offset>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "offset",
              "type": "float"
            }
          ]
        },
        {
          "description": "Duration to hold down the shutter switch. (Requires `PHOTO_SWITCH_POSITION` and `PHOTO_SWITCH_MS`)",
          "label": "[D<ms>]",
          "optional": true,
          "tag": "D",
          "values": [
            {
              "tag": "ms",
              "type": "int"
            }
          ]
        },
        {
          "description": "Feedrate for the main photo moves. If omitted, the homing feedrate will be used. (Requires `PHOTO_POSITION`)",
          "label": "[F<feedrate>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "feedrate",
              "type": "float"
            }
          ]
        },
        {
          "description": "Shutter switch X position. If omitted, the photo move X position applies. (Requires `PHOTO_SWITCH_POSITION`)",
          "label": "[I<pos>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Shutter switch Y position. If omitted, the photo move Y position applies. (Requires `PHOTO_SWITCH_POSITION`)",
          "label": "[J<pos>]",
          "optional": true,
          "tag": "J",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Delay after pressing the shutter switch. (Requires `PHOTO_SWITCH_POSITION` and `PHOTO_SWITCH_MS`)",
          "label": "[P<ms>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "ms",
              "type": "int"
            }
          ]
        },
        {
          "description": "Retract/recover length. (Requires `PHOTO_POSITION`)",
          "label": "[R<length>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "length",
              "type": "float"
            }
          ]
        },
        {
          "description": "Retract/recover feedrate. (Requires `PHOTO_POSITION`)",
          "label": "[S<feedrate>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "feedrate",
              "type": "float"
            }
          ]
        },
        {
          "description": "Main photo move X position. (Requires `PHOTO_POSITION`)",
          "label": "[X<pos>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Main photo move Y position. (Requires `PHOTO_POSITION`)",
          "label": "[Y<pos>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Main photo move Z raise. (Requires `PHOTO_POSITION`)",
          "label": "[Z<length>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "length",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Trigger Camera",
      "url": "https://marlinfw.org/docs/gcode/M240"
    },
    {
      "brief": "",
      "codes": [
        "M240"
      ],
      "id": "RepRap.M240[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M240: Trigger camera",
      "url": "https://reprap.org/wiki/G-code#M240:_Trigger_camera"
    },
    {
      "brief": "",
      "codes": [
        "M240"
      ],
      "id": "RepRap.M240[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M240: Start conveyor belt motor / Echo off",
      "url": "https://reprap.org/wiki/G-code#M240:_Start_conveyor_belt_motor_.2F_Echo_off"
    }
  ],
  "M241": [
    {
      "brief": "",
      "codes": [
        "M241"
      ],
      "id": "RepRap.M241[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M241: Stop conveyor belt motor / echo on",
      "url": "https://reprap.org/wiki/G-code#M241:_Stop_conveyor_belt_motor_.2F_echo_on"
    }
  ],
  "M245": [
    {
      "brief": "",
      "codes": [
        "M245"
      ],
      "id": "RepRap.M245[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M245: Start cooler",
      "url": "https://reprap.org/wiki/G-code#M245:_Start_cooler"
    }
  ],
  "M246": [
    {
      "brief": "",
      "codes": [
        "M246"
      ],
      "id": "RepRap.M246[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M246: Stop cooler",
      "url": "https://reprap.org/wiki/G-code#M246:_Stop_cooler"
    }
  ],
  "M25": [
    {
      "brief": "",
      "codes": [
        "M25"
      ],
      "id": "Klipper.M25[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-sd-card-commands"
    },
    {
      "brief": "Pause printing from the SD card",
      "codes": [
        "M25"
      ],
      "id": "Marlin.M25[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Pause SD print",
      "url": "https://marlinfw.org/docs/gcode/M025"
    },
    {
      "brief": "",
      "codes": [
        "M25"
      ],
      "id": "RepRap.M25[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M25: Pause SD print",
      "url": "https://reprap.org/wiki/G-code#M25:_Pause_SD_print"
    }
  ],
  "M250": [
    {
      "brief": "Set and/or get the LCD contrast.",
      "codes": [
        "M250"
      ],
      "id": "Marlin.M250[0]",
      "parameters": [
        {
          "description": "Contrast value",
          "label": "[C<contrast>]",
          "optional": true,
          "tag": "C",
          "values": [
            {
              "tag": "contrast",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "LCD Contrast",
      "url": "https://marlinfw.org/docs/gcode/M250"
    },
    {
      "brief": "",
      "codes": [
        "M250"
      ],
      "id": "RepRap.M250[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M250: Set LCD contrast",
      "url": "https://reprap.org/wiki/G-code#M250:_Set_LCD_contrast"
    }
  ],
  "M251": [
    {
      "brief": "",
      "codes": [
        "M251"
      ],
      "id": "RepRap.M251[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M251: Measure Z steps from homing stop (Delta printers)",
      "url": "https://reprap.org/wiki/G-code#M251:_Measure_Z_steps_from_homing_stop_.28Delta_printers.29"
    }
  ],
  "M256": [
    {
      "brief": "Set and/or get the LCD brightness.",
      "codes": [
        "M256"
      ],
      "id": "Marlin.M256[0]",
      "parameters": [
        {
          "description": "Brightness value (0 - 255)",
          "label": "[B<brightness>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "brightness",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "LCD Brightness",
      "url": "https://marlinfw.org/docs/gcode/M256"
    },
    {
      "brief": "",
      "codes": [
        "M256"
      ],
      "id": "RepRap.M256[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M256: Set LCD brightness",
      "url": "https://reprap.org/wiki/G-code#M256:_Set_LCD_brightness"
    }
  ],
  "M26": [
    {
      "brief": "",
      "codes": [
        "M26"
      ],
      "id": "Klipper.M26[0]",
      "parameters": [
        {
          "description": "",
          "label": "S<Soffset>",
          "optional": false,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-sd-card-commands"
    },
    {
      "brief": "Set the SD read position",
      "codes": [
        "M26"
      ],
      "id": "Marlin.M26[0]",
      "parameters": [
        {
          "description": "Next file read position to set",
          "label": "[S<pos>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "pos",
              "type": "long"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set SD position",
      "url": "https://marlinfw.org/docs/gcode/M026"
    },
    {
      "brief": "",
      "codes": [
        "M26"
      ],
      "id": "RepRap.M26[0]",
      "parameters": [
        {
          "description": " File position from start of file in bytes",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " (Optional, RepRapFirmware only) Proportion of the first move to be skipped, default 0.0, must be less than 1.0",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M26: Set SD position",
      "url": "https://reprap.org/wiki/G-code#M26:_Set_SD_position"
    }
  ],
  "M260": [
    {
      "brief": "Send data to the I2C bus.",
      "codes": [
        "M260"
      ],
      "id": "Marlin.M260[0]",
      "parameters": [
        {
          "description": "The bus address to send to",
          "label": "[A<addr>]",
          "optional": true,
          "tag": "A",
          "values": [
            {
              "tag": "addr",
              "type": "byte"
            }
          ]
        },
        {
          "description": "The byte to add to the buffer",
          "label": "[B<byte>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "byte",
              "type": "byte"
            }
          ]
        },
        {
          "description": "Reset and rewind the I2C buffer",
          "label": "[R<flag>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "Send flag. Flush the buffer to the bus.",
          "label": "[S<flag>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "I2C Send",
      "url": "https://marlinfw.org/docs/gcode/M260"
    },
    {
      "brief": "Buffer and send data over the i2c bus. Use A to set the address from 0-127. Add up to 32 bytes to the buffer with each B. Send and reset the buffer with S.",
      "codes": [
        "M260"
      ],
      "id": "RepRap.M260[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M260: i2c Send Data",
      "url": "https://reprap.org/wiki/G-code#M260:_i2c_Send_Data"
    }
  ],
  "M261": [
    {
      "brief": "Request and echo bytes from the I2C bus.",
      "codes": [
        "M261"
      ],
      "id": "Marlin.M261[0]",
      "parameters": [
        {
          "description": "The bus address to request bytes from",
          "label": "A<addr>",
          "optional": false,
          "tag": "A",
          "values": [
            {
              "tag": "addr",
              "type": "byte"
            }
          ]
        },
        {
          "description": "The number of bytes to request",
          "label": "B<count>",
          "optional": false,
          "tag": "B",
          "values": [
            {
              "tag": "count",
              "type": "byte"
            }
          ]
        },
        {
          "description": "Output style. Default is 0 (raw echo) if nothing else is given.",
          "label": "[S<0|1|2|3>]",
          "optional": true,
          "since": "2.0.9.3",
          "tag": "S",
          "values": [
            {
              "description": "Raw echo",
              "tag": 0,
              "type": "style"
            },
            {
              "description": "Bytes (hex)",
              "tag": 1,
              "type": "style"
            },
            {
              "description": "1 or 2 byte value (decimal)",
              "tag": 2,
              "type": "style"
            },
            {
              "description": "Bytes (decimal)",
              "tag": 3,
              "type": "style"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "I2C Request",
      "url": "https://marlinfw.org/docs/gcode/M261"
    },
    {
      "brief": "Request data (synchronously) from an i2c slave device. This command in basic form simply relays the received data to the host.",
      "codes": [
        "M261"
      ],
      "id": "RepRap.M261[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M261: i2c Request Data",
      "url": "https://reprap.org/wiki/G-code#M261:_i2c_Request_Data"
    }
  ],
  "M27": [
    {
      "brief": "",
      "codes": [
        "M27"
      ],
      "id": "Klipper.M27[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-sd-card-commands"
    },
    {
      "brief": "Print SD progress to serial",
      "codes": [
        "M27"
      ],
      "id": "Marlin.M27[0]",
      "parameters": [
        {
          "description": "Interval between auto-reports. `S0` to disable  (requires `AUTO_REPORT_SD_STATUS`)",
          "label": "[S<seconds>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "seconds",
              "type": "int"
            }
          ]
        },
        {
          "description": "Report the filename and long filename of the current file",
          "label": "[C]",
          "optional": true,
          "tag": "C"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Report SD print status",
      "url": "https://marlinfw.org/docs/gcode/M027"
    },
    {
      "brief": "",
      "codes": [
        "M27"
      ],
      "id": "RepRap.M27[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M27: Report SD print status",
      "url": "https://reprap.org/wiki/G-code#M27:_Report_SD_print_status"
    }
  ],
  "M28": [
    {
      "brief": "Start writing to a file on the SD card",
      "codes": [
        "M28"
      ],
      "id": "Marlin.M28[0]",
      "parameters": [
        {
          "description": "File name to write",
          "label": "filename",
          "optional": false,
          "tag": "filename"
        },
        {
          "description": "Set an optimized binary file transfer mode. (Requires `BINARY_FILE_TRANSFER`)",
          "label": "[B1]",
          "optional": true,
          "tag": "B1"
        }
      ],
      "related": [
        "M29",
        "M928"
      ],
      "source": "Marlin",
      "title": "Start SD write",
      "url": "https://marlinfw.org/docs/gcode/M028"
    },
    {
      "brief": "",
      "codes": [
        "M28"
      ],
      "id": "RepRap.M28[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M28: Begin write to SD card",
      "url": "https://reprap.org/wiki/G-code#M28:_Begin_write_to_SD_card"
    }
  ],
  "M280": [
    {
      "brief": "Set or get a servo position.",
      "codes": [
        "M280"
      ],
      "id": "Marlin.M280[0]",
      "parameters": [
        {
          "description": "Servo index to set or get",
          "label": "P<index>",
          "optional": false,
          "tag": "P",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Servo position to set. Omit to read the current position.",
          "label": "S<pos>",
          "optional": false,
          "tag": "S",
          "values": [
            {
              "tag": "pos",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Servo Position",
      "url": "https://marlinfw.org/docs/gcode/M280"
    },
    {
      "brief": "Set servo position absolute.",
      "codes": [
        "M280"
      ],
      "id": "RepRap.M280[0]",
      "parameters": [
        {
          "description": " Servo index",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Angle or microseconds",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Invert polarity (RepRapFirmware only)",
          "label": "I1",
          "optional": true,
          "tag": "I",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M280: Set servo position",
      "url": "https://reprap.org/wiki/G-code#M280:_Set_servo_position"
    }
  ],
  "M281": [
    {
      "brief": "Set servo deploy and/or stow angles",
      "codes": [
        "M281"
      ],
      "id": "Marlin.M281[0]",
      "parameters": [
        {
          "description": "Servo index to update / report.",
          "label": "P<index>",
          "optional": false,
          "tag": "P",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Deploy angle in degrees.",
          "label": "[L<degrees>]",
          "optional": true,
          "tag": "L",
          "values": [
            {
              "tag": "degrees",
              "type": "int"
            }
          ]
        },
        {
          "description": "Stow angle in degrees.",
          "label": "[U<degrees>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "tag": "degrees",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Edit Servo Angles",
      "url": "https://marlinfw.org/docs/gcode/M281"
    },
    {
      "brief": "Set the angles for a servo's deployed (or selected) and stowed (or unselected) states. To activate this command in Marlin enable the EDITABLE_SERVO_ANGLES option.",
      "codes": [
        "M281"
      ],
      "id": "RepRap.M281[0]",
      "parameters": [
        {
          "description": " - Servo Index",
          "label": "P[index]",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " - Deployed / Selected Angle",
          "label": "L[angle]",
          "optional": true,
          "tag": "L",
          "values": []
        },
        {
          "description": " - Stowed / Unselected Angle",
          "label": "U[angle]",
          "optional": true,
          "tag": "U",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M281: Set Servo Angles",
      "url": "https://reprap.org/wiki/G-code#M281:_Set_Servo_Angles"
    }
  ],
  "M282": [
    {
      "brief": "Detach a servo until its next move",
      "codes": [
        "M282"
      ],
      "id": "Marlin.M282[0]",
      "parameters": [
        {
          "description": "Index of the servo to detach.",
          "label": "P<index>",
          "optional": false,
          "tag": "P",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Detach Servo",
      "url": "https://marlinfw.org/docs/gcode/M282"
    },
    {
      "brief": "Detach servo. This disables the servo until its next move. To activate this command in Marlin enable the SERVO_DETACH_GCODE option.",
      "codes": [
        "M282"
      ],
      "id": "RepRap.M282[0]",
      "parameters": [
        {
          "description": " Servo index",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M282: Detach Servo",
      "url": "https://reprap.org/wiki/G-code#M282:_Detach_Servo"
    }
  ],
  "M29": [
    {
      "brief": "Stop writing the file, end logging.",
      "codes": [
        "M29"
      ],
      "id": "Marlin.M29[0]",
      "parameters": [],
      "related": [
        "M28",
        "M928"
      ],
      "source": "Marlin",
      "title": "Stop SD write",
      "url": "https://marlinfw.org/docs/gcode/M029"
    },
    {
      "brief": "",
      "codes": [
        "M29"
      ],
      "id": "RepRap.M29[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M29: Stop writing to SD card",
      "url": "https://reprap.org/wiki/G-code#M29:_Stop_writing_to_SD_card"
    }
  ],
  "M290": [
    {
      "brief": "Babystep one or more axes",
      "codes": [
        "M290"
      ],
      "id": "Marlin.M290[0]",
      "parameters": [
        {
          "description": "A distance on the X axis",
          "label": "[X<pos>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "A distance on the Y axis",
          "label": "[Y<pos>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "A distance on the Z axis",
          "label": "[Z<pos>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Alias for Z",
          "label": "[S<pos>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Use `P0` to leave the Probe Z Offset unaffected. (Requires `BABYSTEP_ZPROBE_OFFSET`)",
          "label": "[P<bool>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Babystep",
      "url": "https://marlinfw.org/docs/gcode/M290"
    },
    {
      "brief": "",
      "codes": [
        "M290"
      ],
      "id": "RepRap.M290[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M290: Babystepping",
      "url": "https://reprap.org/wiki/G-code#M290:_Babystepping"
    }
  ],
  "M291": [
    {
      "brief": "",
      "codes": [
        "M291"
      ],
      "id": "RepRap.M291[0]",
      "parameters": [
        {
          "description": " The message to display, which must be enclosed in double quotation marks. If the message itself contains a double quotation mark, use two double quotation marks to represent it.",
          "label": "P\"message\"",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Optional title for the message box. Must be enclosed in double quotation marks too.",
          "label": "R\"message\"",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " Message box mode (defaults to 1)",
          "label": "Sn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Timeout in seconds, only legal for S=0 and S=1. The message will be cancelled after this amount of time, if the user does not cancel it before then. A zero or negative value means that the message does not time out (it may still be cancelled by the user if it has a Close button). In RepRapFirmware, the default timeout for messages that do not require acknowledgement is 10 seconds.",
          "label": "Tn",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " 0 = no special action, 1 = display Z jog buttons alongside the message to allow the user to adjust the height of the print head",
          "label": "Zn",
          "optional": true,
          "tag": "Z",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M291: Display message and optionally wait for response",
      "url": "https://reprap.org/wiki/G-code#M291:_Display_message_and_optionally_wait_for_response"
    }
  ],
  "M292": [
    {
      "brief": "",
      "codes": [
        "M292"
      ],
      "id": "RepRap.M292[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M292: Acknowledge message",
      "url": "https://reprap.org/wiki/G-code#M292:_Acknowledge_message"
    }
  ],
  "M3": [
    {
      "brief": "Set the spindle CW speed or laser power",
      "codes": [
        "M3"
      ],
      "id": "Marlin.M3[0]",
      "parameters": [
        {
          "description": "Spindle speed or laser power in the configured value range (see `CUTTER_POWER_DISPLAY`). (PWM 0-255 by default)",
          "label": "[S<power>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "power",
              "type": "byte"
            }
          ]
        },
        {
          "description": "Spindle speed or laser power in PWM 0-255 value range",
          "label": "[O<power>]",
          "optional": true,
          "tag": "O",
          "values": [
            {
              "tag": "power",
              "type": "byte"
            }
          ]
        },
        {
          "description": "Inline mode ON / OFF.",
          "label": "[I<mode>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "mode",
              "type": "bool"
            }
          ]
        }
      ],
      "related": [
        "M4",
        "M5"
      ],
      "source": "Marlin",
      "title": "Spindle CW / Laser On",
      "url": "https://marlinfw.org/docs/gcode/M003"
    },
    {
      "brief": "",
      "codes": [
        "M3"
      ],
      "id": "RepRap.M3[0]",
      "parameters": [
        {
          "description": " Spindle RPM",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M3: Spindle On, Clockwise  (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#M3:_Spindle_On.2C_Clockwise__.28CNC_specific.29"
    }
  ],
  "M30": [
    {
      "brief": "Delete a specified file from SD.",
      "codes": [
        "M30"
      ],
      "id": "Marlin.M30[0]",
      "parameters": [
        {
          "description": "The filename of the file to delete.",
          "label": "filename",
          "optional": false,
          "tag": "filename"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Delete SD file",
      "url": "https://marlinfw.org/docs/gcode/M030"
    },
    {
      "brief": "",
      "codes": [
        "M30"
      ],
      "id": "RepRap.M30[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M30: Delete a file on the SD card",
      "url": "https://reprap.org/wiki/G-code#M30:_Delete_a_file_on_the_SD_card"
    },
    {
      "brief": "- For Yaskawa and in grbl  \n- Same as M2 in Yaskawa G-code",
      "codes": [
        "M30"
      ],
      "id": "RepRap.M30[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M30:  Program Stop",
      "url": "https://reprap.org/wiki/G-code#M30:__Program_Stop"
    }
  ],
  "M300": [
    {
      "brief": "Play a single tone, buzz, or beep.",
      "codes": [
        "M300"
      ],
      "id": "Marlin.M300[0]",
      "parameters": [
        {
          "description": "Duration (1ms)",
          "label": "[P<ms>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "ms",
              "type": "int"
            }
          ]
        },
        {
          "description": "Frequency (260Hz)",
          "label": "[S<Hz>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "Hz",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Play Tone",
      "url": "https://marlinfw.org/docs/gcode/M300"
    },
    {
      "brief": "",
      "codes": [
        "M300"
      ],
      "id": "RepRap.M300[0]",
      "parameters": [
        {
          "description": " frequency in Hz",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " duration in milliseconds",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " volume in rage 0 - 1",
          "label": "Vnnn",
          "optional": true,
          "tag": "V",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M300: Play beep sound",
      "url": "https://reprap.org/wiki/G-code#M300:_Play_beep_sound"
    }
  ],
  "M301": [
    {
      "brief": "Set PID values for a hotend.",
      "codes": [
        "M301"
      ],
      "id": "Marlin.M301[0]",
      "parameters": [
        {
          "description": "Extruder index to set. Default 0.",
          "label": "[E<index>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Proportional value",
          "label": "[P<value>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "value",
              "type": "float"
            }
          ]
        },
        {
          "description": "Integral value",
          "label": "[I<value>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "value",
              "type": "float"
            }
          ]
        },
        {
          "description": "Derivative value",
          "label": "[D<value>]",
          "optional": true,
          "tag": "D",
          "values": [
            {
              "tag": "value",
              "type": "float"
            }
          ]
        },
        {
          "description": "C term (requires `PID_EXTRUSION_SCALING`)",
          "label": "[C<value>]",
          "optional": true,
          "tag": "C",
          "values": [
            {
              "tag": "value",
              "type": "float"
            }
          ]
        },
        {
          "description": "Extrusion scaling queue length (requires `PID_EXTRUSION_SCALING`)",
          "label": "[L<value>]",
          "optional": true,
          "tag": "L",
          "values": [
            {
              "tag": "value",
              "type": "float"
            }
          ]
        },
        {
          "description": "F term (requires `PID_FAN_SCALING`)",
          "label": "[F<value>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "value",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Hotend PID",
      "url": "https://marlinfw.org/docs/gcode/M301"
    },
    {
      "brief": "",
      "codes": [
        "M301"
      ],
      "id": "RepRap.M301[0]",
      "parameters": [
        {
          "description": " heater number (Smoothie uses 'S', Redeem uses 'E')",
          "label": "Hnnn",
          "optional": true,
          "tag": "H",
          "values": []
        },
        {
          "description": " proportional (Kp)",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " integral (Ki)",
          "label": "Innn",
          "optional": true,
          "tag": "I",
          "values": []
        },
        {
          "description": " derivative (Kd)",
          "label": "Dnnn",
          "optional": true,
          "tag": "D",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M301: Set PID parameters",
      "url": "https://reprap.org/wiki/G-code#M301:_Set_PID_parameters"
    }
  ],
  "M302": [
    {
      "brief": "Set minimum extrusion temperature, allow cold extrusion.",
      "codes": [
        "M302"
      ],
      "id": "Marlin.M302[0]",
      "parameters": [
        {
          "description": "Minimum temperature for safe extrusion",
          "label": "[S<temp>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "temp",
              "type": "float"
            }
          ]
        },
        {
          "description": "Flag to allow extrusion at any temperature",
          "label": "[P<flag>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Cold Extrude",
      "url": "https://marlinfw.org/docs/gcode/M302"
    },
    {
      "brief": "",
      "codes": [
        "M302"
      ],
      "id": "RepRap.M302[0]",
      "parameters": [
        {
          "description": " Cold extrude minimum temperature (also in RepRapFirmware 2.02 and later)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Cold extrude allow state (RepRapFirmware)",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Cold retraction minimum temperature (RepRapFirmware 2.02 and later)",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M302: Allow cold extrudes",
      "url": "https://reprap.org/wiki/G-code#M302:_Allow_cold_extrudes"
    }
  ],
  "M303": [
    {
      "brief": "Auto-tune the PID system to find stable values.",
      "codes": [
        "M303"
      ],
      "id": "Marlin.M303[0]",
      "parameters": [
        {
          "description": "Cycles. At least 3 cycles are required. Default 5.",
          "label": "C<count>",
          "optional": false,
          "tag": "C",
          "values": [
            {
              "tag": "count",
              "type": "int"
            }
          ]
        },
        {
          "description": "Target temperature",
          "label": "S<temp>",
          "optional": false,
          "tag": "S",
          "values": [
            {
              "tag": "temp",
              "type": "float"
            }
          ]
        },
        {
          "description": "Use PID result. (Otherwise just print it out.)",
          "label": "U<flag>",
          "optional": false,
          "tag": "U",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "Toggle activation of `PID_DEBUG` output.",
          "label": "D<flag>",
          "optional": false,
          "tag": "D",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "Toggle PID debug output on / off (and take no further action). (Requires `PID_DEBUG`)",
          "label": "D<action>",
          "optional": false,
          "tag": "D",
          "values": [
            {
              "tag": "action"
            }
          ]
        },
        {
          "description": "Hotend index (-1 for heated bed). Default 0.",
          "label": "[E<index>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "PID autotune",
      "url": "https://marlinfw.org/docs/gcode/M303"
    },
    {
      "brief": "PID Tuning refers to a control algorithm used in some repraps to tune heating behavior for hot ends and heated beds. This command generates Proportional (Kp), Integral (Ki), and Derivative (Kd) values for the hotend or bed (E-1). Send the appropriate code and wait for the output to update the firmware.\nHot end usage:\n M303 S<temperature> C<cycles>\nBed usage (repetier, not sure whether cycles work here):\n M303 P1 S<temperature>\nBed usage (others):\n M303 E-1 C<cycles> S<temperature>",
      "codes": [
        "M303"
      ],
      "id": "RepRap.M303[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M303: Run PID tuning",
      "url": "https://reprap.org/wiki/G-code#M303:_Run_PID_tuning"
    }
  ],
  "M304": [
    {
      "brief": "Set PID values for the heated bed.",
      "codes": [
        "M304"
      ],
      "id": "Marlin.M304[0]",
      "parameters": [
        {
          "description": "Proportional value",
          "label": "[P<value>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "value",
              "type": "float"
            }
          ]
        },
        {
          "description": "Integral value",
          "label": "[I<value>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "value",
              "type": "float"
            }
          ]
        },
        {
          "description": "Derivative value",
          "label": "[D<value>]",
          "optional": true,
          "tag": "D",
          "values": [
            {
              "tag": "value",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Bed PID",
      "url": "https://marlinfw.org/docs/gcode/M304"
    },
    {
      "brief": "",
      "codes": [
        "M304"
      ],
      "id": "RepRap.M304[0]",
      "parameters": [
        {
          "description": " proportional (Kp)",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " integral (Ki)",
          "label": "Innn",
          "optional": true,
          "tag": "I",
          "values": []
        },
        {
          "description": " derivative (Kd)",
          "label": "Dnnn",
          "optional": true,
          "tag": "D",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M304: Set PID parameters - Bed",
      "url": "https://reprap.org/wiki/G-code#M304:_Set_PID_parameters_-_Bed"
    }
  ],
  "M304 in RepRapPro version of Marlin": [
    {
      "brief": "In the RepRapPro version of Marlin ( https://github.com/reprappro/Marlin ) M304 is used to set thermistor values (as M305 is in later firmwares). RRP Marlin calculates temperatures on the fly, rather than using a temperature table. M304 Sets the parameters for temperature measurement.",
      "codes": [
        "M304 in RepRapPro version of Marlin"
      ],
      "id": "RepRap.M304 in RepRapPro version of Marlin[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M304 in RepRapPro version of Marlin: Set thermistor values",
      "url": "https://reprap.org/wiki/G-code#M304_in_RepRapPro_version_of_Marlin:_Set_thermistor_values"
    }
  ],
  "M305": [
    {
      "brief": "Set (or report) custom thermistor parameters",
      "codes": [
        "M305"
      ],
      "id": "Marlin.M305[0]",
      "parameters": [
        {
          "description": "Thermistor table index",
          "label": "[P<index>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Pullup resistor value",
          "label": "[R<ohm>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "ohm",
              "type": "int"
            }
          ]
        },
        {
          "description": "Resistance at 25C",
          "label": "[T<ohms>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "ohms",
              "type": "int"
            }
          ]
        },
        {
          "description": "Thermistor \"beta\" value",
          "label": "[B<beta>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "beta",
              "type": "int"
            }
          ]
        },
        {
          "description": "Steinhart-Hart Coefficient 'C'",
          "label": "[C<coeff>]",
          "optional": true,
          "tag": "C",
          "values": [
            {
              "tag": "coeff",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "User Thermistor Parameters",
      "url": "https://marlinfw.org/docs/gcode/M305"
    },
    {
      "brief": "",
      "codes": [
        "M305"
      ],
      "id": "RepRap.M305[0]",
      "parameters": [
        {
          "description": " Heater number, or virtual heater number",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Heater name (optional, RepRapFirmware only)",
          "label": "S\"name\"",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " (for thermistor sensors) Thermistor resistance at 25C",
          "label": "Tnnn",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " (for MAX31856-based thermocouple sensors) The thermistor type letter, default K",
          "label": "T\"c\"",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " Beta value, or the reciprocal of the Steinhart-Hart thermistor model B coefficient",
          "label": "Bnnn",
          "optional": true,
          "tag": "B",
          "values": []
        },
        {
          "description": " Steinhart-Hart C coefficient (MK4duo and RepRapFirmware 1.17 and later), default 0",
          "label": "Cnnn",
          "optional": true,
          "tag": "C",
          "values": []
        },
        {
          "description": " Series resistor value",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " ADC low offset correction, default 0",
          "label": "Lnnn",
          "optional": true,
          "tag": "L",
          "values": []
        },
        {
          "description": " ADC high offset correction, default 0",
          "label": "Hnnn",
          "optional": true,
          "tag": "H",
          "values": []
        },
        {
          "description": " Heater ADC channel, or thermocouple or PT100 or current loop adapter channel, defaults to the same value as the P parameter",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " (where nn is 50 or 60) If the sensor interface uses a MAX31856 thermocouple chip or MAX31865 PT100 chip, this is the local mains frequency. Readings will be timed to optimise rejection of interference at this frequency.",
          "label": "Fnn ",
          "optional": true,
          "tag": "F",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M305: Set thermistor and ADC parameters",
      "url": "https://reprap.org/wiki/G-code#M305:_Set_thermistor_and_ADC_parameters"
    }
  ],
  "M306": [
    {
      "brief": "",
      "codes": [
        "M306"
      ],
      "id": "RepRap.M306[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M306: Set home offset calculated from toolhead position",
      "url": "https://reprap.org/wiki/G-code#M306:_Set_home_offset_calculated_from_toolhead_position"
    }
  ],
  "M307": [
    {
      "brief": "",
      "codes": [
        "M307"
      ],
      "id": "RepRap.M307[0]",
      "parameters": [
        {
          "description": " Heater number (0 is usually the bed heater)",
          "label": "Hn",
          "optional": true,
          "tag": "H",
          "values": []
        },
        {
          "description": " gAin, expressed as ultimate temperature rise obtained in degC divided by the PWM fraction. For example, if G=180 then at 50% PWM the ultimate temperature rise would be 90C.",
          "label": "Annn",
          "optional": true,
          "tag": "A",
          "values": []
        },
        {
          "description": " dominant time Constant of the heating process in seconds",
          "label": "Cnnn",
          "optional": true,
          "tag": "C",
          "values": []
        },
        {
          "description": " Dead time in seconds",
          "label": "Dnnn",
          "optional": true,
          "tag": "D",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M307: Set or report heating process parameters",
      "url": "https://reprap.org/wiki/G-code#M307:_Set_or_report_heating_process_parameters"
    }
  ],
  "M308": [
    {
      "brief": "",
      "codes": [
        "M308"
      ],
      "id": "RepRap.M308[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M308: Set or report sensor parameters",
      "url": "https://reprap.org/wiki/G-code#M308:_Set_or_report_sensor_parameters"
    }
  ],
  "M309": [
    {
      "brief": "",
      "codes": [
        "M309"
      ],
      "id": "RepRap.M309[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M309: Set or report heater feedforward",
      "url": "https://reprap.org/wiki/G-code#M309:_Set_or_report_heater_feedforward"
    }
  ],
  "M31": [
    {
      "brief": "Report the current print time.",
      "codes": [
        "M31"
      ],
      "id": "Marlin.M31[0]",
      "parameters": [],
      "related": [
        "M75",
        "M76",
        "M77",
        "M78"
      ],
      "source": "Marlin",
      "title": "Print time",
      "url": "https://marlinfw.org/docs/gcode/M031"
    },
    {
      "brief": "",
      "codes": [
        "M31"
      ],
      "id": "RepRap.M31[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M31: Output time since last <code>M109</code> or SD card start to serial",
      "url": "https://reprap.org/wiki/G-code#M31:_Output_time_since_last_.3Ccode.3EM109.3C.2Fcode.3E_or_SD_card_start_to_serial"
    }
  ],
  "M32": [
    {
      "brief": "Begin an SD print from a file.",
      "codes": [
        "M32"
      ],
      "id": "Marlin.M32[0]",
      "parameters": [
        {
          "description": "Sub-Program flag",
          "label": "[P<flag>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "Starting file offset",
          "label": "[S<filepos>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "filepos",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Select and Start",
      "url": "https://marlinfw.org/docs/gcode/M032"
    },
    {
      "brief": "",
      "codes": [
        "M32"
      ],
      "id": "RepRap.M32[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M32: Select file and start SD print",
      "url": "https://reprap.org/wiki/G-code#M32:_Select_file_and_start_SD_print"
    }
  ],
  "M320": [
    {
      "brief": "",
      "codes": [
        "M320"
      ],
      "id": "RepRap.M320[0]",
      "parameters": [
        {
          "description": " if greater than 0, activate and store persistently in EEPROM",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M320: Activate autolevel (Repetier)",
      "url": "https://reprap.org/wiki/G-code#M320:_Activate_autolevel_.28Repetier.29"
    }
  ],
  "M321": [
    {
      "brief": "",
      "codes": [
        "M321"
      ],
      "id": "RepRap.M321[0]",
      "parameters": [
        {
          "description": " if greater than 0, deactivate and store persistently in EEPROM",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M321: Deactivate autolevel (Repetier)",
      "url": "https://reprap.org/wiki/G-code#M321:_Deactivate_autolevel_.28Repetier.29"
    }
  ],
  "M322": [
    {
      "brief": "",
      "codes": [
        "M322"
      ],
      "id": "RepRap.M322[0]",
      "parameters": [
        {
          "description": " if greater than 0, also reset the matrix values saved EEPROM",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M322: Reset autolevel matrix (Repetier)",
      "url": "https://reprap.org/wiki/G-code#M322:_Reset_autolevel_matrix_.28Repetier.29"
    }
  ],
  "M323": [
    {
      "brief": "",
      "codes": [
        "M323"
      ],
      "id": "RepRap.M323[0]",
      "parameters": [
        {
          "description": " 0 (disable correction) or 1 (enable correction)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " 1 (store correction state persistently in EEPROM)",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M323: Distortion correction on/off (Repetier)",
      "url": "https://reprap.org/wiki/G-code#M323:_Distortion_correction_on.2Foff_.28Repetier.29"
    }
  ],
  "M33": [
    {
      "brief": "Convert a short pathname to a long pathname.",
      "codes": [
        "M33"
      ],
      "id": "Marlin.M33[0]",
      "parameters": [
        {
          "description": "DOS 8.3 path to a file or folder",
          "label": "path",
          "optional": false,
          "tag": "path"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Get Long Path",
      "url": "https://marlinfw.org/docs/gcode/M033"
    },
    {
      "brief": "Get the long name for a file or folder on the SD card from a dos path. Introduced in Marlin firmware 1.1.0 September 2015.\nExample input:\n M33 miscel~1/armchair/armcha~1.gco\nExample output: \n /Miscellaneous/Armchair/Armchair.gcode",
      "codes": [
        "M33"
      ],
      "id": "RepRap.M33[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M33: Get the long name for an SD card file or folder",
      "url": "https://reprap.org/wiki/G-code#M33:_Get_the_long_name_for_an_SD_card_file_or_folder"
    },
    {
      "brief": "Stop the printing from SD and save all position in restart.gcode for restart printing in future",
      "codes": [
        "M33"
      ],
      "id": "RepRap.M33[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M33: Stop and Close File and save restart.gcode",
      "url": "https://reprap.org/wiki/G-code#M33:_Stop_and_Close_File_and_save_restart.gcode"
    }
  ],
  "M34": [
    {
      "brief": "Set SDCard file sorting options.",
      "codes": [
        "M34"
      ],
      "id": "Marlin.M34[0]",
      "parameters": [
        {
          "description": "Sorting on/off",
          "label": "[S<bool>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Folder Sorting",
          "label": "[F<-1|0|1>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "description": "Folders before files",
              "tag": -1
            },
            {
              "description": "No folder sorting",
              "tag": 0
            },
            {
              "description": "Folders after files",
              "tag": 1
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "SDCard Sorting",
      "url": "https://marlinfw.org/docs/gcode/M034"
    },
    {
      "brief": "Enable and disable SD card file-sorting, and/or set the folder sorting order. Proposed by Marlin firmware, May 2015.",
      "codes": [
        "M34"
      ],
      "id": "RepRap.M34[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M34: Set SD file sorting options",
      "url": "https://reprap.org/wiki/G-code#M34:_Set_SD_file_sorting_options"
    }
  ],
  "M340": [
    {
      "brief": "(Repetier only ,Marlin see M280)\nM340 P<servoId> S<pulseInUS>   / ServoID = 0..3  pulseInUs = 500..2500\nServos are controlled by a pulse width normally between 500 and 2500 with 1500ms in center position. 0 turns servo off.",
      "codes": [
        "M340"
      ],
      "id": "RepRap.M340[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M340: Control the servos",
      "url": "https://reprap.org/wiki/G-code#M340:_Control_the_servos"
    }
  ],
  "M35": [
    {
      "brief": "",
      "codes": [
        "M35"
      ],
      "id": "RepRap.M35[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M35: Upload firmware NEXTION from SD",
      "url": "https://reprap.org/wiki/G-code#M35:_Upload_firmware_NEXTION_from_SD"
    }
  ],
  "M350": [
    {
      "brief": "Set micro-stepping for drivers that support it",
      "codes": [
        "M350"
      ],
      "id": "Marlin.M350[0]",
      "parameters": [
        {
          "description": "Set micro-stepping for the 5th stepper driver.",
          "label": "[B<1|2|4|8|16>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": 1
            },
            {
              "tag": 2
            },
            {
              "tag": 4
            },
            {
              "tag": 8
            },
            {
              "tag": 16
            }
          ]
        },
        {
          "description": "Set micro-stepping for all 5 stepper drivers.",
          "label": "[S<1|2|4|8|16>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": 1
            },
            {
              "tag": 2
            },
            {
              "tag": 4
            },
            {
              "tag": 8
            },
            {
              "tag": 16
            }
          ]
        },
        {
          "description": "Set micro-stepping for the X stepper driver.",
          "label": "[X<1|2|4|8|16>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": 1
            },
            {
              "tag": 2
            },
            {
              "tag": 4
            },
            {
              "tag": 8
            },
            {
              "tag": 16
            }
          ]
        },
        {
          "description": "Set micro-stepping for the Y stepper driver.",
          "label": "[Y<1|2|4|8|16>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": 1
            },
            {
              "tag": 2
            },
            {
              "tag": 4
            },
            {
              "tag": 8
            },
            {
              "tag": 16
            }
          ]
        },
        {
          "description": "Set micro-stepping for the Z stepper driver.",
          "label": "[Z<1|2|4|8|16>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": 1
            },
            {
              "tag": 2
            },
            {
              "tag": 4
            },
            {
              "tag": 8
            },
            {
              "tag": 16
            }
          ]
        },
        {
          "description": "Set micro-stepping for the E0 stepper driver.",
          "label": "[E<1|2|4|8|16>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": 1
            },
            {
              "tag": 2
            },
            {
              "tag": 4
            },
            {
              "tag": 8
            },
            {
              "tag": 16
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set micro-stepping",
      "url": "https://marlinfw.org/docs/gcode/M350"
    },
    {
      "brief": "Sets microstepping mode.\nWarning: Steps per unit remains unchanged; except that in RepRapFirmware the steps/mm will be adjusted automatically.",
      "codes": [
        "M350"
      ],
      "id": "RepRap.M350[0]",
      "parameters": [
        {
          "description": " Set stepping mode for all drivers (not supported by RepRapFirmware)",
          "label": "Snn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Set stepping mode for the X axis",
          "label": "Xnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Set stepping mode for the Y axis",
          "label": "Ynn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Set stepping mode for the Z axis",
          "label": "Znn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " Set stepping mode for Extruder 0 (for RepRapFirmware use Enn:nn:nn etc. for multiple extruders)",
          "label": "Enn",
          "optional": true,
          "tag": "E",
          "values": []
        },
        {
          "description": " Set stepping mode for Extruder 1 (not supported by RepRapFirmware, see above)",
          "label": "Bnn",
          "optional": true,
          "tag": "B",
          "values": []
        },
        {
          "description": " Enable (nn=1) or disable (nn=0) microstep interpolation mode for the specified drivers, if they support it (RepRapFirmware only)",
          "label": "Inn",
          "optional": true,
          "tag": "I",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M350: Set microstepping mode",
      "url": "https://reprap.org/wiki/G-code#M350:_Set_microstepping_mode"
    }
  ],
  "M351": [
    {
      "brief": "Directly set the micro-stepping pins",
      "codes": [
        "M351"
      ],
      "id": "Marlin.M351[0]",
      "parameters": [
        {
          "description": "Select the pin to set for all specified axes.",
          "label": "S<1|2>",
          "optional": false,
          "tag": "S",
          "values": [
            {
              "description": "Select pin MS1 for all axes being set.",
              "tag": 1
            },
            {
              "description": "Select pin MS2 for all axes being set.",
              "tag": 2
            }
          ]
        },
        {
          "description": "Set the MS1/2 pin for the 5th stepper driver.",
          "label": "[B<0|1>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": 0
            },
            {
              "tag": 1
            }
          ]
        },
        {
          "description": "Set the MS1/2 pin for the X stepper driver.",
          "label": "[X<0|1>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": 0
            },
            {
              "tag": 1
            }
          ]
        },
        {
          "description": "Set the MS1/2 pin for the Y stepper driver.",
          "label": "[Y<0|1>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": 0
            },
            {
              "tag": 1
            }
          ]
        },
        {
          "description": "Set the MS1/2 pin for the Z stepper driver.",
          "label": "[Z<0|1>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": 0
            },
            {
              "tag": 1
            }
          ]
        },
        {
          "description": "Set the MS1/2 pin for the E stepper driver.",
          "label": "[E<0|1>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": 0
            },
            {
              "tag": 1
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Microstep Pins",
      "url": "https://marlinfw.org/docs/gcode/M351"
    },
    {
      "brief": "",
      "codes": [
        "M351"
      ],
      "id": "RepRap.M351[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M351: Toggle MS1 MS2 pins directly",
      "url": "https://reprap.org/wiki/G-code#M351:_Toggle_MS1_MS2_pins_directly"
    }
  ],
  "M355": [
    {
      "brief": "Turn the case light on or off, set brightness",
      "codes": [
        "M355"
      ],
      "id": "Marlin.M355[0]",
      "parameters": [
        {
          "description": "Set the brightness factor from 0 to 255.",
          "label": "[P<byte>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "type": "byte"
            }
          ]
        },
        {
          "description": "Turn the case light on or off.",
          "label": "[S<bool>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Case Light Control",
      "url": "https://marlinfw.org/docs/gcode/M355"
    },
    {
      "brief": "",
      "codes": [
        "M355"
      ],
      "id": "RepRap.M355[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M355: Turn case lights on/off",
      "url": "https://reprap.org/wiki/G-code#M355:_Turn_case_lights_on.2Foff"
    }
  ],
  "M36": [
    {
      "brief": "",
      "codes": [
        "M36"
      ],
      "id": "RepRap.M36[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M36: Return file information",
      "url": "https://reprap.org/wiki/G-code#M36:_Return_file_information"
    }
  ],
  "M36.1": [
    {
      "brief": "",
      "codes": [
        "M36.1"
      ],
      "id": "RepRap.M36.1[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M36.1: Return embedded thumbnail data",
      "url": "https://reprap.org/wiki/G-code#M36.1:_Return_embedded_thumbnail_data"
    }
  ],
  "M360": [
    {
      "brief": "Move to Theta A",
      "codes": [
        "M360"
      ],
      "id": "Marlin.M360[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "SCARA Theta A",
      "url": "https://marlinfw.org/docs/gcode/M360"
    },
    {
      "brief": "",
      "codes": [
        "M360"
      ],
      "id": "RepRap.M360[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M360: Report firmware configuration",
      "url": "https://reprap.org/wiki/G-code#M360:_Report_firmware_configuration"
    },
    {
      "brief": "The arms move into a position where the Theta steering arm is parallel to the top platform edge. The user then calibrates the position by moving the arms with the jog buttons in software like pronterface until it is perfectly parallel. Using M114 will then display the calibration offset that can then be programmed into the unit using M206 (Home offset) X represents Theta.\nSmoothieware: M360 P0 will take the current position as parallel to the platform edge, and store the offset in the homing trim offset (M666)  No further user interaction is needed.",
      "codes": [
        "M360"
      ],
      "id": "RepRap.M360[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M360: Move to Theta 0 degree position",
      "url": "https://reprap.org/wiki/G-code#M360:_Move_to_Theta_0_degree_position"
    }
  ],
  "M361": [
    {
      "brief": "Move to Theta-B",
      "codes": [
        "M361"
      ],
      "id": "Marlin.M361[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "SCARA Theta-B",
      "url": "https://marlinfw.org/docs/gcode/M361"
    },
    {
      "brief": "Theta move to 90 degrees with platform edge. User calibrates by using jog arms to place exactly 90 degrees. Steps per degree can then be read out by using M114, and programmed using M92. X represents Theta. Program Y (Psi) to the same value initially. Remember to repeat M360 after adjusting steps per degree.\nSmoothieware: M360 P0 will accept the current position as 90deg to platform edge. New steps per angle is calculated and entered into memory (M92)  No further user interaction is required, except to redo M360.",
      "codes": [
        "M361"
      ],
      "id": "RepRap.M361[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M361: Move to Theta 90 degree position",
      "url": "https://reprap.org/wiki/G-code#M361:_Move_to_Theta_90_degree_position"
    }
  ],
  "M362": [
    {
      "brief": "Move to Psi-A",
      "codes": [
        "M362"
      ],
      "id": "Marlin.M362[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "SCARA Psi-A",
      "url": "https://marlinfw.org/docs/gcode/M362"
    },
    {
      "brief": "Arms move to Psi 0 degree. Check only after other Theta calibrations",
      "codes": [
        "M362"
      ],
      "id": "RepRap.M362[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M362: Move to Psi 0 degree position",
      "url": "https://reprap.org/wiki/G-code#M362:_Move_to_Psi_0_degree_position"
    }
  ],
  "M363": [
    {
      "brief": "Move to Psi-B",
      "codes": [
        "M363"
      ],
      "id": "Marlin.M363[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "SCARA Psi-B",
      "url": "https://marlinfw.org/docs/gcode/M363"
    },
    {
      "brief": "Arms move to Psi 90 degree. Check only after other Theta calibrations",
      "codes": [
        "M363"
      ],
      "id": "RepRap.M363[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M363: Move to Psi 90 degree position",
      "url": "https://reprap.org/wiki/G-code#M363:_Move_to_Psi_90_degree_position"
    }
  ],
  "M364": [
    {
      "brief": "Move to Psi-C",
      "codes": [
        "M364"
      ],
      "id": "Marlin.M364[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "SCARA Psi-C",
      "url": "https://marlinfw.org/docs/gcode/M364"
    },
    {
      "brief": "Move arms to form a 90 degree angle between the inner and outer Psi arms. Calibrate by moving until angle is exactly 90 degree. Read out with M114, and calibrate value into Home offset M206. Psi is represented by Y.\nSmoothieware: M364 P0 will accept the current position as 90deg between arms. The offset is stored as a trim offset (M666) and no further user interaction is required except to save all changes via M500.",
      "codes": [
        "M364"
      ],
      "id": "RepRap.M364[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M364: Move to Psi + Theta 90 degree position",
      "url": "https://reprap.org/wiki/G-code#M364:_Move_to_Psi_.2B_Theta_90_degree_position"
    }
  ],
  "M365": [
    {
      "brief": "Adjust X Y and Z scaling by entering the factor. 100% scaling (default) is represented by 1",
      "codes": [
        "M365"
      ],
      "id": "RepRap.M365[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M365: SCARA scaling factor",
      "url": "https://reprap.org/wiki/G-code#M365:_SCARA_scaling_factor"
    }
  ],
  "M366": [
    {
      "brief": "Executing this command translates the calculated trim values of the SCARA calibration to real home offsets. This prevents the home and trim movement after calibration.",
      "codes": [
        "M366"
      ],
      "id": "RepRap.M366[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M366: SCARA convert trim",
      "url": "https://reprap.org/wiki/G-code#M366:_SCARA_convert_trim"
    }
  ],
  "M37": [
    {
      "brief": "",
      "codes": [
        "M37"
      ],
      "id": "RepRap.M37[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M37: Simulation mode",
      "url": "https://reprap.org/wiki/G-code#M37:_Simulation_mode"
    }
  ],
  "M370": [
    {
      "brief": "Clear the map and prepare for calibration",
      "codes": [
        "M370"
      ],
      "id": "RepRap.M370[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M370: Morgan manual bed level - clear map",
      "url": "https://reprap.org/wiki/G-code#M370:_Morgan_manual_bed_level_-_clear_map"
    }
  ],
  "M371": [
    {
      "brief": "Move to the next position for calibration. User moves the bed towards the hotend until it just touches",
      "codes": [
        "M371"
      ],
      "id": "RepRap.M371[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M371: Move to next calibration position",
      "url": "https://reprap.org/wiki/G-code#M371:_Move_to_next_calibration_position"
    }
  ],
  "M372": [
    {
      "brief": "The position of the bed is recorded and the machine moves to the next position. Repeat until all positions programmed",
      "codes": [
        "M372"
      ],
      "id": "RepRap.M372[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M372: Record calibration value, and move to next position",
      "url": "https://reprap.org/wiki/G-code#M372:_Record_calibration_value.2C_and_move_to_next_position"
    }
  ],
  "M373": [
    {
      "brief": "End calibration mode and enable z correction matrix. Does not save current matrix",
      "codes": [
        "M373"
      ],
      "id": "RepRap.M373[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M373: End bed level calibration mode",
      "url": "https://reprap.org/wiki/G-code#M373:_End_bed_level_calibration_mode"
    }
  ],
  "M374": [
    {
      "brief": "Saves the calibration grid.",
      "codes": [
        "M374"
      ],
      "id": "RepRap.M374[0]",
      "parameters": [
        {
          "description": " (Smoothieware only) Extension of the grid file",
          "label": "extension",
          "optional": true,
          "tag": "e",
          "values": []
        },
        {
          "description": " (RepRapFirmware only) Name of the file to save to",
          "label": "P\"filename\"",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " (Smoothieware only) Also save the M206 Z homing offset into the grid file",
          "label": "Z",
          "optional": true,
          "tag": "Z",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M374: Save calibration grid",
      "url": "https://reprap.org/wiki/G-code#M374:_Save_calibration_grid"
    }
  ],
  "M375": [
    {
      "brief": "Displays the bed level calibration matrix (Marlin), or loads the grid matrix file (Smoothieware and RepRapFirmware)",
      "codes": [
        "M375"
      ],
      "id": "RepRap.M375[0]",
      "parameters": [
        {
          "description": " (Smoothieware only)",
          "label": "extension",
          "optional": true,
          "tag": "e",
          "values": []
        },
        {
          "description": " (RepRapFirmware only)",
          "label": "P\"filename\"",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M375: Display matrix / Load Matrix",
      "url": "https://reprap.org/wiki/G-code#M375:_Display_matrix_.2F_Load_Matrix"
    }
  ],
  "M376": [
    {
      "brief": "",
      "codes": [
        "M376"
      ],
      "id": "RepRap.M376[0]",
      "parameters": [
        {
          "description": " Height (mm) over which to taper off the bed compensation",
          "label": "Hnnn",
          "optional": true,
          "tag": "H",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M376: Set bed compensation taper",
      "url": "https://reprap.org/wiki/G-code#M376:_Set_bed_compensation_taper"
    }
  ],
  "M38": [
    {
      "brief": "Used to compute a hash of a file on the SD card. Examples:\n > M38 gcodes/myfile.g\n > Cannot find file\n > M38 www/reprap.htm\n > 91199139dbfadac15a18cfb962dfd4853db83999\nReturns a hexadecimal string which is the SHA1 of the file. If the file cannot be found, then the string \"Cannot find file\" is returned instead.",
      "codes": [
        "M38"
      ],
      "id": "RepRap.M38[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M38 Compute SHA1 hash of target file",
      "url": "https://reprap.org/wiki/G-code#M38_Compute_SHA1_hash_of_target_file"
    }
  ],
  "M380": [
    {
      "brief": "Activate",
      "codes": [
        "M380"
      ],
      "id": "Marlin.M380[0]",
      "parameters": [
        {
          "description": "Solenoid index (Requires `MANUAL_SOLENOID_CONTROL`)",
          "label": "[S<index>]",
          "optional": true,
          "requires": "MANUAL_SOLENOID_CONTROL",
          "since": "2.0.0",
          "tag": "S",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Activate Solenoid",
      "url": "https://marlinfw.org/docs/gcode/M380"
    },
    {
      "brief": "",
      "codes": [
        "M380"
      ],
      "id": "RepRap.M380[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M380: Activate solenoid",
      "url": "https://reprap.org/wiki/G-code#M380:_Activate_solenoid"
    }
  ],
  "M381": [
    {
      "brief": "Deactivate all extruder solenoids",
      "codes": [
        "M381"
      ],
      "id": "Marlin.M381[0]",
      "parameters": [
        {
          "description": "Solenoid index (Requires `MANUAL_SOLENOID_CONTROL`)",
          "label": "[S<index>]",
          "optional": true,
          "requires": "MANUAL_SOLENOID_CONTROL",
          "since": "2.0.0",
          "tag": "S",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Deactivate Solenoids",
      "url": "https://marlinfw.org/docs/gcode/M381"
    },
    {
      "brief": "",
      "codes": [
        "M381"
      ],
      "id": "RepRap.M381[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M381: Disable all solenoids",
      "url": "https://reprap.org/wiki/G-code#M381:_Disable_all_solenoids"
    }
  ],
  "M39": [
    {
      "brief": "",
      "codes": [
        "M39"
      ],
      "id": "RepRap.M39[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M39 Report SD card information",
      "url": "https://reprap.org/wiki/G-code#M39_Report_SD_card_information"
    }
  ],
  "M4": [
    {
      "brief": "Set the spindle CCW speed or laser power",
      "codes": [
        "M4"
      ],
      "id": "Marlin.M4[0]",
      "parameters": [
        {
          "description": "Spindle speed or laser power in the configured value range (see `CUTTER_POWER_UNIT`). (PWM 0-255 by default)",
          "label": "[S<power>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "power",
              "type": "byte"
            }
          ]
        },
        {
          "description": "Spindle speed or laser power in PWM 0-255 value range",
          "label": "[O<power>]",
          "optional": true,
          "tag": "O",
          "values": [
            {
              "tag": "power",
              "type": "byte"
            }
          ]
        },
        {
          "description": "Inline mode ON / OFF.",
          "label": "[I<mode>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "mode",
              "type": "bool"
            }
          ]
        }
      ],
      "related": [
        "M3",
        "M5"
      ],
      "source": "Marlin",
      "title": "Spindle CCW / Laser On",
      "url": "https://marlinfw.org/docs/gcode/M004"
    },
    {
      "brief": "",
      "codes": [
        "M4"
      ],
      "id": "RepRap.M4[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M4: Spindle On, Counter-Clockwise (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#M4:_Spindle_On.2C_Counter-Clockwise_.28CNC_specific.29"
    }
  ],
  "M40": [
    {
      "brief": "If your RepRap machine can eject the parts it has built off the bed, this command executes the eject cycle. This usually involves cooling the bed and then performing a sequence of movements that remove the printed parts from it. The X, Y and Z position of the machine at the end of this cycle are undefined (though they can be found out using the M114 command, q.v.).\nSee also M240 and M241 below.",
      "codes": [
        "M40"
      ],
      "id": "RepRap.M40[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M40: Eject",
      "url": "https://reprap.org/wiki/G-code#M40:_Eject"
    }
  ],
  "M400": [
    {
      "brief": "",
      "codes": [
        "M400"
      ],
      "id": "Klipper.M400[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Wait for all moves to finish",
      "codes": [
        "M400"
      ],
      "id": "Marlin.M400[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Finish Moves",
      "url": "https://marlinfw.org/docs/gcode/M400"
    },
    {
      "brief": "",
      "codes": [
        "M400"
      ],
      "id": "RepRap.M400[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M400: Wait for current moves to finish",
      "url": "https://reprap.org/wiki/G-code#M400:_Wait_for_current_moves_to_finish"
    }
  ],
  "M401": [
    {
      "brief": "Deploy the bed probe",
      "codes": [
        "M401"
      ],
      "id": "Marlin.M401[0]",
      "parameters": [
        {
          "description": "Set the BLTouch High Speed (HS) Mode state and exit without deploy.",
          "label": "[S<bool>]",
          "optional": true,
          "requires": "BLTOUCH_HS_MODE",
          "tag": "S",
          "values": [
            {
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Deploy Probe",
      "url": "https://marlinfw.org/docs/gcode/M401"
    },
    {
      "brief": "",
      "codes": [
        "M401"
      ],
      "id": "RepRap.M401[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M401: Lower z-probe",
      "url": "https://reprap.org/wiki/G-code#M401:_Lower_z-probe"
    }
  ],
  "M402": [
    {
      "brief": "Stow the bed probe",
      "codes": [
        "M402"
      ],
      "id": "Marlin.M402[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Stow Probe",
      "url": "https://marlinfw.org/docs/gcode/M402"
    },
    {
      "brief": "",
      "codes": [
        "M402"
      ],
      "id": "RepRap.M402[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M402: Raise z-probe",
      "url": "https://reprap.org/wiki/G-code#M402:_Raise_z-probe"
    }
  ],
  "M403": [
    {
      "brief": "Set filament type for Multi-Material Unit 2.0",
      "codes": [
        "M403"
      ],
      "id": "Marlin.M403[0]",
      "parameters": [
        {
          "description": "The MMU2 slot [0..4] to set the material type for",
          "label": "E<index>",
          "optional": false,
          "tag": "E",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "The filament type.",
          "label": "F<0|1|2>",
          "optional": false,
          "tag": "F",
          "values": [
            {
              "description": "Default (PLA, PETG, ...)",
              "tag": 0
            },
            {
              "description": "Flexible filament",
              "tag": 1
            },
            {
              "description": "PVA",
              "tag": 2
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "MMU2 Filament Type",
      "url": "https://marlinfw.org/docs/gcode/M403"
    },
    {
      "brief": "",
      "codes": [
        "M403"
      ],
      "id": "RepRap.M403[0]",
      "parameters": [
        {
          "description": " Extruder number",
          "label": "E",
          "optional": true,
          "tag": "E",
          "values": []
        },
        {
          "description": " Filament type",
          "label": "F",
          "optional": true,
          "tag": "F",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M403: Set filament type (material) for particular extruder and notify the MMU",
      "url": "https://reprap.org/wiki/G-code#M403:_Set_filament_type_.28material.29_for_particular_extruder_and_notify_the_MMU"
    }
  ],
  "M404": [
    {
      "brief": "Set the nominal diameter for filament width sensor auto-flow",
      "codes": [
        "M404"
      ],
      "id": "Marlin.M404[0]",
      "parameters": [
        {
          "description": "The new nominal width value",
          "label": "[W<linear>]",
          "optional": true,
          "tag": "W",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Filament Diameter",
      "url": "https://marlinfw.org/docs/gcode/M404"
    },
    {
      "brief": "",
      "codes": [
        "M404"
      ],
      "id": "RepRap.M404[0]",
      "parameters": [
        {
          "description": " Filament width (in mm)",
          "label": "Nnnn",
          "optional": true,
          "tag": "N",
          "values": []
        },
        {
          "description": " Nozzle diameter (in mm)",
          "label": "Dnnn",
          "optional": true,
          "tag": "D",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M404: Filament width and nozzle diameter",
      "url": "https://reprap.org/wiki/G-code#M404:_Filament_width_and_nozzle_diameter"
    }
  ],
  "M405": [
    {
      "brief": "Enable filament width sensor flow control",
      "codes": [
        "M405"
      ],
      "id": "Marlin.M405[0]",
      "parameters": [
        {
          "description": "Distance from measurement point to hot end. If not given, the previous value will be used. The default startup value is set by `MEASUREMENT_DELAY_CM`.",
          "label": "[D<int>]",
          "optional": true,
          "tag": "D",
          "values": [
            {
              "type": "int",
              "unit": "cm"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Filament Width Sensor On",
      "url": "https://marlinfw.org/docs/gcode/M405"
    },
    {
      "brief": "",
      "codes": [
        "M405"
      ],
      "id": "RepRap.M405[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M405: Filament Sensor on",
      "url": "https://reprap.org/wiki/G-code#M405:_Filament_Sensor_on"
    }
  ],
  "M406": [
    {
      "brief": "Disable filament width sensor flow control",
      "codes": [
        "M406"
      ],
      "id": "Marlin.M406[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Filament Width Sensor Off",
      "url": "https://marlinfw.org/docs/gcode/M406"
    },
    {
      "brief": "",
      "codes": [
        "M406"
      ],
      "id": "RepRap.M406[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M406: Filament Sensor off",
      "url": "https://reprap.org/wiki/G-code#M406:_Filament_Sensor_off"
    }
  ],
  "M407": [
    {
      "brief": "Report the measured filament width",
      "codes": [
        "M407"
      ],
      "id": "Marlin.M407[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Filament Width",
      "url": "https://marlinfw.org/docs/gcode/M407"
    },
    {
      "brief": "",
      "codes": [
        "M407"
      ],
      "id": "RepRap.M407[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M407: Display filament diameter",
      "url": "https://reprap.org/wiki/G-code#M407:_Display_filament_diameter"
    }
  ],
  "M408": [
    {
      "brief": "",
      "codes": [
        "M408"
      ],
      "id": "RepRap.M408[0]",
      "parameters": [
        {
          "description": " Response type",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Response sequence number",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M408: Report JSON-style response",
      "url": "https://reprap.org/wiki/G-code#M408:_Report_JSON-style_response"
    }
  ],
  "M409": [
    {
      "brief": "",
      "codes": [
        "M409"
      ],
      "id": "RepRap.M409[0]",
      "parameters": [
        {
          "description": " Key string, default empty",
          "label": "K\"key\"",
          "optional": true,
          "tag": "K",
          "values": []
        },
        {
          "description": " Flags string, default empty",
          "label": "F\"flags\"",
          "optional": true,
          "tag": "F",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M409: Query object model",
      "url": "https://reprap.org/wiki/G-code#M409:_Query_object_model"
    }
  ],
  "M41": [
    {
      "brief": "",
      "codes": [
        "M41"
      ],
      "id": "RepRap.M41[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M41: Loop",
      "url": "https://reprap.org/wiki/G-code#M41:_Loop"
    }
  ],
  "M410": [
    {
      "brief": "Stop all steppers instantly",
      "codes": [
        "M410"
      ],
      "id": "Marlin.M410[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Quickstop",
      "url": "https://marlinfw.org/docs/gcode/M410"
    },
    {
      "brief": "This command does a quick stop of all stepper motors and aborts all moves in the planner. This command is only intended for emergency situations, and due to the instant stop the actual stepper positions may be shifted. Note that if `EMERGENCY_PARSER` is disabled, the response may be delayed while the command buffer is being queued. If a print job is in progress, it will continue, so it is important to suspend the print job before using this command.",
      "codes": [
        "M410"
      ],
      "id": "RepRap.M410[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M410: Quick-Stop",
      "url": "https://reprap.org/wiki/G-code#M410:_Quick-Stop"
    }
  ],
  "M412": [
    {
      "brief": "Get/set filament runout detection parameters",
      "codes": [
        "M412"
      ],
      "id": "Marlin.M412[0]",
      "parameters": [
        {
          "description": "Set the filament runout distance.",
          "label": "[D<linear>]",
          "optional": true,
          "tag": "D",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Flag to enable or disable host handling of a filament runout.",
          "label": "[H<bool>]",
          "optional": true,
          "tag": "H",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Flag to enable or disable Filament Runout Detection. If omitted, the current enabled state will be reported.",
          "label": "[S<bool>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Flag to reset the filament runout sensor. Not needed with `S`.",
          "label": "[R<bool>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Filament Runout",
      "url": "https://marlinfw.org/docs/gcode/M412"
    },
    {
      "brief": "Enable or disable filament runout detection. When filament sensors are enabled, the firmware responds to a filament runout by running the configured G-code (usually M600 Filament Change). When filament runout detection is disabled, no action will be taken on filament runout.\nUsage: M412 S[on|off]\nIf no 'S' parameter is given, this command reports the current state of filament runout detection.",
      "codes": [
        "M412"
      ],
      "id": "RepRap.M412[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M412: Disable Filament Runout Detection",
      "url": "https://reprap.org/wiki/G-code#M412:_Disable_Filament_Runout_Detection"
    }
  ],
  "M413": [
    {
      "brief": "Enable / disable power-loss recovery",
      "codes": [
        "M413"
      ],
      "id": "Marlin.M413[0]",
      "parameters": [
        {
          "description": "Flag to enable or disable Power-loss Recovery. If omitted, the current enabled state will be reported.",
          "label": "[S<bool>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Power-loss Recovery",
      "url": "https://marlinfw.org/docs/gcode/M413"
    },
    {
      "brief": "Enable or disable the Power-loss Recovery feature. When this feature is enabled, the state of the current print job (SD card only) will be saved to a file on the SD card. If the machine crashes or a power outage occurs, the firmware will present an option to Resume the interrupted print job. In Marlin 2.0 the POWER_LOSS_RECOVERY option must be enabled.\nThis feature operates without a power-loss detection circuit by writing to the recovery file periodically (e.g., once per layer), or if a POWER_LOSS_PIN is configured then it will write the recovery info only when a power-loss is detected. The latter option is preferred, since constant writing to the SD card can shorten its life, and the print will be resumed where it was interrupted rather than repeating the last layer. (Future implementations may allow use of the EEPROM or the on-board SD card.)\nUsage: M413 S[on|off]\nIf no 'S' parameter is given, this command reports the current state of Power-loss Recovery.",
      "codes": [
        "M413"
      ],
      "id": "RepRap.M413[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M413: Power-Loss Recovery",
      "url": "https://reprap.org/wiki/G-code#M413:_Power-Loss_Recovery"
    }
  ],
  "M415": [
    {
      "brief": "The host rescue G-code is essential to enabling host software to recover from a lost connection or power loss. With this solution the firmware stores the last received coordinate and current position in EEPROM. Once the host reconnects, the firmware reports this recovery information. From the last-received coordinate the host can determine the last line that was processed. Firmware should move the extruder to a parking position if commands stop arriving during an active print job (with heaters still on). Once the host starts sending new commands the firmware should restore the last position. Host and firmware developers can work together to optimize this solution.\nIf the firmware supports this solution it should announce it with the capability:\nCap:HOST_RESCUE:1",
      "codes": [
        "M415"
      ],
      "id": "RepRap.M415[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M415: Host Rescue",
      "url": "https://reprap.org/wiki/G-code#M415:_Host_Rescue"
    }
  ],
  "M416": [
    {
      "brief": "Host tells firmware that it will loose power. This is the solution in case a connected host has a power loss detection and firmware does not. Firmware should return\nthe message POWERLOSS_DETECTED and do whatever firmware is supposed to do in that case. In combination with host rescue it should store positions, disable heaters, go to park position.",
      "codes": [
        "M416"
      ],
      "id": "RepRap.M416[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M416: Power loss",
      "url": "https://reprap.org/wiki/G-code#M416:_Power_loss"
    }
  ],
  "M42": [
    {
      "brief": "Set an analog or digital pin to a specified state.",
      "codes": [
        "M42"
      ],
      "id": "Marlin.M42[0]",
      "parameters": [
        {
          "description": "The state to set. PWM pins may be set from 0-255.",
          "label": "S<state>",
          "optional": false,
          "tag": "S",
          "values": [
            {
              "tag": "state",
              "type": "int"
            }
          ]
        },
        {
          "description": "Ignore protection on pins that Marlin is using.",
          "label": "[I<bool>]",
          "optional": true,
          "since": "1.1.9.1",
          "tag": "I",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Set the pin mode.",
          "label": "[M<0|1|2|3>]",
          "optional": true,
          "since": "2.0.5.2",
          "tag": "M",
          "values": [
            {
              "description": "`INPUT`",
              "tag": 0
            },
            {
              "description": "`OUTPUT`",
              "tag": 1
            },
            {
              "description": "`INPUT_PULLUP`",
              "tag": 2
            },
            {
              "description": "`INPUT_PULLDOWN`",
              "tag": 3
            }
          ]
        },
        {
          "description": "A digital pin number (even for analog pins) to write to. (`LED_PIN` if omitted)",
          "label": "[P<pin>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "pin",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Pin State",
      "url": "https://marlinfw.org/docs/gcode/M042"
    },
    {
      "brief": "",
      "codes": [
        "M42"
      ],
      "id": "RepRap.M42[0]",
      "parameters": [
        {
          "description": " Pin number",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Pin value",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M42: Switch I/O pin",
      "url": "https://reprap.org/wiki/G-code#M42:_Switch_I.2FO_pin"
    }
  ],
  "M420": [
    {
      "brief": "Get and/or set bed leveling state and parameters",
      "codes": [
        "M420"
      ],
      "id": "Marlin.M420[0]",
      "parameters": [
        {
          "description": "Load mesh from EEPROM index (Requires `AUTO_BED_LEVELING_UBL` and `EEPROM_SETTINGS`)",
          "label": "[L<int>]",
          "optional": true,
          "tag": "L",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Set enabled or disabled. A valid mesh is required to enable bed leveling. If the mesh is invalid / incomplete leveling will not be enabled.",
          "label": "[S<bool>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Verbose: Print the stored mesh / matrix data",
          "label": "[V<bool>]",
          "optional": true,
          "tag": "V",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Format to print the mesh data",
          "label": "[T<0|1|4>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "description": "Human readable",
              "tag": 0
            },
            {
              "description": "CSV",
              "tag": 1
            },
            {
              "description": "Compact",
              "tag": 4
            }
          ]
        },
        {
          "description": "Set Z fade height (Requires `ENABLE_LEVELING_FADE_HEIGHT`)\n- With Fade enabled, bed leveling correction is gradually reduced as the nozzle gets closer to the Fade height. Above the Fade height no bed leveling compensation is applied at all, so movement is machine true.\n- Set to 0 to disable fade, and leveling compensation will be fully applied to all layers of the print.\n",
          "label": "[Z<linear>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Center the mesh on the mean of the lowest and highest points",
          "label": "[C<bool>]",
          "optional": true,
          "tag": "C",
          "values": [
            {
              "type": "bool"
            }
          ]
        }
      ],
      "related": [
        "G29",
        "M421"
      ],
      "source": "Marlin",
      "title": "Bed Leveling State",
      "url": "https://marlinfw.org/docs/gcode/M420"
    },
    {
      "brief": "Usage: M420 R[Red PWM (0-255)] E[Green PWM (0-255)] B[Blue PWM (0-255)]",
      "codes": [
        "M420"
      ],
      "id": "RepRap.M420[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M420: Set RGB Colors as PWM (MachineKit)",
      "url": "https://reprap.org/wiki/G-code#M420:_Set_RGB_Colors_as_PWM_.28MachineKit.29"
    },
    {
      "brief": "Enable/Disable Bed Leveling (using the current stored grid or mesh).",
      "codes": [
        "M420"
      ],
      "id": "RepRap.M420[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M420: Leveling On/Off/Fade (Marlin)",
      "url": "https://reprap.org/wiki/G-code#M420:_Leveling_On.2FOff.2FFade_.28Marlin.29"
    }
  ],
  "M421": [
    {
      "brief": "Set a single mesh Z height",
      "codes": [
        "M421"
      ],
      "id": "Marlin.M421[0]",
      "parameters": [
        {
          "description": "X index into the mesh array",
          "label": "[I<int>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Y index into the mesh array",
          "label": "[J<int>]",
          "optional": true,
          "tag": "J",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "X position (which should be very close to a grid line) (`MESH_BED_LEVELING` only)",
          "label": "[X<linear>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Y position (which should be very close to a grid line) (`MESH_BED_LEVELING` only)",
          "label": "[Y<linear>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "The new Z value to set",
          "label": "[Z<linear>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "A value to add to the existing Z value",
          "label": "[Q<linear>]",
          "optional": true,
          "tag": "Q",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Set the mesh point closest to the current nozzle position (`AUTO_BED_LEVELING_UBL` only)",
          "label": "[C<bool>]",
          "optional": true,
          "tag": "C",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Set the mesh point to undefined (`AUTO_BED_LEVELING_UBL` only)",
          "label": "[N<bool>]",
          "optional": true,
          "tag": "N",
          "values": [
            {
              "type": "bool"
            }
          ]
        }
      ],
      "related": [
        "G29",
        "M420"
      ],
      "source": "Marlin",
      "title": "Set Mesh Value",
      "url": "https://marlinfw.org/docs/gcode/M421"
    },
    {
      "brief": "Set a single Z coordinate in the Mesh, Bilinear or UBL Leveling grid. Requires MESH_BED_LEVELING or AUTO_BED_LEVELING_BILINEAR or AUTO_BED_LEVELING_UBL.\nI & J are the index for the X and Y axis respectively.",
      "codes": [
        "M421"
      ],
      "id": "RepRap.M421[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M421: Set a Mesh Bed Leveling Z coordinate",
      "url": "https://reprap.org/wiki/G-code#M421:_Set_a_Mesh_Bed_Leveling_Z_coordinate"
    }
  ],
  "M422": [
    {
      "brief": "Set a Z motor position for G34 Auto-Alignment",
      "codes": [
        "M422"
      ],
      "id": "Marlin.M422[0]",
      "parameters": [
        {
          "description": "Z-Stepper index",
          "label": "S",
          "optional": false,
          "tag": "S"
        },
        {
          "description": "X position",
          "label": "[X]",
          "optional": true,
          "tag": "X"
        },
        {
          "description": "Y position",
          "label": "[Y]",
          "optional": true,
          "tag": "Y"
        }
      ],
      "related": [
        "G34"
      ],
      "source": "Marlin",
      "title": "Set Z Motor XY",
      "url": "https://marlinfw.org/docs/gcode/M422"
    }
  ],
  "M425": [
    {
      "brief": "Enable and tune backlash compensation",
      "codes": [
        "M425"
      ],
      "id": "Marlin.M425[0]",
      "parameters": [
        {
          "description": "Enable or disables backlash correction, or sets an intermediate fade-out (0.0 = none; 1.0 = 100%)",
          "label": "[F<value>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "value",
              "type": "float"
            }
          ]
        },
        {
          "description": "Distance over which backlash correction is spread",
          "label": "[S<linear>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Set the backlash distance on X (mm; 0 to disable)",
          "label": "[X<linear>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Set the backlash distance on Y (mm; 0 to disable)",
          "label": "[Y<linear>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Set the backlash distance on Z (mm; 0 to disable)",
          "label": "[Z<linear>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "When `MEASURE_BACKLASH_WHEN_PROBING` is enabled, loads the measured backlash into the backlash distance parameter",
          "label": "[Z]",
          "optional": true,
          "tag": "Z"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Backlash compensation",
      "url": "https://marlinfw.org/docs/gcode/M425"
    },
    {
      "brief": "",
      "codes": [
        "M425"
      ],
      "id": "RepRap.M425[0]",
      "parameters": [
        {
          "description": " Enable/disable/fade-out backlash correction (0.0 = none to 1.0 = 100%)",
          "label": "Fnnn",
          "optional": true,
          "tag": "F",
          "values": []
        },
        {
          "description": " Distance over which backlash correction is spread (mm)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Set the backlash distance on X (mm; 0 to disable)",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Set the backlash distance on Y (mm; 0 to disable)",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Set the backlash distance on Z (mm; 0 to disable)",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " Use measured value for backlash on X (if available)",
          "label": "X",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Use measured value for backlash on Y (if available)",
          "label": "Y",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Use measured value for backlash on Z (if available)",
          "label": "Z",
          "optional": true,
          "tag": "Z",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M425: Backlash Correction",
      "url": "https://reprap.org/wiki/G-code#M425:_Backlash_Correction"
    }
  ],
  "M428": [
    {
      "brief": "Set home offsets based on current position",
      "codes": [
        "M428"
      ],
      "id": "Marlin.M428[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Home Offsets Here",
      "url": "https://marlinfw.org/docs/gcode/M428"
    }
  ],
  "M43": [
    {
      "brief": "Get information about pins.",
      "codes": [
        "M43"
      ],
      "id": "Marlin.M43[0]",
      "parameters": [
        {
          "description": "Digital Pin Number",
          "label": "[P<pin>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "pin",
              "type": "int"
            }
          ]
        },
        {
          "description": "Watch pins",
          "label": "[W]",
          "optional": true,
          "tag": "W"
        },
        {
          "description": "Watch endstops",
          "label": "[E<bool>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Toggle pins - see [`M43 T`](/docs/gcode/M043-T.html) for options",
          "label": "[T]",
          "optional": true,
          "tag": "T",
          "values": null
        },
        {
          "description": "Test BLTouch type servo probes. Use `P` to specify servo index (0-3). Defaults to 0 if `P` omitted",
          "label": "[S]",
          "optional": true,
          "tag": "S",
          "values": null
        },
        {
          "description": "Ignore protection when reporting values",
          "label": "[I]",
          "optional": true,
          "tag": "I",
          "values": null
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Debug Pins",
      "url": "https://marlinfw.org/docs/gcode/M043"
    },
    {
      "brief": "",
      "codes": [
        "M43"
      ],
      "id": "RepRap.M43[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M43: Stand by on material exhausted",
      "url": "https://reprap.org/wiki/G-code#M43:_Stand_by_on_material_exhausted"
    },
    {
      "brief": "",
      "codes": [
        "M43"
      ],
      "id": "RepRap.M43[1]",
      "parameters": [
        {
          "description": "   Enable / disable background endstop monitoring",
          "label": "En",
          "optional": true,
          "tag": "E",
          "values": []
        },
        {
          "description": " Pin to read or watch. If omitted, read/watch all pins",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": "   bool watch pins -reporting changes- until reset, click, or M108",
          "label": "Wn",
          "optional": true,
          "tag": "W",
          "values": []
        },
        {
          "description": "   bool Flag to ignore pin protection",
          "label": "In",
          "optional": true,
          "tag": "I",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M43: Pin report and debug",
      "url": "https://reprap.org/wiki/G-code#M43:_Pin_report_and_debug"
    }
  ],
  "M43 T": [
    {
      "brief": "Get information about pins.",
      "codes": [
        "M43 T"
      ],
      "id": "Marlin.M43 T[0]",
      "parameters": [
        {
          "description": "Start Pin number. If not given, will default to 0",
          "label": "[S<pin>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "pin",
              "type": "int"
            }
          ]
        },
        {
          "description": "End Pin number. If not given, will default to last pin defined for this board",
          "label": "[L<pin>]",
          "optional": true,
          "tag": "L",
          "values": [
            {
              "tag": "pin",
              "type": "int"
            }
          ]
        },
        {
          "description": "Flag to ignore Marlin's pin protection. **Use with caution!!!!**",
          "label": "[I<bool>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Repeat pulses on each pin this number of times before continuing to next pin. If not given will default to 1.",
          "label": "[R<count>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "count",
              "type": "int"
            }
          ]
        },
        {
          "description": "Wait time (in milliseconds) transitions. If not given will default to 500.",
          "label": "[W<time>]",
          "optional": true,
          "tag": "W",
          "values": [
            {
              "tag": "time",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Toggle Pins",
      "url": "https://marlinfw.org/docs/gcode/M043-T"
    }
  ],
  "M430": [
    {
      "brief": "Read and display current (A), voltage (V), and power (W)",
      "codes": [
        "M430"
      ],
      "id": "Marlin.M430[0]",
      "parameters": [
        {
          "description": "display current (A) on LCD",
          "label": "[I<bool>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "toggle display voltage (V) on LCD",
          "label": "[V<bool>]",
          "optional": true,
          "tag": "V",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "display power/watts (W) on LCD",
          "label": "[W<bool>]",
          "optional": true,
          "tag": "W",
          "values": [
            {
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Power Monitor",
      "url": "https://marlinfw.org/docs/gcode/M430"
    }
  ],
  "M44": [
    {
      "brief": "In MK4duo you must enable FASTER_GCODE_EXECUTE to get this G-code.",
      "codes": [
        "M44"
      ],
      "id": "RepRap.M44[0]",
      "parameters": [
        {
          "description": " G-code list",
          "label": "In",
          "optional": true,
          "tag": "I",
          "values": []
        },
        {
          "description": " M-code list",
          "label": "Jn",
          "optional": true,
          "tag": "J",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M44: Codes debug - report codes available",
      "url": "https://reprap.org/wiki/G-code#M44:_Codes_debug_-_report_codes_available"
    },
    {
      "brief": "Resets the bed skew and offset calibration on Prusa i3 MK2/s,MK2.5/s,MK3/s.",
      "codes": [
        "M44"
      ],
      "id": "RepRap.M44[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M44: Reset the bed skew and offset calibration",
      "url": "https://reprap.org/wiki/G-code#M44:_Reset_the_bed_skew_and_offset_calibration"
    }
  ],
  "M45": [
    {
      "brief": "Runs the xyz calibration on Prusa i3 MK2/s,MK2.5/s,MK3/s.",
      "codes": [
        "M45"
      ],
      "id": "RepRap.M45[0]",
      "parameters": [
        {
          "description": " Verbosity level 1, 10 and 20 (low, mid, high). Only when SUPPORT_VERBOSITY is defined. This parameter is optional. ",
          "label": "Vnn",
          "optional": true,
          "tag": "V",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M45: Bed skew and offset with manual Z up",
      "url": "https://reprap.org/wiki/G-code#M45:_Bed_skew_and_offset_with_manual_Z_up"
    }
  ],
  "M450": [
    {
      "brief": "",
      "codes": [
        "M450"
      ],
      "id": "RepRap.M450[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M450: Report Printer Mode",
      "url": "https://reprap.org/wiki/G-code#M450:_Report_Printer_Mode"
    }
  ],
  "M451": [
    {
      "brief": "",
      "codes": [
        "M451"
      ],
      "id": "RepRap.M451[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M451: Select FFF Printer Mode",
      "url": "https://reprap.org/wiki/G-code#M451:_Select_FFF_Printer_Mode"
    }
  ],
  "M452": [
    {
      "brief": "",
      "codes": [
        "M452"
      ],
      "id": "RepRap.M452[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M452: Select Laser Printer Mode",
      "url": "https://reprap.org/wiki/G-code#M452:_Select_Laser_Printer_Mode"
    }
  ],
  "M453": [
    {
      "brief": "",
      "codes": [
        "M453"
      ],
      "id": "RepRap.M453[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M453: Select CNC Printer Mode",
      "url": "https://reprap.org/wiki/G-code#M453:_Select_CNC_Printer_Mode"
    }
  ],
  "M46": [
    {
      "brief": "Reports the assigned IP address of a Toshiba FlashAir on Prusa i3 MK2/s,MK2.5/s,MK3/s.\nAt this moment it is deactivated.",
      "codes": [
        "M46"
      ],
      "id": "RepRap.M46[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M46: Show the assigned IP address",
      "url": "https://reprap.org/wiki/G-code#M46:_Show_the_assigned_IP_address"
    }
  ],
  "M460": [
    {
      "brief": "",
      "codes": [
        "M460"
      ],
      "id": "RepRap.M460[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M460: Define temperature range for thermistor-controlled fan",
      "url": "https://reprap.org/wiki/G-code#M460:_Define_temperature_range_for_thermistor-controlled_fan"
    }
  ],
  "M47": [
    {
      "brief": "Show end stops dialog on the display on Prusa i3 MK2/s,MK2.5/s,MK3/s.",
      "codes": [
        "M47"
      ],
      "id": "RepRap.M47[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M47: Show end stops dialog on the display",
      "url": "https://reprap.org/wiki/G-code#M47:_Show_end_stops_dialog_on_the_display"
    }
  ],
  "M470": [
    {
      "brief": "",
      "codes": [
        "M470"
      ],
      "id": "RepRap.M470[0]",
      "parameters": [
        {
          "description": " Name of directory to create",
          "label": "P\"name\"",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M470: Create Directory on SD-Card",
      "url": "https://reprap.org/wiki/G-code#M470:_Create_Directory_on_SD-Card"
    }
  ],
  "M471": [
    {
      "brief": "",
      "codes": [
        "M471"
      ],
      "id": "RepRap.M471[0]",
      "parameters": [
        {
          "description": " Name of existing file/directory",
          "label": "S\"name\"",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " New name of file/directory",
          "label": "T\"name\"",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " Setting this to 1 will delete an existing file that matches the T parameter value",
          "label": "Dnnn",
          "optional": true,
          "tag": "D",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M471: Rename File/Directory on SD-Card",
      "url": "https://reprap.org/wiki/G-code#M471:_Rename_File.2FDirectory_on_SD-Card"
    }
  ],
  "M48": [
    {
      "brief": "Measure Z Probe repeatability.",
      "codes": [
        "M48"
      ],
      "id": "Marlin.M48[0]",
      "parameters": [
        {
          "description": "Engage for each probe",
          "label": "[E<engage>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "engage",
              "type": "bool"
            }
          ]
        },
        {
          "description": "Number of legs to probe",
          "label": "[L<legs>]",
          "optional": true,
          "tag": "L",
          "values": [
            {
              "tag": "legs",
              "type": "int"
            }
          ]
        },
        {
          "description": "Number of probes to do",
          "label": "[P<count>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "count",
              "type": "int"
            }
          ]
        },
        {
          "description": "Star/Schizoid probe. By default this will do 7 points. Override with `L`.",
          "label": "[S<0|1>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "description": "Circular pattern",
              "tag": 0
            },
            {
              "description": "Star-like pattern",
              "tag": 1
            }
          ]
        },
        {
          "description": "Verbose Level (0-4, default=1)",
          "label": "[V<level>]",
          "optional": true,
          "tag": "V",
          "values": [
            {
              "tag": "level",
              "type": "int"
            }
          ]
        },
        {
          "description": "X Position",
          "label": "[X<pos>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Y Position",
          "label": "[Y<pos>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Probe Accuracy Test",
      "url": "https://marlinfw.org/docs/gcode/M048"
    },
    {
      "brief": "",
      "codes": [
        "M48"
      ],
      "id": "RepRap.M48[0]",
      "parameters": [
        {
          "description": " number of points",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " position on the X axis",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " position on the Y axis",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " verbosity",
          "label": "Vnnn",
          "optional": true,
          "tag": "V",
          "values": []
        },
        {
          "description": " engage",
          "label": "E",
          "optional": true,
          "tag": "E",
          "values": []
        },
        {
          "description": " legs of travel",
          "label": "Lnnn",
          "optional": true,
          "tag": "L",
          "values": []
        },
        {
          "description": " schizoid",
          "label": "S",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M48: Measure Z-Probe repeatability",
      "url": "https://reprap.org/wiki/G-code#M48:_Measure_Z-Probe_repeatability"
    }
  ],
  "M486": [
    {
      "brief": "Identify and cancel objects",
      "codes": [
        "M486"
      ],
      "id": "Marlin.M486[0]",
      "parameters": [
        {
          "description": "Cancel the current object.",
          "label": "[C<flag>]",
          "optional": true,
          "tag": "C",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "Cancel the object with the given index.",
          "label": "[P<index>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Set the index of the current object. If the object with the given index has been canceled, this will cause the firmware to skip to the next object. The value -1 is used to indicate something that isn't an object and shouldn't be skipped.",
          "label": "[S<index>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Reset the state and set the number of objects.",
          "label": "[T<count>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "count",
              "type": "int"
            }
          ]
        },
        {
          "description": "Un-cancel the object with the given index. This command will be ignored if the object has already been skipped.",
          "label": "[U<index>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Cancel Objects",
      "url": "https://marlinfw.org/docs/gcode/M486"
    },
    {
      "brief": "The M486 G-code provides an interface to identify objects on the print bed and cancel them. Basic usage: Use M486 T to tell the firmware how many objects there are, so it can provide an LCD interface. (Otherwise the firmware counts them up in the first layer.) In every layer of your G-code, you must preface each object's layer slice with M486 S[index] to indicate which object is being printed. The index should be zero-based. To cancel the first object, use M486 P0; to cancel the 5th object use M486 P4; and so on. The \"current\" object is canceled with M486 C.\nG-codes associated with the canceled objects are no longer printed. Firmware supports this feature by ignoring G0-G3/G5 moves in XYZ while updating F and keeping the E coordinate up-to-date without extruding.\nSlicers should number purge towers and other global features with a negative index (or other flag) to distinguish them from regular print objects, since it is important to preserve color changes, purge towers, and brims.\nHost software (such as OctoPrint) may be able to cancel individual objects through a plugin, and in this case they should not use M486 P to cancel objects (although doing so should cause no harm).",
      "codes": [
        "M486"
      ],
      "id": "RepRap.M486[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M486: Cancel Object",
      "url": "https://reprap.org/wiki/G-code#M486:_Cancel_Object"
    }
  ],
  "M49": [
    {
      "brief": "",
      "codes": [
        "M49"
      ],
      "id": "RepRap.M49[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M49: Set G26 debug flag",
      "url": "https://reprap.org/wiki/G-code#M49:_Set_G26_debug_flag"
    }
  ],
  "M5": [
    {
      "brief": "Turn off spindle or laser",
      "codes": [
        "M5"
      ],
      "id": "Marlin.M5[0]",
      "parameters": [],
      "related": [
        "M3",
        "M4"
      ],
      "source": "Marlin",
      "title": "Spindle / Laser Off",
      "url": "https://marlinfw.org/docs/gcode/M005"
    },
    {
      "brief": "",
      "codes": [
        "M5"
      ],
      "id": "RepRap.M5[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M5: Spindle Off (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#M5:_Spindle_Off_.28CNC_specific.29"
    }
  ],
  "M500": [
    {
      "brief": "Save settings to EEPROM.",
      "codes": [
        "M500"
      ],
      "id": "Marlin.M500[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Save Settings",
      "url": "https://marlinfw.org/docs/gcode/M500"
    },
    {
      "brief": "",
      "codes": [
        "M500"
      ],
      "id": "RepRap.M500[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M500: Store parameters in non-volatile storage",
      "url": "https://reprap.org/wiki/G-code#M500:_Store_parameters_in_non-volatile_storage"
    }
  ],
  "M501": [
    {
      "brief": "Restore settings from EEPROM.",
      "codes": [
        "M501"
      ],
      "id": "Marlin.M501[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Restore Settings",
      "url": "https://marlinfw.org/docs/gcode/M501"
    },
    {
      "brief": "",
      "codes": [
        "M501"
      ],
      "id": "RepRap.M501[0]",
      "parameters": [
        {
          "description": " Enable auto-save (only RepRapFirmware)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M501: Read parameters from EEPROM",
      "url": "https://reprap.org/wiki/G-code#M501:_Read_parameters_from_EEPROM"
    }
  ],
  "M502": [
    {
      "brief": "Restore all settings to factory defaults.",
      "codes": [
        "M502"
      ],
      "id": "Marlin.M502[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Factory Reset",
      "url": "https://marlinfw.org/docs/gcode/M502"
    },
    {
      "brief": "",
      "codes": [
        "M502"
      ],
      "id": "RepRap.M502[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M502: Restore Default Settings",
      "url": "https://reprap.org/wiki/G-code#M502:_Restore_Default_Settings"
    }
  ],
  "M503": [
    {
      "brief": "Report all settings that may be saved to EEPROM.",
      "codes": [
        "M503"
      ],
      "id": "Marlin.M503[0]",
      "parameters": [
        {
          "description": "Detailed output flag. (`true` if omitted.)",
          "label": "[S<flag>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "flag"
            }
          ]
        },
        {
          "description": "Save the embedded configuration ZIP file to the SD Card or Flash Drive.",
          "label": "[C<flag>]",
          "optional": true,
          "requires": "CONFIGURATION_EMBEDDING",
          "since": "2.0.9.3",
          "tag": "C",
          "values": [
            {
              "type": "flag"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Report Settings",
      "url": "https://marlinfw.org/docs/gcode/M503"
    },
    {
      "brief": "",
      "codes": [
        "M503"
      ],
      "id": "RepRap.M503[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M503: Report Current Settings",
      "url": "https://reprap.org/wiki/G-code#M503:_Report_Current_Settings"
    }
  ],
  "M504": [
    {
      "brief": "Validate the contents of the EEPROM.",
      "codes": [
        "M504"
      ],
      "id": "Marlin.M504[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Validate EEPROM contents",
      "url": "https://marlinfw.org/docs/gcode/M504"
    },
    {
      "brief": "",
      "codes": [
        "M504"
      ],
      "id": "RepRap.M504[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M504: Validate EEPROM",
      "url": "https://reprap.org/wiki/G-code#M504:_Validate_EEPROM"
    }
  ],
  "M505": [
    {
      "brief": "This command erase all EEPROM and reset the board.",
      "codes": [
        "M505"
      ],
      "id": "RepRap.M505[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M505: Clear EEPROM and RESET Printer",
      "url": "https://reprap.org/wiki/G-code#M505:_Clear_EEPROM_and_RESET_Printer"
    },
    {
      "brief": "",
      "codes": [
        "M505"
      ],
      "id": "RepRap.M505[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M505: Set configuration file folder",
      "url": "https://reprap.org/wiki/G-code#M505:_Set_configuration_file_folder"
    }
  ],
  "M509": [
    {
      "brief": "Resets the language to English.\nOnly on Original Prusa i3 MK2.5/s and MK3/s with multiple languages.",
      "codes": [
        "M509"
      ],
      "id": "RepRap.M509[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M509: Force language selection",
      "url": "https://reprap.org/wiki/G-code#M509:_Force_language_selection"
    }
  ],
  "M510": [
    {
      "brief": "Lock the machine if it has a passcode",
      "codes": [
        "M510"
      ],
      "id": "Marlin.M510[0]",
      "parameters": [],
      "related": [
        "M511",
        "M512"
      ],
      "source": "Marlin",
      "title": "Lock Machine",
      "url": "https://marlinfw.org/docs/gcode/M510"
    },
    {
      "brief": "Lock the machine. When the machine is locked a passcode is required to unlock it. Use M511 P with your passcode to unlock the machine. In Marlin this feature is enabled with the PASSWORD_FEATURE option.",
      "codes": [
        "M510"
      ],
      "id": "RepRap.M510[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M510: Lock Machine",
      "url": "https://reprap.org/wiki/G-code#M510:_Lock_Machine"
    }
  ],
  "M511": [
    {
      "brief": "Unlock the machine if it has a passcode",
      "codes": [
        "M511"
      ],
      "id": "Marlin.M511[0]",
      "parameters": [
        {
          "description": "The passcode to try.",
          "label": "P<passcode>",
          "optional": false,
          "tag": "P",
          "values": [
            {
              "tag": "passcode",
              "type": "int"
            }
          ]
        }
      ],
      "related": [
        "M510",
        "M512"
      ],
      "source": "Marlin",
      "title": "Unlock Machine",
      "url": "https://marlinfw.org/docs/gcode/M511"
    },
    {
      "brief": "Check the given passcode and unlock the machine if it is correct. Otherwise, delay for a period of time before allowing another attempt. In Marlin this feature is enabled with the PASSWORD_FEATURE option.",
      "codes": [
        "M511"
      ],
      "id": "RepRap.M511[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M511: Unlock Machine with Passcode",
      "url": "https://reprap.org/wiki/G-code#M511:_Unlock_Machine_with_Passcode"
    }
  ],
  "M512": [
    {
      "brief": "Set a numeric passcode for locking the machine",
      "codes": [
        "M512"
      ],
      "id": "Marlin.M512[0]",
      "parameters": [
        {
          "description": "Current passcode. This must be correct to clear or change the passcode.",
          "label": "P<password>",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "password",
              "type": "int"
            }
          ]
        },
        {
          "description": "If `S` is included the new passcode will be set to this value.",
          "label": "[S<password>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "password",
              "type": "int"
            }
          ]
        }
      ],
      "related": [
        "M510",
        "M511"
      ],
      "source": "Marlin",
      "title": "Set Passcode",
      "url": "https://marlinfw.org/docs/gcode/M512"
    },
    {
      "brief": "Check the given passcode (P) and if it is correct clear the passcode. If S is given, set a new passcode. In Marlin this feature is enabled with the PASSWORD_CHANGE_GCODE option.",
      "codes": [
        "M512"
      ],
      "id": "RepRap.M512[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M512: Set Passcode",
      "url": "https://reprap.org/wiki/G-code#M512:_Set_Passcode"
    }
  ],
  "M524": [
    {
      "brief": "Abort an SD print started with [`M24`](/docs/gcode/M024.html)",
      "codes": [
        "M524"
      ],
      "id": "Marlin.M524[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Abort SD print",
      "url": "https://marlinfw.org/docs/gcode/M524"
    },
    {
      "brief": "",
      "codes": [
        "M524"
      ],
      "id": "RepRap.M524[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M524: Abort SD Printing",
      "url": "https://reprap.org/wiki/G-code#M524:_Abort_SD_Printing"
    }
  ],
  "M530": [
    {
      "brief": "",
      "codes": [
        "M530"
      ],
      "id": "RepRap.M530[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M530: Enable printing mode",
      "url": "https://reprap.org/wiki/G-code#M530:_Enable_printing_mode"
    }
  ],
  "M531": [
    {
      "brief": "",
      "codes": [
        "M531"
      ],
      "id": "RepRap.M531[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M531: Set print name",
      "url": "https://reprap.org/wiki/G-code#M531:_Set_print_name"
    }
  ],
  "M532": [
    {
      "brief": "",
      "codes": [
        "M532"
      ],
      "id": "RepRap.M532[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M532: Set print progress",
      "url": "https://reprap.org/wiki/G-code#M532:_Set_print_progress"
    }
  ],
  "M540": [
    {
      "brief": "Abort SD printing when an endstop is triggered.",
      "codes": [
        "M540"
      ],
      "id": "Marlin.M540[0]",
      "parameters": [
        {
          "description": "Whether (1) or not (0) to abort SD printing on endstop hit.",
          "label": "S<flag>",
          "optional": false,
          "tag": "S",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Endstops Abort SD",
      "url": "https://marlinfw.org/docs/gcode/M540"
    },
    {
      "brief": "",
      "codes": [
        "M540"
      ],
      "id": "RepRap.M540[0]",
      "parameters": [
        {
          "description": " The MAC address",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M540: Set MAC address",
      "url": "https://reprap.org/wiki/G-code#M540:_Set_MAC_address"
    }
  ],
  "M540 in Marlin": [
    {
      "brief": "",
      "codes": [
        "M540 in Marlin"
      ],
      "id": "RepRap.M540 in Marlin[0]",
      "parameters": [
        {
          "description": " state, S1=enable, S0=disable",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M540 in Marlin: Enable/Disable \"Stop SD Print on Endstop Hit\"",
      "url": "https://reprap.org/wiki/G-code#M540_in_Marlin:_Enable.2FDisable_.22Stop_SD_Print_on_Endstop_Hit.22"
    }
  ],
  "M550": [
    {
      "brief": "",
      "codes": [
        "M550"
      ],
      "id": "RepRap.M550[0]",
      "parameters": [
        {
          "description": " Machine name",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M550: Set Name",
      "url": "https://reprap.org/wiki/G-code#M550:_Set_Name"
    }
  ],
  "M551": [
    {
      "brief": "",
      "codes": [
        "M551"
      ],
      "id": "RepRap.M551[0]",
      "parameters": [
        {
          "description": " Password",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M551: Set Password",
      "url": "https://reprap.org/wiki/G-code#M551:_Set_Password"
    }
  ],
  "M552": [
    {
      "brief": "",
      "codes": [
        "M552"
      ],
      "id": "RepRap.M552[0]",
      "parameters": [
        {
          "description": " (Optional) Number of the network interface to manage (defaults to 0)",
          "label": "Innn",
          "optional": true,
          "tag": "I",
          "values": []
        },
        {
          "description": " IP address, 0.0.0.0 means acquire an IP address using DHCP",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " (optional) -1 = reset network interface, 0 = disable networking, 1 = enable networking as a client, 2 = enable networking as an access point (WiFi-enabled electronics only)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " (optional, RepRapFirmware 1.17 and earlier only) HTTP port, default 80",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M552: Set IP address, enable/disable network interface",
      "url": "https://reprap.org/wiki/G-code#M552:_Set_IP_address.2C_enable.2Fdisable_network_interface"
    }
  ],
  "M553": [
    {
      "brief": "",
      "codes": [
        "M553"
      ],
      "id": "RepRap.M553[0]",
      "parameters": [
        {
          "description": " (Optional) Number of the network interface to manage (defaults to 0)",
          "label": "Innn",
          "optional": true,
          "tag": "I",
          "values": []
        },
        {
          "description": " Net mask",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M553: Set Netmask",
      "url": "https://reprap.org/wiki/G-code#M553:_Set_Netmask"
    }
  ],
  "M554": [
    {
      "brief": "",
      "codes": [
        "M554"
      ],
      "id": "RepRap.M554[0]",
      "parameters": [
        {
          "description": " (Optional) Number of the network interface to manage (defaults to 0)",
          "label": "Innn",
          "optional": true,
          "tag": "I",
          "values": []
        },
        {
          "description": " Gateway",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " (Optional) DNS server (only supported by DSF 3.3 with DuetPi system config plugin)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M554: Set Gateway and/or DNS server",
      "url": "https://reprap.org/wiki/G-code#M554:_Set_Gateway_and.2For_DNS_server"
    }
  ],
  "M555": [
    {
      "brief": "",
      "codes": [
        "M555"
      ],
      "id": "RepRap.M555[0]",
      "parameters": [
        {
          "description": " Emulation type",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M555: Set compatibility",
      "url": "https://reprap.org/wiki/G-code#M555:_Set_compatibility"
    }
  ],
  "M556": [
    {
      "brief": "",
      "codes": [
        "M556"
      ],
      "id": "RepRap.M556[0]",
      "parameters": [
        {
          "description": " Height of the measured distances",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Deviation in X direction",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Deviation in Y direction",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Deviation in Z direction",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " Apply XY compensation to Y axis instead of X (defaults to 0, requires RRF 3.2-b4 or newer)",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M556: Axis compensation",
      "url": "https://reprap.org/wiki/G-code#M556:_Axis_compensation"
    }
  ],
  "M557": [
    {
      "brief": "",
      "codes": [
        "M557"
      ],
      "id": "RepRap.M557[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M557: Set Z probe point or define probing grid",
      "url": "https://reprap.org/wiki/G-code#M557:_Set_Z_probe_point_or_define_probing_grid"
    }
  ],
  "M558": [
    {
      "brief": "",
      "codes": [
        "M558"
      ],
      "id": "RepRap.M558[0]",
      "parameters": [
        {
          "description": " Z probe type",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Feed rate (i.e. probing speed, mm/min)",
          "label": "Fnnn",
          "optional": true,
          "tag": "F",
          "values": []
        },
        {
          "description": " Dive height (mm)",
          "label": "Hnnn",
          "optional": true,
          "tag": "H",
          "values": []
        },
        {
          "description": " Invert (I1) or do not invert (I0) the Z probe reading (RepRapFirmware 1.16 and later)",
          "label": "Innn",
          "optional": true,
          "tag": "I",
          "values": []
        },
        {
          "description": " Z probe recovery time after triggering, default zero (seconds) (RepRapFirmware 1.17 and later)",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " Travel speed to and between probe points (mm/min)",
          "label": "Tnnn",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " Maximum number of times to probe each point, default 1 (RepRapFirmware 1.21 and later)",
          "label": "Annn",
          "optional": true,
          "tag": "A",
          "values": []
        },
        {
          "description": " Tolerance when probing multiple times, default 0.03 (RepRapFirmware 1.21 and later)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " B1 turns off all heaters during probing moves and during the probe recovery time (RepRapFirmware 1.21 and later)",
          "label": "Bn",
          "optional": true,
          "tag": "B",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M558: Set Z probe type",
      "url": "https://reprap.org/wiki/G-code#M558:_Set_Z_probe_type"
    }
  ],
  "M559": [
    {
      "brief": "",
      "codes": [
        "M559"
      ],
      "id": "RepRap.M559[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M559: Upload configuration file",
      "url": "https://reprap.org/wiki/G-code#M559:_Upload_configuration_file"
    }
  ],
  "M560": [
    {
      "brief": "",
      "codes": [
        "M560"
      ],
      "id": "RepRap.M560[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M560: Upload web page file",
      "url": "https://reprap.org/wiki/G-code#M560:_Upload_web_page_file"
    }
  ],
  "M561": [
    {
      "brief": "",
      "codes": [
        "M561"
      ],
      "id": "RepRap.M561[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M561: Set Identity Transform",
      "url": "https://reprap.org/wiki/G-code#M561:_Set_Identity_Transform"
    }
  ],
  "M562": [
    {
      "brief": "",
      "codes": [
        "M562"
      ],
      "id": "RepRap.M562[0]",
      "parameters": [
        {
          "description": " Heater number",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M562: Reset temperature fault",
      "url": "https://reprap.org/wiki/G-code#M562:_Reset_temperature_fault"
    }
  ],
  "M563": [
    {
      "brief": "",
      "codes": [
        "M563"
      ],
      "id": "RepRap.M563[0]",
      "parameters": [
        {
          "description": " Tool number",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Tool name (optional)",
          "label": "S\"name\"",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Extruder drive(s)",
          "label": "Dnnn",
          "optional": true,
          "tag": "D",
          "values": []
        },
        {
          "description": " Heater(s)",
          "label": "Hnnn",
          "optional": true,
          "tag": "H",
          "values": []
        },
        {
          "description": " Fan(s) to map the print cooling fan to (RepRapFirmware 1.16 and later)",
          "label": "Fnnn",
          "optional": true,
          "tag": "F",
          "values": []
        },
        {
          "description": " Axis or axes to map X movement to (RepRapFirmware 1.16 and later)",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Axis or axes to map Y movement to",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Drive to use for filament mapping. By default RRF will use the first and only extruder drive if this parameter is not specified (supported by RRF >= 2.02)",
          "label": "Lnnn",
          "optional": true,
          "tag": "L",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M563: Define or remove a tool",
      "url": "https://reprap.org/wiki/G-code#M563:_Define_or_remove_a_tool"
    }
  ],
  "M564": [
    {
      "brief": "",
      "codes": [
        "M564"
      ],
      "id": "RepRap.M564[0]",
      "parameters": [
        {
          "description": " H1 = forbid movement of axes that have not been homed, H0 = allow movement of axes that have not been homed (RepRapFirmware 1.21 and later)",
          "label": "Hnnn",
          "optional": true,
          "tag": "H",
          "values": []
        },
        {
          "description": " S1 = limit movement within axis boundaries, S0 = allow movement outside boundaries",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M564: Limit axes",
      "url": "https://reprap.org/wiki/G-code#M564:_Limit_axes"
    }
  ],
  "M565": [
    {
      "brief": "",
      "codes": [
        "M565"
      ],
      "id": "RepRap.M565[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M565: Set Z probe offset",
      "url": "https://reprap.org/wiki/G-code#M565:_Set_Z_probe_offset"
    }
  ],
  "M566": [
    {
      "brief": "",
      "codes": [
        "M566"
      ],
      "id": "RepRap.M566[0]",
      "parameters": [
        {
          "description": " Maximum instantaneous speed change of the X axis (mm/min)",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Maximum instantaneous speed change of the Y axis",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Maximum instantaneous speed change of the Z axis",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " Maximum instantaneous speed change of the extruder drives",
          "label": "Ennn",
          "optional": true,
          "tag": "E",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M566: Set allowable instantaneous speed change",
      "url": "https://reprap.org/wiki/G-code#M566:_Set_allowable_instantaneous_speed_change"
    }
  ],
  "M567": [
    {
      "brief": "",
      "codes": [
        "M567"
      ],
      "id": "RepRap.M567[0]",
      "parameters": [
        {
          "description": " Tool number",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Mix ratios",
          "label": "Ennn",
          "optional": true,
          "tag": "E",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M567: Set tool mix ratios",
      "url": "https://reprap.org/wiki/G-code#M567:_Set_tool_mix_ratios"
    }
  ],
  "M568": [
    {
      "brief": "",
      "codes": [
        "M568"
      ],
      "id": "RepRap.M568[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M568: Tool settings",
      "url": "https://reprap.org/wiki/G-code#M568:_Tool_settings"
    },
    {
      "brief": "This command is obsolete. When using a tool defined as a mixing extruder, RepRapFirmware applies the mix ratio defined by M567 whenever only one E parameter is provided in G1 commands. When multiple colon-separated E values are provided in the G1 command, they will be used as the individual amounts to extrude.",
      "codes": [
        "M568"
      ],
      "id": "RepRap.M568[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M568: Turn off/on tool mix ratios (obsolete meaning in old RepRapFirmware versions)",
      "url": "https://reprap.org/wiki/G-code#M568:_Turn_off.2Fon_tool_mix_ratios_.28obsolete_meaning_in_old_RepRapFirmware_versions.29"
    }
  ],
  "M569": [
    {
      "brief": "Toggle stealthChop",
      "codes": [
        "M569"
      ],
      "id": "Marlin.M569[0]",
      "parameters": [
        {
          "description": "Stepping mode for the X stepper",
          "label": "[X]",
          "optional": true,
          "tag": "X"
        },
        {
          "description": "Stepping mode for the Y stepper",
          "label": "[Y]",
          "optional": true,
          "tag": "Y"
        },
        {
          "description": "Stepping mode for the Z stepper",
          "label": "[Z]",
          "optional": true,
          "tag": "Z"
        },
        {
          "description": "Stepping mode for the E0 stepper",
          "label": "[E]",
          "optional": true,
          "tag": "E"
        },
        {
          "description": "Index for multiple steppers. Use `I1` for X2, Y2, and/or Z2, and `I2` for Z3.",
          "label": "[I<int>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "type": "int",
              "unit": "index"
            }
          ]
        },
        {
          "description": "Index (tool) number for the E axis. If not specified, the E0 extruder.",
          "label": "[T<int>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "type": "int",
              "unit": "index"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set TMC stepping mode",
      "url": "https://marlinfw.org/docs/gcode/M569"
    },
    {
      "brief": "",
      "codes": [
        "M569"
      ],
      "id": "RepRap.M569[0]",
      "parameters": [
        {
          "description": " Motor driver number",
          "label": "Pnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Direction of movement of the motor(s) attached to this driver: 0 = backwards, 1 = forwards (default 1)",
          "label": "Sn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Driver enable polarity: 0 = active low, 1 = active high (default 0)",
          "label": "Rn",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " Minimum driver step pulse width and interval in microseconds (RepRapFirmware 1.14 and later)",
          "label": "Tnn",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " Minimum driver step pulse width, step pulse interval, direction-to-step setup time and step-to-direction hold time, in microseconds (RepRapFirmware 1.21 and later)",
          "label": "Taa:bb:cc:dd",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " Stepper driver mode (RepRapFirmware 2.0 and later): 0=constant off time, 1=random off time, 2=spread cycle, 3=stealthChop, 4=closed loop",
          "label": "Dnn",
          "optional": true,
          "tag": "D",
          "values": []
        },
        {
          "description": " (firmware 2.02 and later) Off-time in the chopper control register, 1 to 15",
          "label": "Fnn",
          "optional": true,
          "tag": "F",
          "values": []
        },
        {
          "description": " (firmware 2.02 and later) Blanking time (tbl) in the chopper control register, 0 to 3. See the TMC driver datasheet.",
          "label": "Bnn",
          "optional": true,
          "tag": "B",
          "values": []
        },
        {
          "description": " or Yaa:bb:cc (firmware 2.02 and later) Hysteresis start, end and decrement values in the chopper control register. See the TMC driver datasheet for the meaning.",
          "label": "Yaa:bb",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Custom chopper control register value (RepRapFirmware 2.0 and later). Do not change this value without having a good understanding of the stepper driver driver chip!",
          "label": "Cnnn",
          "optional": true,
          "tag": "C",
          "values": []
        },
        {
          "description": " (firmware 2.02 and later) t_high parameter for those stepper driver chips that support it (e.g. TMC2208, 2224). Send M569 P# (where # is the driver number) with no additional parameters to see how this translates into mm/sec. See also the V parameter.",
          "label": "Hnn",
          "optional": true,
          "tag": "H",
          "values": []
        },
        {
          "description": " (firmware 2.02 and later) tpwmthrs parameter for those stepper driver chips that support it (e.g. TMC2208, 2224). This is the interval in clock cycles between 1/256 microsteps below which the drivers will switch from stealthChop to to spreadCycle mode. Only applies when the driver is configured in stealthChop mode. Typical value are from 100 (high speed) to 4000 (low speed). Send M569 P# (where # is the driver number) with no additional parameters to see how this translates into axis speed in mm/sec.",
          "label": "Vnnn",
          "optional": true,
          "tag": "V",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M569: Stepper driver control",
      "url": "https://reprap.org/wiki/G-code#M569:_Stepper_driver_control"
    }
  ],
  "M569.1": [
    {
      "brief": "",
      "codes": [
        "M569.1"
      ],
      "id": "RepRap.M569.1[0]",
      "parameters": [
        {
          "description": " or Pn.n Motor driver number, or board address and driver number",
          "label": "Pn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Mode: 0=open loop (default), 1=closed loop (requires an encoder to be selected, see the T parameter)",
          "label": "Sn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Encoder type: 0=none, 1=linear quadrature encoder on axis, 2=quadrature encoder on motor shaft, 3=AS5047D encoder on motor shaft, 4=TLI5012B encoder on motor shaft",
          "label": "Tn",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " Encoder counts per mm (linear encoder) or per rotation (rotary encoder). Only used if the encoder type is 1 or 2.",
          "label": "En.n",
          "optional": true,
          "tag": "E",
          "values": []
        },
        {
          "description": " Proportional constant",
          "label": "Rn.n",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " Integral constant",
          "label": "In.n",
          "optional": true,
          "tag": "I",
          "values": []
        },
        {
          "description": " Derivative constant",
          "label": "Dn.n",
          "optional": true,
          "tag": "D",
          "values": []
        },
        {
          "description": " Minimum holding current as a percentage of the configured current when operating in closed loop mode",
          "label": "Hn",
          "optional": true,
          "tag": "H",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M569.1: Stepper driver closed loop configuration",
      "url": "https://reprap.org/wiki/G-code#M569.1:_Stepper_driver_closed_loop_configuration"
    }
  ],
  "M569.2": [
    {
      "brief": "",
      "codes": [
        "M569.2"
      ],
      "id": "RepRap.M569.2[0]",
      "parameters": [
        {
          "description": " Motor driver number",
          "label": "Pnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Register number, 0-127",
          "label": "Rnn",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " Value to write (optional)",
          "label": "Vnnnn",
          "optional": true,
          "tag": "V",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M569.2: Read or write any stepper driver register",
      "url": "https://reprap.org/wiki/G-code#M569.2:_Read_or_write_any_stepper_driver_register"
    }
  ],
  "M569.3": [
    {
      "brief": "This causes the RepRap machine to report its current motor encoder positions to the host in units of arc degrees (1/360'ths of turns), relative to some reference position that you set with the S parameter.\nBefore the first call with the S parameter, the reference is unknown and arbitrary.",
      "codes": [
        "M569.3"
      ],
      "id": "RepRap.M569.3[0]",
      "parameters": [
        {
          "description": " or Pn.n Motor driver number, or board address and driver number. Several (remote) drivers may be specified, separated by colon. No more than number of visible axes, as specified by M584 P parameter, are allowed.",
          "label": "Pn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Sets an encoder reference point. Current and subsequent M569.3 Pn.n calls returns numbers that are relative to the M569.3 Pn.n S call.",
          "label": "S",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M569.3: Read Motor Driver Encoder",
      "url": "https://reprap.org/wiki/G-code#M569.3:_Read_Motor_Driver_Encoder"
    }
  ],
  "M569.4": [
    {
      "brief": "Tell one or more motor drivers to apply a specified torque regardless of position.",
      "codes": [
        "M569.4"
      ],
      "id": "RepRap.M569.4[0]",
      "parameters": [
        {
          "description": " or Pn.n Motor driver number, or board address and driver number. Can also be a colon separated list of driver numbers.",
          "label": "Pn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Where n is the mode/torque to apply in units of Nm.",
          "label": "Tn",
          "optional": true,
          "tag": "T",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M569.4: Set Motor Driver Torque Mode",
      "url": "https://reprap.org/wiki/G-code#M569.4:_Set_Motor_Driver_Torque_Mode"
    }
  ],
  "M569.5": [
    {
      "brief": "",
      "codes": [
        "M569.5"
      ],
      "id": "RepRap.M569.5[0]",
      "parameters": [
        {
          "description": " Motor CAN board address and driver number",
          "label": "Pn.n",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M569.5: Collect Data from Closed-loop Driver",
      "url": "https://reprap.org/wiki/G-code#M569.5:_Collect_Data_from_Closed-loop_Driver"
    }
  ],
  "M569.6": [
    {
      "brief": "",
      "codes": [
        "M569.6"
      ],
      "id": "RepRap.M569.6[0]",
      "parameters": [
        {
          "description": " Motor CAN board address and driver number",
          "label": "Pn.n",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M569.6: Execute Closed-loop Driver Tuning Move",
      "url": "https://reprap.org/wiki/G-code#M569.6:_Execute_Closed-loop_Driver_Tuning_Move"
    }
  ],
  "M569.7": [
    {
      "brief": "",
      "codes": [
        "M569.7"
      ],
      "id": "RepRap.M569.7[0]",
      "parameters": [
        {
          "description": " Motor CAN board address (if applicable) and driver number",
          "label": "Pn.n",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Port name of the brake control port. The port must be on the same CAN board as the driver. The CAN address does not need to be specified in the port name, but if it is then it must be the same as the driver address.",
          "label": "C\"port\"",
          "optional": true,
          "tag": "C",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M569.7: Configure motor brake port",
      "url": "https://reprap.org/wiki/G-code#M569.7:_Configure_motor_brake_port"
    }
  ],
  "M570": [
    {
      "brief": "",
      "codes": [
        "M570"
      ],
      "id": "RepRap.M570[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M570: Configure heater fault detection",
      "url": "https://reprap.org/wiki/G-code#M570:_Configure_heater_fault_detection"
    }
  ],
  "M571": [
    {
      "brief": "",
      "codes": [
        "M571"
      ],
      "id": "RepRap.M571[0]",
      "parameters": [
        {
          "description": " Output value",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Output PWM frequency (RepRapFirmware 1.17 and later)",
          "label": "Fnnn",
          "optional": true,
          "tag": "F",
          "values": []
        },
        {
          "description": " Logical pin number (RepRapFirmware 1.17 and later), defaults to the FAN0 output until M571 with a P parameter has been seen",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M571: Set output on extrude",
      "url": "https://reprap.org/wiki/G-code#M571:_Set_output_on_extrude"
    }
  ],
  "M572": [
    {
      "brief": "",
      "codes": [
        "M572"
      ],
      "id": "RepRap.M572[0]",
      "parameters": [
        {
          "description": " Extruder number",
          "label": "Dnnn",
          "optional": true,
          "tag": "D",
          "values": []
        },
        {
          "description": " Pressure advance amount (in seconds)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M572: Set or report extruder pressure advance",
      "url": "https://reprap.org/wiki/G-code#M572:_Set_or_report_extruder_pressure_advance"
    }
  ],
  "M573": [
    {
      "brief": "",
      "codes": [
        "M573"
      ],
      "id": "RepRap.M573[0]",
      "parameters": [
        {
          "description": " Heater number",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M573: Report heater PWM",
      "url": "https://reprap.org/wiki/G-code#M573:_Report_heater_PWM"
    }
  ],
  "M574": [
    {
      "brief": "",
      "codes": [
        "M574"
      ],
      "id": "RepRap.M574[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M574: Set endstop configuration",
      "url": "https://reprap.org/wiki/G-code#M574:_Set_endstop_configuration"
    }
  ],
  "M575": [
    {
      "brief": "Change the serial baud rate",
      "codes": [
        "M575"
      ],
      "id": "Marlin.M575[0]",
      "parameters": [
        {
          "description": "The baud rate to set. Permitted values are:\n  - 2400 (24)\n  - 9600 (96)\n  - 19200 (19, 192)\n  - 38400 (38, 384)\n  - 57600 (57, 576)\n  - 115200 (115, 1152)\n  - 250000 (250)\n  - 500000 (500)\n  - 1000000\n",
          "label": "B<baud>",
          "optional": false,
          "tag": "B",
          "values": [
            {
              "tag": "baud"
            }
          ]
        },
        {
          "description": "Serial Port index. Omit for all serial ports.",
          "label": "[P]",
          "optional": true,
          "tag": "P"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Serial baud rate",
      "url": "https://marlinfw.org/docs/gcode/M575"
    },
    {
      "brief": "",
      "codes": [
        "M575"
      ],
      "id": "RepRap.M575[0]",
      "parameters": [
        {
          "description": " Serial channel number",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Baud rate",
          "label": "Bnnn",
          "optional": true,
          "tag": "B",
          "values": []
        },
        {
          "description": " Whether checksums should be used",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M575: Set serial comms parameters",
      "url": "https://reprap.org/wiki/G-code#M575:_Set_serial_comms_parameters"
    }
  ],
  "M576": [
    {
      "brief": "",
      "codes": [
        "M576"
      ],
      "id": "RepRap.M576[0]",
      "parameters": [
        {
          "description": " Maximum delay between full SPI transfers (in ms, defaults to 25ms)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Maximum delay between full SPI transfers when a file is open (in ms, defaults to 5ms)",
          "label": "Fnnn",
          "optional": true,
          "tag": "F",
          "values": []
        },
        {
          "description": " Number of events required to skip the delay (defaults to 4)",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M576: Set SPI comms parameters",
      "url": "https://reprap.org/wiki/G-code#M576:_Set_SPI_comms_parameters"
    }
  ],
  "M577": [
    {
      "brief": "",
      "codes": [
        "M577"
      ],
      "id": "RepRap.M577[0]",
      "parameters": [
        {
          "description": " Desired endstop level",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Select X axis endstop",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Select Y axis endstop",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Select Z axis endstop",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " Select extruder drive endstop",
          "label": "Ennn",
          "optional": true,
          "tag": "E",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M577: Wait until endstop is triggered",
      "url": "https://reprap.org/wiki/G-code#M577:_Wait_until_endstop_is_triggered"
    }
  ],
  "M578": [
    {
      "brief": "",
      "codes": [
        "M578"
      ],
      "id": "RepRap.M578[0]",
      "parameters": [
        {
          "description": " Inkjet head number",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Bit pattern",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M578: Fire inkjet bits",
      "url": "https://reprap.org/wiki/G-code#M578:_Fire_inkjet_bits"
    }
  ],
  "M579": [
    {
      "brief": "",
      "codes": [
        "M579"
      ],
      "id": "RepRap.M579[0]",
      "parameters": [
        {
          "description": " Scale factor for X axis",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Scale factor for Y axis",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Scale factor for Z axis",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M579: Scale Cartesian axes",
      "url": "https://reprap.org/wiki/G-code#M579:_Scale_Cartesian_axes"
    }
  ],
  "M580": [
    {
      "brief": "",
      "codes": [
        "M580"
      ],
      "id": "RepRap.M580[0]",
      "parameters": [
        {
          "description": " Whether Roland mode should be activated",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " Initial text to send to the Roland controller",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M580: Select Roland",
      "url": "https://reprap.org/wiki/G-code#M580:_Select_Roland"
    }
  ],
  "M581": [
    {
      "brief": "",
      "codes": [
        "M581"
      ],
      "id": "RepRap.M581[0]",
      "parameters": [
        {
          "description": " Logical trigger number to associate the endstop input(s) with, from zero up to a firmware-specific maximum (e.g. 9 for RepRapFirmware)",
          "label": "Tnn",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " Selects endstop input(s) to monitor",
          "label": "X, Y, Z, E",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Reserved, may be used in future to allow general I/O pins to cause triggers",
          "label": "P",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Whether trigger occurs on a rising edge of that input (S1, default), falling edge (S0), or ignores that input (S-1). By default, all triggers ignore all inputs.",
          "label": "S",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Condition: whether to trigger at any time (C0, default) or only when printing a file from SD card (C1)",
          "label": "C",
          "optional": true,
          "tag": "C",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M581: Configure external trigger",
      "url": "https://reprap.org/wiki/G-code#M581:_Configure_external_trigger"
    }
  ],
  "M582": [
    {
      "brief": "",
      "codes": [
        "M582"
      ],
      "id": "RepRap.M582[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M582: Check external trigger",
      "url": "https://reprap.org/wiki/G-code#M582:_Check_external_trigger"
    }
  ],
  "M584": [
    {
      "brief": "",
      "codes": [
        "M584"
      ],
      "id": "RepRap.M584[0]",
      "parameters": [
        {
          "description": " Driver number(s) for X motor(s)",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Driver number(s) for Y motor(s)",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Driver number(s) for Z motor(s)",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " Driver number(s) for additional axes U, V, W, A, B and C (UVW RepRapFirmware 1.16 and later; ABC RepRapFirmware 1.19 and later)",
          "label": "U,V,W, A, B, Cnnn",
          "optional": true,
          "tag": "U",
          "values": []
        },
        {
          "description": " Driver number(s) for E motor(s)",
          "label": "Ennn",
          "optional": true,
          "tag": "E",
          "values": []
        },
        {
          "description": " Number of visible axes, defaults to the total number of axes configured.",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M584: Set drive mapping",
      "url": "https://reprap.org/wiki/G-code#M584:_Set_drive_mapping"
    }
  ],
  "M585": [
    {
      "brief": "In machines with a tool probe this probes the currently selected tool against it and corrects the offsets set by the G10 command (q.v.).",
      "codes": [
        "M585"
      ],
      "id": "RepRap.M585[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M585: Probe Tool",
      "url": "https://reprap.org/wiki/G-code#M585:_Probe_Tool"
    }
  ],
  "M586": [
    {
      "brief": "",
      "codes": [
        "M586"
      ],
      "id": "RepRap.M586[0]",
      "parameters": [
        {
          "description": " Protocol: 0 = HTTP or HTTPS, 1 = FTP or SFTP, 2 = Telnet or SSH (which of the two choices depends on the T parameter)",
          "label": "Pnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " 0 = disable this protocol, 1 = enable this protocol",
          "label": "Snn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " TCP port number to use for the specified protocol. Ignored unless S = 1. If this parameter is not provided then the default port for that protocol and TLS setting is used.",
          "label": "Rnn",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " 0 = don't use TLS, 1 = use TLS. Ignored unless S = 1. If this parameter is not provided, then TLS will be used if the firmware supports it and a security certificate has been configured. If T1 is given but the firmware does not support TLS or no certificate is available, then the protocol will not be enabled and an error message will be returned.",
          "label": "Tnn",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " Set or reset allowed site for cross-orgin HTTP requests (RRF > 3.2-b4.1)",
          "label": "C\"site\"",
          "optional": true,
          "tag": "C",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M586: Configure network protocols",
      "url": "https://reprap.org/wiki/G-code#M586:_Configure_network_protocols"
    }
  ],
  "M587": [
    {
      "brief": "",
      "codes": [
        "M587"
      ],
      "id": "RepRap.M587[0]",
      "parameters": [
        {
          "description": " Network SSID",
          "label": "Sccc",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Network password",
          "label": "Pccc",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " (optional) IP address to use when connected to this network. If zero or not specified then an IP address will be acquired via DHCP.",
          "label": "Inn.nn.nn.nn",
          "optional": true,
          "tag": "I",
          "values": []
        },
        {
          "description": " (optional) Gateway IP address to use when connected to this network.",
          "label": "Jnn.nn.nn.nn",
          "optional": true,
          "tag": "J",
          "values": []
        },
        {
          "description": " (optional) Netmask to use when connected to this network",
          "label": "Knn.nn.nn.nn",
          "optional": true,
          "tag": "K",
          "values": []
        },
        {
          "description": " (optional, supported only by DuetPi + DSF v3.3 or newer) DNS server to use",
          "label": "Lnn.nn.nn.nn",
          "optional": true,
          "tag": "L",
          "values": []
        },
        {
          "description": " (supported only by DuetPi + DSF v3.3 or newer) Country code for the WiFi adapter, only required if not set before",
          "label": "Cnnn",
          "optional": true,
          "tag": "C",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M587: Store WiFi host network in list, or list stored networks",
      "url": "https://reprap.org/wiki/G-code#M587:_Store_WiFi_host_network_in_list.2C_or_list_stored_networks"
    }
  ],
  "M588": [
    {
      "brief": "",
      "codes": [
        "M588"
      ],
      "id": "RepRap.M588[0]",
      "parameters": [
        {
          "description": " SSID to remove from the networks list",
          "label": "Sccc",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M588: Forget WiFi host network",
      "url": "https://reprap.org/wiki/G-code#M588:_Forget_WiFi_host_network"
    }
  ],
  "M589": [
    {
      "brief": "",
      "codes": [
        "M589"
      ],
      "id": "RepRap.M589[0]",
      "parameters": [
        {
          "description": " The SSID that the WiFi interface should use when it is commanded to run as an access point",
          "label": "Sccc",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " The WiFi password",
          "label": "Pccc",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " The IP address to use",
          "label": "Inn.nn.nn.nn",
          "optional": true,
          "tag": "I",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M589: Configure access point parameters",
      "url": "https://reprap.org/wiki/G-code#M589:_Configure_access_point_parameters"
    }
  ],
  "M590": [
    {
      "brief": "Report the current tool type, which may be \"Extruder,\" \"Picker,\" \"Laser,\" \"Foam Cutter,\" \"Milling,\" or any others implemented by the machine. Also report the tool index, such as \"0x01\" for the second extruder.",
      "codes": [
        "M590"
      ],
      "id": "RepRap.M590[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M590: Report current tool type and index",
      "url": "https://reprap.org/wiki/G-code#M590:_Report_current_tool_type_and_index"
    }
  ],
  "M591": [
    {
      "brief": "This configures filament sensing for the specified extruder. The sensor may be a simple filament presence detector, or a device that measures movement of filament, or both. The action on detecting a filament error is firmware-dependent, but would typically be to run a macro and/or to pause the print and display a message.",
      "codes": [
        "M591"
      ],
      "id": "RepRap.M591[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M591: Configure filament monitoring",
      "url": "https://reprap.org/wiki/G-code#M591:_Configure_filament_monitoring"
    }
  ],
  "M592": [
    {
      "brief": "",
      "codes": [
        "M592"
      ],
      "id": "RepRap.M592[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M592: Configure nonlinear extrusion",
      "url": "https://reprap.org/wiki/G-code#M592:_Configure_nonlinear_extrusion"
    }
  ],
  "M593": [
    {
      "brief": "",
      "codes": [
        "M593"
      ],
      "id": "RepRap.M593[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M593: Configure Dynamic Acceleration Adjustment",
      "url": "https://reprap.org/wiki/G-code#M593:_Configure_Dynamic_Acceleration_Adjustment"
    }
  ],
  "M594": [
    {
      "brief": "",
      "codes": [
        "M594"
      ],
      "id": "RepRap.M594[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M594: Enter/Leave Height Following mode",
      "url": "https://reprap.org/wiki/G-code#M594:_Enter.2FLeave_Height_Following_mode"
    }
  ],
  "M595": [
    {
      "brief": "",
      "codes": [
        "M595"
      ],
      "id": "RepRap.M595[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M595: Set movement queue length",
      "url": "https://reprap.org/wiki/G-code#M595:_Set_movement_queue_length"
    }
  ],
  "M6": [
    {
      "brief": "",
      "codes": [
        "M6"
      ],
      "id": "RepRap.M6[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M6: Tool change",
      "url": "https://reprap.org/wiki/G-code#M6:_Tool_change"
    }
  ],
  "M600": [
    {
      "brief": "Automatically change filament",
      "codes": [
        "M600"
      ],
      "id": "Marlin.M600[0]",
      "parameters": [
        {
          "description": "Target extruder",
          "label": "[T<index>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Retract before moving to change position (negative, default `PAUSE_PARK_RETRACT_LENGTH`)",
          "label": "[E<pos>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Amount of retraction for unload (negative)",
          "label": "[U<pos>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Load length, longer for bowden (negative)",
          "label": "[L<pos>]",
          "optional": true,
          "tag": "L",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "X position for filament change",
          "label": "[X<pos>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Y position for filament change",
          "label": "[Y<pos>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Z relative lift for filament change position",
          "label": "[Z<pos>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Number of beeps to alert user of filament change (default `FILAMENT_CHANGE_ALERT_BEEPS`)",
          "label": "[B<beeps>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "beeps",
              "type": "int"
            }
          ]
        },
        {
          "description": "Resume temperature. (AUTOTEMP: the min auto-temperature.)",
          "label": "[R<temp>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "temp",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Filament Change",
      "url": "https://marlinfw.org/docs/gcode/M600"
    },
    {
      "brief": "",
      "codes": [
        "M600"
      ],
      "id": "RepRap.M600[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M600: Set line cross section",
      "url": "https://reprap.org/wiki/G-code#M600:_Set_line_cross_section"
    },
    {
      "brief": "Pause for filament change.",
      "codes": [
        "M600"
      ],
      "id": "RepRap.M600[1]",
      "parameters": [
        {
          "description": "",
          "label": "X[pos]",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": "",
          "label": "Y[pos]",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": "",
          "label": "Z[relative lift]",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": "",
          "label": "E[initial retract]",
          "optional": true,
          "tag": "E",
          "values": []
        },
        {
          "description": "",
          "label": "L[later retract distance for removal]",
          "optional": true,
          "tag": "L",
          "values": []
        },
        {
          "description": " Automatically (only Prusa Firmware with MMU connected)",
          "label": "AUTO",
          "optional": true,
          "tag": "A",
          "values": []
        },
        {
          "description": " (no return) Don't return to the previous position after filament change",
          "label": "N",
          "optional": true,
          "tag": "N",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M600: Filament change pause",
      "url": "https://reprap.org/wiki/G-code#M600:_Filament_change_pause"
    }
  ],
  "M601": [
    {
      "brief": "Pauses print on Prusa i3 MK2/s,MK2.5/s,MK3/s.",
      "codes": [
        "M601"
      ],
      "id": "RepRap.M601[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M601: Pause print",
      "url": "https://reprap.org/wiki/G-code#M601:_Pause_print"
    }
  ],
  "M602": [
    {
      "brief": "Resumes print on Prusa i3 MK2/s,MK2.5/s,MK3/s.",
      "codes": [
        "M602"
      ],
      "id": "RepRap.M602[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M602: Resume print",
      "url": "https://reprap.org/wiki/G-code#M602:_Resume_print"
    }
  ],
  "M603": [
    {
      "brief": "Configure automatic filament change parameters",
      "codes": [
        "M603"
      ],
      "id": "Marlin.M603[0]",
      "parameters": [
        {
          "description": "Target extruder",
          "label": "[T<index>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Amount of retraction for unload (negative)",
          "label": "[U<pos>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        },
        {
          "description": "Load length, longer for bowden (negative)",
          "label": "[L<pos>]",
          "optional": true,
          "tag": "L",
          "values": [
            {
              "tag": "pos",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Configure Filament Change",
      "url": "https://marlinfw.org/docs/gcode/M603"
    },
    {
      "brief": "Stop print on Prusa i3 MK2/s, MK2.5/s, and MK3/s.",
      "codes": [
        "M603"
      ],
      "id": "RepRap.M603[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M603: Stop print (Prusa i3)",
      "url": "https://reprap.org/wiki/G-code#M603:_Stop_print_.28Prusa_i3.29"
    },
    {
      "brief": "This command configures Filament Change behavior in Marlin Firmware and in Prusa mini firmware under development.",
      "codes": [
        "M603"
      ],
      "id": "RepRap.M603[1]",
      "parameters": [
        {
          "description": " Select extruder to configure, active extruder if not specified (not used yet)",
          "label": "T[toolhead]",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " Retract distance for removal, for the specified extruder.",
          "label": "U[distance]",
          "optional": true,
          "tag": "U",
          "values": []
        },
        {
          "description": " Extrude distance for insertion, for the specified extruder.",
          "label": "L[distance]",
          "optional": true,
          "tag": "L",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M603: Configure Filament Change",
      "url": "https://reprap.org/wiki/G-code#M603:_Configure_Filament_Change"
    }
  ],
  "M605": [
    {
      "brief": "Set the behavior mode for dual nozzles",
      "codes": [
        "M605"
      ],
      "id": "Marlin.M605[0]",
      "parameters": [
        {
          "description": "Select the pin to set for all specified axes.",
          "label": "S<0|1|2>",
          "optional": false,
          "tag": "S",
          "values": [
            {
              "description": "Full control mode. Both carriages are free to move, constrained by safe distance. (Requires `DUAL_X_CARRIAGE`)",
              "tag": 0
            },
            {
              "description": "Auto-park mode. One carriage parks while the other moves. (Requires `DUAL_X_CARRIAGE`)",
              "tag": 1
            },
            {
              "description": "Duplication mode. Carriages and extruders move in unison.",
              "tag": 2
            }
          ]
        },
        {
          "description": "X distance between dual X carriages.  (Requires `DUAL_X_CARRIAGE`)",
          "label": "[X<float>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "type": "float",
              "unit": "linear"
            }
          ]
        },
        {
          "description": "Temperature difference to apply to E1.  (Requires `DUAL_X_CARRIAGE`)",
          "label": "[R<int>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "type": "int",
              "unit": "temp"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Dual Nozzle Mode",
      "url": "https://marlinfw.org/docs/gcode/M605"
    },
    {
      "brief": "Set Dual X-Carriage movement mode.",
      "codes": [
        "M605"
      ],
      "id": "RepRap.M605[0]",
      "parameters": [
        {
          "description": " Mode (see below)",
          "label": "S[mode]",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Optional X offset for Mode 2",
          "label": "X[duplication x-offset]",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Optional temperature difference for Mode 2",
          "label": "R[duplication temp offset]",
          "optional": true,
          "tag": "R",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M605: Set dual x-carriage movement mode",
      "url": "https://reprap.org/wiki/G-code#M605:_Set_dual_x-carriage_movement_mode"
    }
  ],
  "M650": [
    {
      "brief": "This command is sent by nanoDLP to set the parameters for the peel move used after curing a layer. RepRapFirmware 2.02 ignores it. If using RepRapFirmware 2.03 or later you can create a empty file M650.g to cause it to be ignored.",
      "codes": [
        "M650"
      ],
      "id": "RepRap.M650[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M650: Set peel move parameters",
      "url": "https://reprap.org/wiki/G-code#M650:_Set_peel_move_parameters"
    }
  ],
  "M651": [
    {
      "brief": "This command is sent by nanoDLP to execute a peel move after curing a layer. RepRapFirmware 2.02 executes macro /sys/peel-move.g in response to this command. For RepRapFirmware 2.03 and later, create a macro file M651.g containing the commands required to execute the peel move.",
      "codes": [
        "M651"
      ],
      "id": "RepRap.M651[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M651: Execute peel move",
      "url": "https://reprap.org/wiki/G-code#M651:_Execute_peel_move"
    }
  ],
  "M665": [
    {
      "brief": "Set SCARA geometry values",
      "codes": [
        "M665"
      ],
      "id": "Marlin.M665[0]",
      "parameters": [
        {
          "description": "Segments per second",
          "label": "[S<segments-per-second>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "segments-per-second",
              "type": "float"
            }
          ]
        },
        {
          "description": "Theta-Psi offset, added to the shoulder (A/X) angle",
          "label": "[P<theta-pi-offset>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "theta-pi-offset",
              "type": "float"
            }
          ]
        },
        {
          "description": "Theta offset, added to the elbow (B/Y) angle",
          "label": "[T<theta-offset>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "theta-offset",
              "type": "float"
            }
          ]
        },
        {
          "description": "Theta-Psi offset, alias for `P`",
          "label": "[A<theta-pi-offset>]",
          "optional": true,
          "tag": "A",
          "values": [
            {
              "tag": "theta-pi-offset",
              "type": "float"
            }
          ]
        },
        {
          "description": "Theta-Psi offset, alias for `P`",
          "label": "[X<theta-pi-offset>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "theta-pi-offset",
              "type": "float"
            }
          ]
        },
        {
          "description": "Theta offset, alias for `T`",
          "label": "[B<theta-offset>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "theta-offset",
              "type": "float"
            }
          ]
        },
        {
          "description": "Theta offset, alias for `T`",
          "label": "[Y<theta-offset>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "theta-offset",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "SCARA Configuration",
      "url": "https://marlinfw.org/docs/gcode/M665-scara"
    },
    {
      "brief": "Set delta geometry values",
      "codes": [
        "M665"
      ],
      "id": "Marlin.M665[1]",
      "parameters": [
        {
          "description": "Delta height",
          "label": "[H<linear>]",
          "optional": true,
          "tag": "H",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Diagonal rod",
          "label": "[L<linear>]",
          "optional": true,
          "tag": "L",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Delta radius",
          "label": "[R<linear>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Segments per second",
          "label": "[S<float>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "float"
            }
          ]
        },
        {
          "description": "Delta calibration radius",
          "label": "[B<linear>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "linear",
              "type": "float"
            }
          ]
        },
        {
          "description": "Alpha (Tower 1) angle trim",
          "label": "[X<float>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "type": "float"
            }
          ]
        },
        {
          "description": "Beta (Tower 2) angle trim",
          "label": "[Y<float>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "type": "float"
            }
          ]
        },
        {
          "description": "Gamma (Tower 3) angle trim",
          "label": "[Z<float>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "type": "float"
            }
          ]
        },
        {
          "description": "Alpha (Tower 1) diagonal rod trim",
          "label": "[A<float>]",
          "optional": true,
          "tag": "A",
          "values": [
            {
              "type": "float"
            }
          ]
        },
        {
          "description": "Beta  (Tower 2) diagonal rod trim",
          "label": "[B<float>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "type": "float"
            }
          ]
        },
        {
          "description": "Gamma (Tower 3) diagonal rod trim",
          "label": "[C<float>]",
          "optional": true,
          "tag": "C",
          "values": [
            {
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Delta Configuration",
      "url": "https://marlinfw.org/docs/gcode/M665"
    },
    {
      "brief": "",
      "codes": [
        "M665"
      ],
      "id": "RepRap.M665[0]",
      "parameters": [
        {
          "description": " Diagonal rod length",
          "label": "Lnnn",
          "optional": true,
          "tag": "L",
          "values": []
        },
        {
          "description": " Delta radius",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " Segments per second",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Safe probing radius",
          "label": "Bnnn",
          "optional": true,
          "tag": "B",
          "values": []
        },
        {
          "description": " Delta height defined as nozzle height above the bed when homed after allowing for endstop corrections ",
          "label": "Hnnn",
          "optional": true,
          "tag": "H",
          "values": []
        },
        {
          "description": " X tower position correction",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Y tower position correction",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Z tower position correction",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " X tower diagonal rod trim. (Marlin 2.0.6+)",
          "label": "Annn",
          "optional": true,
          "tag": "A",
          "values": []
        },
        {
          "description": " Y tower diagonal rod trim. (Marlin 2.0.6+)",
          "label": "Bnnn",
          "optional": true,
          "tag": "B",
          "values": []
        },
        {
          "description": " Z tower diagonal rod trim. (Marlin 2.0.6+)",
          "label": "Cnnn",
          "optional": true,
          "tag": "C",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M665: Set delta configuration",
      "url": "https://reprap.org/wiki/G-code#M665:_Set_delta_configuration"
    }
  ],
  "M666": [
    {
      "brief": "Set Delta endstop adjustments",
      "codes": [
        "M666"
      ],
      "id": "Marlin.M666[0]",
      "parameters": [
        {
          "description": "Adjustment for the X actuator endstop",
          "label": "[X<adj>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "adj",
              "type": "float"
            }
          ]
        },
        {
          "description": "Adjustment for the Y actuator endstop",
          "label": "[Y<adj>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "adj",
              "type": "float"
            }
          ]
        },
        {
          "description": "Adjustment for the Z actuator endstop",
          "label": "[Z<adj>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "adj",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Delta endstop adjustments",
      "url": "https://marlinfw.org/docs/gcode/M666"
    },
    {
      "brief": "Set dual endstop offsets",
      "codes": [
        "M666"
      ],
      "id": "Marlin.M666[1]",
      "parameters": [
        {
          "description": "Offset for the X axis endstops",
          "label": "[X<adj>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "adj",
              "type": "float"
            }
          ]
        },
        {
          "description": "Offset for the Y axis endstops",
          "label": "[Y<adj>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "adj",
              "type": "float"
            }
          ]
        },
        {
          "description": "Offset for the Z axis endstops",
          "label": "[Z<adj>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "adj",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set dual endstop offsets",
      "url": "https://marlinfw.org/docs/gcode/M666-dual"
    },
    {
      "brief": "",
      "codes": [
        "M666"
      ],
      "id": "RepRap.M666[0]",
      "parameters": [
        {
          "description": " X axis endstop adjustment",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Y axis endstop adjustment",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Z axis endstop adjustment",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " X bed tilt in percent",
          "label": "Annn",
          "optional": true,
          "tag": "A",
          "values": []
        },
        {
          "description": " Y bed tilt in percent",
          "label": "Bnnn",
          "optional": true,
          "tag": "B",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M666: Set delta endstop adjustment",
      "url": "https://reprap.org/wiki/G-code#M666:_Set_delta_endstop_adjustment"
    }
  ],
  "M667": [
    {
      "brief": "",
      "codes": [
        "M667"
      ],
      "id": "RepRap.M667[0]",
      "parameters": [
        {
          "description": " CoreXY mode",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " X axis scale factor (RepRapFirmware 2.02 and earlier)",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Y axis scale factor (RepRapFirmware 2.02 and earlier)",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Z axis scale factor (RepRapFirmware 2.02 and earlier)",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M667: Select CoreXY mode",
      "url": "https://reprap.org/wiki/G-code#M667:_Select_CoreXY_mode"
    }
  ],
  "M668": [
    {
      "brief": "Polynomial compensation is an experimental method to compensate for geometric distortion of a delta machine Z-plane. After the bed is compensated with the set of G30 points, there remains error. This method fits a 6th degree polynomial with independent origins for each order to the residual error data (using a simulated annealing technique on the host). The polynomial is communicated and controlled through M668. Because the polynomial takes many floating point operations to compute each point, the firmware builds a grid of values, and used bi-linear interpolation to adjust the actual Z-axis offset error estimate.\nFor the polynomial used, 40 parameters are specified. The I parameter allows the coefficients to be loaded a few at a time, which limits the size of the G-code string. The index starts with 1, not with 0.\nM668 Ix S[list of values] sets the polynomial parameters starting at index x, if index present and != 0.\nM668 R recomputes the grid based on the current parameters.\nM668 P[0|1] turns off or on the polynomial compensation.",
      "codes": [
        "M668"
      ],
      "id": "RepRap.M668[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M668: Set Z-offset compensations polynomial",
      "url": "https://reprap.org/wiki/G-code#M668:_Set_Z-offset_compensations_polynomial"
    }
  ],
  "M669": [
    {
      "brief": "",
      "codes": [
        "M669"
      ],
      "id": "RepRap.M669[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M669: Set kinematics type and kinematics parameters",
      "url": "https://reprap.org/wiki/G-code#M669:_Set_kinematics_type_and_kinematics_parameters"
    }
  ],
  "M670": [
    {
      "brief": "",
      "codes": [
        "M670"
      ],
      "id": "RepRap.M670[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M670: Set IO port bit mapping",
      "url": "https://reprap.org/wiki/G-code#M670:_Set_IO_port_bit_mapping"
    }
  ],
  "M671": [
    {
      "brief": "",
      "codes": [
        "M671"
      ],
      "id": "RepRap.M671[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M671: Define positions of Z leadscrews or bed leveling screws",
      "url": "https://reprap.org/wiki/G-code#M671:_Define_positions_of_Z_leadscrews_or_bed_leveling_screws"
    }
  ],
  "M672": [
    {
      "brief": "Set Duet Smart Effector sensitivity",
      "codes": [
        "M672"
      ],
      "id": "Marlin.M672[0]",
      "parameters": [
        {
          "description": "Set sensitivity (0-255)",
          "label": "[S<sensitivity>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "sensitivity",
              "type": "int"
            }
          ]
        },
        {
          "description": "Revert sensitivity to factory settings",
          "label": "[R<bool>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Duet Smart Effector sensitivity",
      "url": "https://marlinfw.org/docs/gcode/M672"
    },
    {
      "brief": "",
      "codes": [
        "M672"
      ],
      "id": "RepRap.M672[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M672: Program Z probe",
      "url": "https://reprap.org/wiki/G-code#M672:_Program_Z_probe"
    }
  ],
  "M673": [
    {
      "brief": "",
      "codes": [
        "M673"
      ],
      "id": "RepRap.M673[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M673: Align plane on rotary axis",
      "url": "https://reprap.org/wiki/G-code#M673:_Align_plane_on_rotary_axis"
    }
  ],
  "M674": [
    {
      "brief": "This code is intended to determine the Z center point of a stash that is mounted on a rotary axis. This code is yet to be implemented.",
      "codes": [
        "M674"
      ],
      "id": "RepRap.M674[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M674: Set Z to center point",
      "url": "https://reprap.org/wiki/G-code#M674:_Set_Z_to_center_point"
    }
  ],
  "M675": [
    {
      "brief": "",
      "codes": [
        "M675"
      ],
      "id": "RepRap.M675[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M675: Find center of cavity",
      "url": "https://reprap.org/wiki/G-code#M675:_Find_center_of_cavity"
    }
  ],
  "M7": [
    {
      "brief": "Turn mist or flood coolant on / off",
      "codes": [
        "M7",
        "M8",
        "M9"
      ],
      "id": "Marlin.M7[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Coolant Controls",
      "url": "https://marlinfw.org/docs/gcode/M007-M009"
    },
    {
      "brief": "",
      "codes": [
        "M7"
      ],
      "id": "RepRap.M7[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M7: Mist Coolant On (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#M7:_Mist_Coolant_On_.28CNC_specific.29"
    }
  ],
  "M70": [
    {
      "brief": "",
      "codes": [
        "M70"
      ],
      "id": "RepRap.M70[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M70: Display message",
      "url": "https://reprap.org/wiki/G-code#M70:_Display_message"
    }
  ],
  "M700": [
    {
      "brief": "",
      "codes": [
        "M700"
      ],
      "id": "RepRap.M700[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M700: Level plate",
      "url": "https://reprap.org/wiki/G-code#M700:_Level_plate"
    }
  ],
  "M701": [
    {
      "brief": "Load filament",
      "codes": [
        "M701"
      ],
      "id": "Marlin.M701[0]",
      "parameters": [
        {
          "description": "Extrude distance for insertion (positive value) (manual reload)",
          "label": "L<distance>",
          "optional": false,
          "tag": "L",
          "values": [
            {
              "tag": "distance",
              "type": "float"
            }
          ]
        },
        {
          "description": "Optional extruder index. Current extruder if omitted.",
          "label": "[T<extruder>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "extruder",
              "type": "int"
            }
          ]
        },
        {
          "description": "Move the Z axis by this distance",
          "label": "[Z<distance>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "distance",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Load filament",
      "url": "https://marlinfw.org/docs/gcode/M701"
    },
    {
      "brief": "Initiate a filament load. This command can be used without any additional parameters.",
      "codes": [
        "M701"
      ],
      "id": "RepRap.M701[0]",
      "parameters": [
        {
          "description": " Filament to load (RepRapFirmware)",
          "label": "Snn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Tool to load (Marlin)",
          "label": "Tnn",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " Length to use for load (Marlin)",
          "label": "Lnn",
          "optional": true,
          "tag": "L",
          "values": []
        },
        {
          "description": " Z raise to perform (Marlin)",
          "label": "Znn",
          "optional": true,
          "tag": "Z",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M701: Load filament",
      "url": "https://reprap.org/wiki/G-code#M701:_Load_filament"
    }
  ],
  "M702": [
    {
      "brief": "Unload filament",
      "codes": [
        "M702"
      ],
      "id": "Marlin.M702[0]",
      "parameters": [
        {
          "description": "Retract distance for removal (manual reload)",
          "label": "U<distance>",
          "optional": false,
          "tag": "U",
          "values": [
            {
              "tag": "distance",
              "type": "float"
            }
          ]
        },
        {
          "description": "Optional extruder number. If omitted, current extruder (or ALL extruders with [`FILAMENT_UNLOAD_ALL_EXTRUDERS`](/docs/configuration/configuration.html#advanced-pause)).",
          "label": "[T<extruder>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "extruder",
              "type": "int"
            }
          ]
        },
        {
          "description": "Move the Z axis by this distance",
          "label": "[Z<distance>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "distance",
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Unload filament",
      "url": "https://marlinfw.org/docs/gcode/M702"
    },
    {
      "brief": "Initiate a filament unload. This command can be used without any additional parameters. In contrast to M701 this code is intended to unload the previously loaded filament from the selected tool.",
      "codes": [
        "M702"
      ],
      "id": "RepRap.M702[0]",
      "parameters": [
        {
          "description": " Tool to load (Marlin)",
          "label": "Tnn",
          "optional": true,
          "tag": "T",
          "values": []
        },
        {
          "description": " Length to use for unload (Marlin)",
          "label": "Unn",
          "optional": true,
          "tag": "U",
          "values": []
        },
        {
          "description": " Z raise to perform (Marlin)",
          "label": "Znn",
          "optional": true,
          "tag": "Z",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M702: Unload filament",
      "url": "https://reprap.org/wiki/G-code#M702:_Unload_filament"
    }
  ],
  "M703": [
    {
      "brief": "# In RepRapFirmware this code is used to apply the configuration of a previously loaded filament (see M701). All it does is run /filaments/<loaded filament>/config.g which may contain codes to set parameters like extrusion factor, retraction distances and temperatures. If no filament is assigned to the current tool, this code will not generate a warning.\nIf the filaments feature is used, it is recommended to put this code into tpost*.g to ensure the right filament parameters are set. Supported in RepRapFirmware 2.02 and newer.",
      "codes": [
        "M703"
      ],
      "id": "RepRap.M703[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M703: Configure Filament",
      "url": "https://reprap.org/wiki/G-code#M703:_Configure_Filament"
    }
  ],
  "M710": [
    {
      "brief": "Set or report controller fan settings",
      "codes": [
        "M710"
      ],
      "id": "Marlin.M710[0]",
      "parameters": [
        {
          "description": "Set the speed of the controller fan when motors are active.",
          "label": "[S<speed>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "speed",
              "type": "int"
            }
          ]
        },
        {
          "description": "Set the speed of the controller fan when motors are off.",
          "label": "[I<speed>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "speed",
              "type": "int"
            }
          ]
        },
        {
          "description": "Set whether the fan speed is set automatically. When turned off the controller fan speed will remain where it is.",
          "label": "[A<bool>]",
          "optional": true,
          "tag": "A",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Reset all settings to defaults. Other parameters can be included to override.",
          "label": "[R<bool>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Set the extra duration to keep the fan speed high after motors are turned off.",
          "label": "[D<seconds>]",
          "optional": true,
          "tag": "D",
          "values": [
            {
              "tag": "seconds",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Controller Fan settings",
      "url": "https://marlinfw.org/docs/gcode/M710"
    },
    {
      "brief": "",
      "codes": [
        "M710"
      ],
      "id": "RepRap.M710[0]",
      "parameters": [
        {
          "description": " Turn Auto Mode on or off.",
          "label": "A[bool]",
          "optional": true,
          "tag": "A",
          "values": []
        },
        {
          "description": " Set the Active Speed (0-255) used when motors are enabled.",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Set the Idle Speed (0-255) used when motors are disabled.",
          "label": "Innn",
          "optional": true,
          "tag": "I",
          "values": []
        },
        {
          "description": " Set the Idle Duration (seconds) to keep the fan running after motors are disabled.",
          "label": "Dnnn",
          "optional": true,
          "tag": "D",
          "values": []
        },
        {
          "description": " Reset to defaults.",
          "label": "R",
          "optional": true,
          "tag": "R",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M710: Controller Fan settings",
      "url": "https://reprap.org/wiki/G-code#M710:_Controller_Fan_settings"
    },
    {
      "brief": "This command only exists in a defunct bq fork of Marlin Firmware.",
      "codes": [
        "M710"
      ],
      "id": "RepRap.M710[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M710: Erase the EEPROM and reset the board",
      "url": "https://reprap.org/wiki/G-code#M710:_Erase_the_EEPROM_and_reset_the_board"
    }
  ],
  "M72": [
    {
      "brief": "",
      "codes": [
        "M72"
      ],
      "id": "RepRap.M72[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M72: Play a tone or song",
      "url": "https://reprap.org/wiki/G-code#M72:_Play_a_tone_or_song"
    }
  ],
  "M7219": [
    {
      "brief": "Control Max7219 Segmented LEDs",
      "codes": [
        "M7219"
      ],
      "id": "Marlin.M7219[0]",
      "parameters": [
        {
          "description": "Set the column specified by `C` to bit pattern `V`.",
          "label": "[C<column>]",
          "optional": true,
          "tag": "C",
          "values": [
            {
              "tag": "column",
              "type": "int"
            }
          ]
        },
        {
          "description": "Directly set a Max7219 native row (on the unit specified by `U`) to the 8-bit pattern `V`.",
          "label": "[D<row>]",
          "optional": true,
          "tag": "D",
          "values": [
            {
              "tag": "row",
              "type": "int"
            }
          ]
        },
        {
          "description": "Set the row specified by `R` to bit pattern `V`.",
          "label": "[R<row>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "row",
              "type": "int"
            }
          ]
        },
        {
          "description": "Initialize (clear) all matrixes.",
          "label": "[I]",
          "optional": true,
          "tag": "I"
        },
        {
          "description": "Fill the matrix by turning on all LEDs.",
          "label": "[F]",
          "optional": true,
          "tag": "F"
        },
        {
          "description": "Print the LED array state for debugging.",
          "label": "[P]",
          "optional": true,
          "tag": "P"
        },
        {
          "description": "Used with `D` to specify which matrix unit to set.",
          "label": "[U<index>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Value to apply when using the `C`, `R`, or `X`/`Y` parameters.",
          "label": "[V<bits>]",
          "optional": true,
          "tag": "V",
          "values": [
            {
              "tag": "bits",
              "type": "long"
            }
          ]
        },
        {
          "description": "Set a matrix LED at the given `X` position to the `V` value. If no `V` is given, toggle the LED state.",
          "label": "[X<index>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Set a matrix LED at the given `Y` position to the `V` value. If no `V` is given, toggle the LED state.",
          "label": "[Y<index>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "MAX7219 Control",
      "url": "https://marlinfw.org/docs/gcode/M7219"
    }
  ],
  "M73": [
    {
      "brief": "",
      "codes": [
        "M73"
      ],
      "id": "Klipper.M73[0]",
      "parameters": [
        {
          "description": "",
          "label": "P<Ppercent>",
          "optional": false,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-display-commands"
    },
    {
      "brief": "Set current print progress percentage for LCD.",
      "codes": [
        "M73"
      ],
      "id": "Marlin.M73[0]",
      "parameters": [
        {
          "description": "Current print progress percentage",
          "label": "P<percent>",
          "optional": false,
          "tag": "P",
          "values": [
            {
              "tag": "percent",
              "type": "int"
            }
          ]
        },
        {
          "description": "Set remaining time.",
          "label": "[R<minutes>]",
          "optional": true,
          "requires": "USE_M73_REMAINING_TIME",
          "since": "2.0.0",
          "tag": "R",
          "values": [
            {
              "tag": "minutes",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Print Progress",
      "url": "https://marlinfw.org/docs/gcode/M073"
    },
    {
      "brief": "",
      "codes": [
        "M73"
      ],
      "id": "RepRap.M73[0]",
      "parameters": [
        {
          "description": " Percent in normal mode",
          "label": "P",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Time remaining in normal mode (minutes)",
          "label": "R",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " Percent in silent mode",
          "label": "Q",
          "optional": true,
          "tag": "Q",
          "values": []
        },
        {
          "description": " Time remaining in silent mode (minutes)",
          "label": "S",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Time to change/pause/user interaction in normal mode (minutes)",
          "label": "C",
          "optional": true,
          "tag": "C",
          "values": []
        },
        {
          "description": " Time to change/pause/user interaction in silent mode (minutes)",
          "label": "D",
          "optional": true,
          "tag": "D",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M73: Set/Get build percentage",
      "url": "https://reprap.org/wiki/G-code#M73:_Set.2FGet_build_percentage"
    }
  ],
  "M75": [
    {
      "brief": "Start the print job timer.",
      "codes": [
        "M75"
      ],
      "id": "Marlin.M75[0]",
      "parameters": [
        {
          "description": "A string to display in the LCD heading. (Requires `DWIN_CREALITY_LCD_ENHANCED`)",
          "label": "[string]",
          "optional": true,
          "tag": "string"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Start Print Job Timer",
      "url": "https://marlinfw.org/docs/gcode/M075"
    },
    {
      "brief": "",
      "codes": [
        "M75"
      ],
      "id": "RepRap.M75[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M75: Start the print job timer",
      "url": "https://reprap.org/wiki/G-code#M75:_Start_the_print_job_timer"
    }
  ],
  "M750": [
    {
      "brief": "",
      "codes": [
        "M750"
      ],
      "id": "RepRap.M750[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M750: Enable 3D scanner extension",
      "url": "https://reprap.org/wiki/G-code#M750:_Enable_3D_scanner_extension"
    }
  ],
  "M751": [
    {
      "brief": "",
      "codes": [
        "M751"
      ],
      "id": "RepRap.M751[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M751: Register 3D scanner extension over USB",
      "url": "https://reprap.org/wiki/G-code#M751:_Register_3D_scanner_extension_over_USB"
    }
  ],
  "M752": [
    {
      "brief": "",
      "codes": [
        "M752"
      ],
      "id": "RepRap.M752[0]",
      "parameters": [
        {
          "description": ": Length/degrees of the scan",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": ": Resolution (new in RRF 2.0) [optional, defaults to 100]",
          "label": "Rnnn",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": ": Scanner mode (new in RRF 2.0) [optional, 0=Linear (default), 1=Rotary]",
          "label": "Nnnn",
          "optional": true,
          "tag": "N",
          "values": []
        },
        {
          "description": ": Filename for the scan",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M752: Start 3D scan",
      "url": "https://reprap.org/wiki/G-code#M752:_Start_3D_scan"
    }
  ],
  "M753": [
    {
      "brief": "",
      "codes": [
        "M753"
      ],
      "id": "RepRap.M753[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M753: Cancel current 3D scanner action",
      "url": "https://reprap.org/wiki/G-code#M753:_Cancel_current_3D_scanner_action"
    }
  ],
  "M754": [
    {
      "brief": "",
      "codes": [
        "M754"
      ],
      "id": "RepRap.M754[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M754: Calibrate 3D scanner",
      "url": "https://reprap.org/wiki/G-code#M754:_Calibrate_3D_scanner"
    }
  ],
  "M755": [
    {
      "brief": "",
      "codes": [
        "M755"
      ],
      "id": "RepRap.M755[0]",
      "parameters": [
        {
          "description": " Whether to turn on (> 0) or off (<= 0) the alignment feature",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M755: Set alignment mode for 3D scanner",
      "url": "https://reprap.org/wiki/G-code#M755:_Set_alignment_mode_for_3D_scanner"
    }
  ],
  "M756": [
    {
      "brief": "",
      "codes": [
        "M756"
      ],
      "id": "RepRap.M756[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M756: Shutdown 3D scanner",
      "url": "https://reprap.org/wiki/G-code#M756:_Shutdown_3D_scanner"
    }
  ],
  "M76": [
    {
      "brief": "Pause the print job timer.",
      "codes": [
        "M76"
      ],
      "id": "Marlin.M76[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Pause Print Job",
      "url": "https://marlinfw.org/docs/gcode/M076"
    },
    {
      "brief": "",
      "codes": [
        "M76"
      ],
      "id": "RepRap.M76[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M76: Pause the print job timer",
      "url": "https://reprap.org/wiki/G-code#M76:_Pause_the_print_job_timer"
    }
  ],
  "M77": [
    {
      "brief": "Stop the print job timer.",
      "codes": [
        "M77"
      ],
      "id": "Marlin.M77[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Stop Print Job Timer",
      "url": "https://marlinfw.org/docs/gcode/M077"
    },
    {
      "brief": "",
      "codes": [
        "M77"
      ],
      "id": "RepRap.M77[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M77: Stop the print job timer",
      "url": "https://reprap.org/wiki/G-code#M77:_Stop_the_print_job_timer"
    }
  ],
  "M78": [
    {
      "brief": "Print statistics about print jobs.",
      "codes": [
        "M78"
      ],
      "id": "Marlin.M78[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Print Job Stats",
      "url": "https://marlinfw.org/docs/gcode/M078"
    },
    {
      "brief": "",
      "codes": [
        "M78"
      ],
      "id": "RepRap.M78[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M78: Show statistical information about the print jobs",
      "url": "https://reprap.org/wiki/G-code#M78:_Show_statistical_information_about_the_print_jobs"
    }
  ],
  "M8": [
    {
      "brief": "Turn mist or flood coolant on / off",
      "codes": [
        "M7",
        "M8",
        "M9"
      ],
      "id": "Marlin.M8[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Coolant Controls",
      "url": "https://marlinfw.org/docs/gcode/M007-M009"
    },
    {
      "brief": "",
      "codes": [
        "M8"
      ],
      "id": "RepRap.M8[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M8: Flood Coolant On (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#M8:_Flood_Coolant_On_.28CNC_specific.29"
    }
  ],
  "M80": [
    {
      "brief": "Turn on the power supply",
      "codes": [
        "M80"
      ],
      "id": "Marlin.M80[0]",
      "parameters": [
        {
          "description": "Report Power Supply state",
          "label": "[S]",
          "optional": true,
          "tag": "S",
          "values": null
        }
      ],
      "related": [
        "M81"
      ],
      "source": "Marlin",
      "title": "Power On",
      "url": "https://marlinfw.org/docs/gcode/M080"
    },
    {
      "brief": "",
      "codes": [
        "M80"
      ],
      "id": "RepRap.M80[0]",
      "parameters": [
        {
          "description": " (RepRapFirmware 3.4 and later only) Name of the pin used to control the power supply, default \"pson\"",
          "label": "C\"port_name\"",
          "optional": true,
          "tag": "C",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M80: ATX Power On",
      "url": "https://reprap.org/wiki/G-code#M80:_ATX_Power_On"
    }
  ],
  "M800": [
    {
      "brief": "1 only in bq-Marlin Firmware",
      "codes": [
        "M800"
      ],
      "id": "RepRap.M800[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M800: Fire start print procedure",
      "url": "https://reprap.org/wiki/G-code#M800:_Fire_start_print_procedure"
    }
  ],
  "M801": [
    {
      "brief": "1 only in bq-Marlin Firmware",
      "codes": [
        "M801"
      ],
      "id": "RepRap.M801[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M801: Fire end print procedure",
      "url": "https://reprap.org/wiki/G-code#M801:_Fire_end_print_procedure"
    }
  ],
  "M808": [
    {
      "brief": "Set or go to a marker for looping G-code",
      "codes": [
        "M808"
      ],
      "id": "Marlin.M808[0]",
      "parameters": [
        {
          "description": "Loop counter. Use `L` or `L0` for an infinite loop.",
          "label": "[L<int>]",
          "optional": true,
          "tag": "L",
          "values": [
            {
              "type": "int",
              "unit": "count"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Repeat Marker",
      "url": "https://marlinfw.org/docs/gcode/M808"
    },
    {
      "brief": "The M808 L[count] command is used in a G-code file to set a Repeat Marker beginning at the start of the following line. For an SD print, the firmware will save a marker with the file's byte position and the count given by the L parameter. To set an infinite loop use L0. To terminate an infinite loop from the host, M808 K will cancel all current loops.\nThe M808 command (no parameters) will cause G-code processing to loop back to the previous Repeat Marker as many times as specified. Ideally, each instance of M808 L should have a corresponding M808.\nThe number of nested M808 L commands is limited to the depth set in the firmware. To enable this feature in Marlin, define GCODE_REPEAT_MARKERS. Hosts should look for Cap:REPEAT. At this time the feature only applies to printing direct from media and otherwise M808 is ignored, so host developers are free to come up with their own approach to these codes with no nesting limit and make it work with any old firmware.",
      "codes": [
        "M808"
      ],
      "id": "RepRap.M808[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M808: Set or Goto Repeat Marker",
      "url": "https://reprap.org/wiki/G-code#M808:_Set_or_Goto_Repeat_Marker"
    },
    {
      "brief": " \n M808 L         ; Set marker to repeat infinitely\n M300 P100 S440 ; Beep!\n M300 P10 S0    ; Silence\n M808           ; End marker\n M808 K         ; Sent from host to cancel the loop",
      "codes": [
        "M808"
      ],
      "id": "RepRap.M808[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M808 in Marlin 2.0.8",
      "url": "https://reprap.org/wiki/G-code#M808_in_Marlin_2.0.8"
    }
  ],
  "M81": [
    {
      "brief": "Turn off the power supply.",
      "codes": [
        "M81"
      ],
      "id": "Marlin.M81[0]",
      "parameters": [],
      "related": [
        "M80"
      ],
      "source": "Marlin",
      "title": "Power Off",
      "url": "https://marlinfw.org/docs/gcode/M081"
    },
    {
      "brief": "",
      "codes": [
        "M81"
      ],
      "id": "RepRap.M81[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M81: ATX Power Off",
      "url": "https://reprap.org/wiki/G-code#M81:_ATX_Power_Off"
    }
  ],
  "M810": [
    {
      "brief": "Set/execute one of ten G-code macros",
      "codes": [
        "M810",
        "M811",
        "M812",
        "M813",
        "M814",
        "M815",
        "M816",
        "M817",
        "M818",
        "M819"
      ],
      "id": "Marlin.M810[0]",
      "parameters": [
        {
          "description": "Set Macro to the given commands, separated by the pipe character.",
          "label": "[string]",
          "optional": true,
          "tag": "string"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "G-code macros",
      "url": "https://marlinfw.org/docs/gcode/M810-M819"
    }
  ],
  "M811": [
    {
      "brief": "Set/execute one of ten G-code macros",
      "codes": [
        "M810",
        "M811",
        "M812",
        "M813",
        "M814",
        "M815",
        "M816",
        "M817",
        "M818",
        "M819"
      ],
      "id": "Marlin.M811[0]",
      "parameters": [
        {
          "description": "Set Macro to the given commands, separated by the pipe character.",
          "label": "[string]",
          "optional": true,
          "tag": "string"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "G-code macros",
      "url": "https://marlinfw.org/docs/gcode/M810-M819"
    }
  ],
  "M812": [
    {
      "brief": "Set/execute one of ten G-code macros",
      "codes": [
        "M810",
        "M811",
        "M812",
        "M813",
        "M814",
        "M815",
        "M816",
        "M817",
        "M818",
        "M819"
      ],
      "id": "Marlin.M812[0]",
      "parameters": [
        {
          "description": "Set Macro to the given commands, separated by the pipe character.",
          "label": "[string]",
          "optional": true,
          "tag": "string"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "G-code macros",
      "url": "https://marlinfw.org/docs/gcode/M810-M819"
    }
  ],
  "M813": [
    {
      "brief": "Set/execute one of ten G-code macros",
      "codes": [
        "M810",
        "M811",
        "M812",
        "M813",
        "M814",
        "M815",
        "M816",
        "M817",
        "M818",
        "M819"
      ],
      "id": "Marlin.M813[0]",
      "parameters": [
        {
          "description": "Set Macro to the given commands, separated by the pipe character.",
          "label": "[string]",
          "optional": true,
          "tag": "string"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "G-code macros",
      "url": "https://marlinfw.org/docs/gcode/M810-M819"
    }
  ],
  "M814": [
    {
      "brief": "Set/execute one of ten G-code macros",
      "codes": [
        "M810",
        "M811",
        "M812",
        "M813",
        "M814",
        "M815",
        "M816",
        "M817",
        "M818",
        "M819"
      ],
      "id": "Marlin.M814[0]",
      "parameters": [
        {
          "description": "Set Macro to the given commands, separated by the pipe character.",
          "label": "[string]",
          "optional": true,
          "tag": "string"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "G-code macros",
      "url": "https://marlinfw.org/docs/gcode/M810-M819"
    }
  ],
  "M815": [
    {
      "brief": "Set/execute one of ten G-code macros",
      "codes": [
        "M810",
        "M811",
        "M812",
        "M813",
        "M814",
        "M815",
        "M816",
        "M817",
        "M818",
        "M819"
      ],
      "id": "Marlin.M815[0]",
      "parameters": [
        {
          "description": "Set Macro to the given commands, separated by the pipe character.",
          "label": "[string]",
          "optional": true,
          "tag": "string"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "G-code macros",
      "url": "https://marlinfw.org/docs/gcode/M810-M819"
    }
  ],
  "M816": [
    {
      "brief": "Set/execute one of ten G-code macros",
      "codes": [
        "M810",
        "M811",
        "M812",
        "M813",
        "M814",
        "M815",
        "M816",
        "M817",
        "M818",
        "M819"
      ],
      "id": "Marlin.M816[0]",
      "parameters": [
        {
          "description": "Set Macro to the given commands, separated by the pipe character.",
          "label": "[string]",
          "optional": true,
          "tag": "string"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "G-code macros",
      "url": "https://marlinfw.org/docs/gcode/M810-M819"
    }
  ],
  "M817": [
    {
      "brief": "Set/execute one of ten G-code macros",
      "codes": [
        "M810",
        "M811",
        "M812",
        "M813",
        "M814",
        "M815",
        "M816",
        "M817",
        "M818",
        "M819"
      ],
      "id": "Marlin.M817[0]",
      "parameters": [
        {
          "description": "Set Macro to the given commands, separated by the pipe character.",
          "label": "[string]",
          "optional": true,
          "tag": "string"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "G-code macros",
      "url": "https://marlinfw.org/docs/gcode/M810-M819"
    }
  ],
  "M818": [
    {
      "brief": "Set/execute one of ten G-code macros",
      "codes": [
        "M810",
        "M811",
        "M812",
        "M813",
        "M814",
        "M815",
        "M816",
        "M817",
        "M818",
        "M819"
      ],
      "id": "Marlin.M818[0]",
      "parameters": [
        {
          "description": "Set Macro to the given commands, separated by the pipe character.",
          "label": "[string]",
          "optional": true,
          "tag": "string"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "G-code macros",
      "url": "https://marlinfw.org/docs/gcode/M810-M819"
    }
  ],
  "M819": [
    {
      "brief": "Set/execute one of ten G-code macros",
      "codes": [
        "M810",
        "M811",
        "M812",
        "M813",
        "M814",
        "M815",
        "M816",
        "M817",
        "M818",
        "M819"
      ],
      "id": "Marlin.M819[0]",
      "parameters": [
        {
          "description": "Set Macro to the given commands, separated by the pipe character.",
          "label": "[string]",
          "optional": true,
          "tag": "string"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "G-code macros",
      "url": "https://marlinfw.org/docs/gcode/M810-M819"
    }
  ],
  "M82": [
    {
      "brief": "",
      "codes": [
        "M82"
      ],
      "id": "Klipper.M82[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-commands"
    },
    {
      "brief": "Set E to absolute positioning.",
      "codes": [
        "M82"
      ],
      "id": "Marlin.M82[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "E Absolute",
      "url": "https://marlinfw.org/docs/gcode/M082"
    },
    {
      "brief": "",
      "codes": [
        "M82"
      ],
      "id": "RepRap.M82[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M82: Set extruder to absolute mode",
      "url": "https://reprap.org/wiki/G-code#M82:_Set_extruder_to_absolute_mode"
    }
  ],
  "M83": [
    {
      "brief": "Set E to relative positioning.",
      "codes": [
        "M83"
      ],
      "id": "Marlin.M83[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "E Relative",
      "url": "https://marlinfw.org/docs/gcode/M083"
    },
    {
      "brief": "",
      "codes": [
        "M83"
      ],
      "id": "RepRap.M83[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M83: Set extruder to relative mode",
      "url": "https://reprap.org/wiki/G-code#M83:_Set_extruder_to_relative_mode"
    }
  ],
  "M84": [
    {
      "brief": "Disable steppers (same as M84).",
      "codes": [
        "M18",
        "M84"
      ],
      "id": "Marlin.M84[0]",
      "parameters": [
        {
          "description": "Inactivity Timeout. If none specified, disable now.",
          "label": "[S<seconds>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "seconds",
              "type": "int"
            }
          ]
        },
        {
          "description": "X Disable",
          "label": "[X<flag>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "Y Disable",
          "label": "[Y<flag>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "Z Disable",
          "label": "[Z<flag>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "E Disable",
          "label": "[E<flag>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Disable steppers",
      "url": "https://marlinfw.org/docs/gcode/M018"
    },
    {
      "brief": "",
      "codes": [
        "M84"
      ],
      "id": "RepRap.M84[0]",
      "parameters": [
        {
          "description": " Reset flags",
          "label": "Innn",
          "optional": true,
          "tag": "I",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M84: Stop idle hold",
      "url": "https://reprap.org/wiki/G-code#M84:_Stop_idle_hold"
    }
  ],
  "M85": [
    {
      "brief": "Set the inactivity timeout.",
      "codes": [
        "M85"
      ],
      "id": "Marlin.M85[0]",
      "parameters": [
        {
          "description": "Max inactive seconds",
          "label": "S<seconds>",
          "optional": false,
          "tag": "S",
          "values": [
            {
              "tag": "seconds",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Inactivity Shutdown",
      "url": "https://marlinfw.org/docs/gcode/M085"
    },
    {
      "brief": "",
      "codes": [
        "M85"
      ],
      "id": "RepRap.M85[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M85: Set Inactivity Shutdown Timer",
      "url": "https://reprap.org/wiki/G-code#M85:_Set_Inactivity_Shutdown_Timer"
    }
  ],
  "M851": [
    {
      "brief": "Set the Z probe XYZ offset from nozzle",
      "codes": [
        "M851"
      ],
      "id": "Marlin.M851[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "XYZ Probe Offset",
      "url": "https://marlinfw.org/docs/gcode/M851"
    },
    {
      "brief": "Sets the Z-probe Z offset. This offset is used to determine the actual Z position of the nozzle when using a probe to home Z with G28. This value may also be used by G29 to apply correction to the Z position.\nThis value represents the distance from nozzle to the bed surface at the point where the probe is triggered. This value will be negative for typical switch probes, inductive probes, and setups where the nozzle makes a circuit with a raised metal contact. This setting will be greater than zero on machines where the nozzle itself is used as the probe, pressing down on the bed to press a switch (this is a common setup on Delta machines).\nThis setting is saved in the EEPROM by M500 and restored by M501. The default (as reset by M502) is set by the Z_PROBE_OFFSET_FROM_EXTRUDER setting in Configuration.h.\nNote that in Marlin 1.1.0 and later M851 sets the value literally as given, while Marlin 1.0.2 negates the absolute value.\nThe examples below will set the Z-probe Z offset to -4\u00a0mm (below the nozzle):",
      "codes": [
        "M851"
      ],
      "id": "RepRap.M851[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M851: Set Z-Probe Offset",
      "url": "https://reprap.org/wiki/G-code#M851:_Set_Z-Probe_Offset"
    },
    {
      "brief": " M851 Z4 ; Set the Z probe offset to -4",
      "codes": [
        "M851"
      ],
      "id": "RepRap.M851[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M851 in Marlin 1.0.2",
      "url": "https://reprap.org/wiki/G-code#M851_in_Marlin_1.0.2"
    },
    {
      "brief": " M851 Z-4 ; Set the Z probe offset to -4",
      "codes": [
        "M851"
      ],
      "id": "RepRap.M851[2]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M851 in Marlin 1.1.0",
      "url": "https://reprap.org/wiki/G-code#M851_in_Marlin_1.1.0"
    },
    {
      "brief": " M851 X-22 Y3 Z-4 ; Set the probe XYZ offsets",
      "codes": [
        "M851"
      ],
      "id": "RepRap.M851[3]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M851 in Marlin 2.0.0",
      "url": "https://reprap.org/wiki/G-code#M851_in_Marlin_2.0.0"
    },
    {
      "brief": " M851 X2 Y-5 Z-4 ; Set the probe offset to X=2, Y=-5 and Z=-4",
      "codes": [
        "M851"
      ],
      "id": "RepRap.M851[4]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M851 in MK4duo 4.3.25",
      "url": "https://reprap.org/wiki/G-code#M851_in_MK4duo_4.3.25"
    },
    {
      "brief": "M851 Znn is implemented for backwards compatibility with other firmwares. It sets the Z probe trigger in the same way as G31 Z-nn (note the sign reversal). It also flags the Z-probe G31 parameters as to be saved in config-override.g if the M500 command is used.",
      "codes": [
        "M851"
      ],
      "id": "RepRap.M851[5]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M851 in RepRapFirmware 2.02 and later",
      "url": "https://reprap.org/wiki/G-code#M851_in_RepRapFirmware_2.02_and_later"
    }
  ],
  "M852": [
    {
      "brief": "Misalignment in the XYZ axes.",
      "codes": [
        "M852"
      ],
      "id": "Marlin.M852[0]",
      "parameters": [
        {
          "description": "Skew correction factor for XY axis.",
          "label": "[I]",
          "optional": true,
          "tag": "I",
          "type": "float"
        },
        {
          "description": "Skew correction factor for XZ axis",
          "label": "[J]",
          "optional": true,
          "tag": "J",
          "type": "float"
        },
        {
          "description": "Skew correction factor for YZ axis",
          "label": "[K]",
          "optional": true,
          "tag": "K",
          "type": "float"
        },
        {
          "description": "Alias for `I` when only XY skew correction is enabled",
          "label": "[S]",
          "optional": true,
          "tag": "S",
          "type": "float"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Bed Skew Compensation",
      "url": "https://marlinfw.org/docs/gcode/M852"
    }
  ],
  "M86": [
    {
      "brief": "",
      "codes": [
        "M86"
      ],
      "id": "RepRap.M86[0]",
      "parameters": [
        {
          "description": " Seconds",
          "label": "S",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M86: Set Safety Timer expiration time",
      "url": "https://reprap.org/wiki/G-code#M86:_Set_Safety_Timer_expiration_time"
    }
  ],
  "M860": [
    {
      "brief": "I2C position encoders for closed loop control",
      "codes": [
        "M860",
        "M861",
        "M862",
        "M863",
        "M864",
        "M865",
        "M866",
        "M867",
        "M868",
        "M869"
      ],
      "id": "Marlin.M860[0]",
      "parameters": [
        {
          "description": "Module index.  [0, I2CPE_ENCODER_CNT - 1]",
          "label": "[I<index>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Include homed zero-offset in returned position",
          "label": "[O<bool>]",
          "optional": true,
          "tag": "O",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Report on X axis encoder if present. (If A or I not specified)",
          "label": "[X<axis>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Y axis encoder if present. (If A or I not specified)",
          "label": "[Y<axis>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Z axis encoder if present. (If A or I not specified)",
          "label": "[Z<axis>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on E axis encoder if present. (If A or I not specified)",
          "label": "[E<axis>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Units in mm or raw step count. (for M860 only)",
          "label": "[U<bool>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Number of rePeats/iterations. (for M863 only)",
          "label": "[P<int>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Module new I2C address. [30, 200]. (for M864 only)",
          "label": "[S<addr>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "addr",
              "type": "int"
            }
          ]
        },
        {
          "description": "Reset error counter. (for M866 only)",
          "label": "[R<bool>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Enable/disable error correction. 1 enables, 0 disables.  If not supplied, toggle. (for M867 only)",
          "label": "[S<bool>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "New error correction threshold. (for M868 only)",
          "label": "[T<float>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "I2C Position Encoders",
      "url": "https://marlinfw.org/docs/gcode/M860-M869"
    },
    {
      "brief": "",
      "codes": [
        "M860"
      ],
      "id": "RepRap.M860[0]",
      "parameters": [
        {
          "description": " Target temperature",
          "label": "Snnnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M860 Wait for Probe Temperature",
      "url": "https://reprap.org/wiki/G-code#M860_Wait_for_Probe_Temperature"
    }
  ],
  "M861": [
    {
      "brief": "I2C position encoders for closed loop control",
      "codes": [
        "M860",
        "M861",
        "M862",
        "M863",
        "M864",
        "M865",
        "M866",
        "M867",
        "M868",
        "M869"
      ],
      "id": "Marlin.M861[0]",
      "parameters": [
        {
          "description": "Module index.  [0, I2CPE_ENCODER_CNT - 1]",
          "label": "[I<index>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Include homed zero-offset in returned position",
          "label": "[O<bool>]",
          "optional": true,
          "tag": "O",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Report on X axis encoder if present. (If A or I not specified)",
          "label": "[X<axis>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Y axis encoder if present. (If A or I not specified)",
          "label": "[Y<axis>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Z axis encoder if present. (If A or I not specified)",
          "label": "[Z<axis>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on E axis encoder if present. (If A or I not specified)",
          "label": "[E<axis>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Units in mm or raw step count. (for M860 only)",
          "label": "[U<bool>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Number of rePeats/iterations. (for M863 only)",
          "label": "[P<int>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Module new I2C address. [30, 200]. (for M864 only)",
          "label": "[S<addr>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "addr",
              "type": "int"
            }
          ]
        },
        {
          "description": "Reset error counter. (for M866 only)",
          "label": "[R<bool>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Enable/disable error correction. 1 enables, 0 disables.  If not supplied, toggle. (for M867 only)",
          "label": "[S<bool>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "New error correction threshold. (for M868 only)",
          "label": "[T<float>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "I2C Position Encoders",
      "url": "https://marlinfw.org/docs/gcode/M860-M869"
    },
    {
      "brief": "",
      "codes": [
        "M861"
      ],
      "id": "RepRap.M861[0]",
      "parameters": [
        {
          "description": " Print current EEPROM offset values",
          "label": "?",
          "optional": true,
          "tag": "?",
          "values": []
        },
        {
          "description": " Set factory default values",
          "label": "!",
          "optional": true,
          "tag": "!",
          "values": []
        },
        {
          "description": " Set all values to 0 (effectively disabling PINDA temperature compensation)",
          "label": "Z",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " Microsteps",
          "label": "S",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Table index",
          "label": "I",
          "optional": true,
          "tag": "I",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M861 Set Probe Thermal Compensation",
      "url": "https://reprap.org/wiki/G-code#M861_Set_Probe_Thermal_Compensation"
    }
  ],
  "M862": [
    {
      "brief": "I2C position encoders for closed loop control",
      "codes": [
        "M860",
        "M861",
        "M862",
        "M863",
        "M864",
        "M865",
        "M866",
        "M867",
        "M868",
        "M869"
      ],
      "id": "Marlin.M862[0]",
      "parameters": [
        {
          "description": "Module index.  [0, I2CPE_ENCODER_CNT - 1]",
          "label": "[I<index>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Include homed zero-offset in returned position",
          "label": "[O<bool>]",
          "optional": true,
          "tag": "O",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Report on X axis encoder if present. (If A or I not specified)",
          "label": "[X<axis>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Y axis encoder if present. (If A or I not specified)",
          "label": "[Y<axis>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Z axis encoder if present. (If A or I not specified)",
          "label": "[Z<axis>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on E axis encoder if present. (If A or I not specified)",
          "label": "[E<axis>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Units in mm or raw step count. (for M860 only)",
          "label": "[U<bool>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Number of rePeats/iterations. (for M863 only)",
          "label": "[P<int>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Module new I2C address. [30, 200]. (for M864 only)",
          "label": "[S<addr>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "addr",
              "type": "int"
            }
          ]
        },
        {
          "description": "Reset error counter. (for M866 only)",
          "label": "[R<bool>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Enable/disable error correction. 1 enables, 0 disables.  If not supplied, toggle. (for M867 only)",
          "label": "[S<bool>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "New error correction threshold. (for M868 only)",
          "label": "[T<float>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "I2C Position Encoders",
      "url": "https://marlinfw.org/docs/gcode/M860-M869"
    },
    {
      "brief": "Checks the parameters of the printer and gcode and performs compatibility check",
      "codes": [
        "M862"
      ],
      "id": "RepRap.M862[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M862: Print checking",
      "url": "https://reprap.org/wiki/G-code#M862:_Print_checking"
    }
  ],
  "M862.1": [
    {
      "brief": "",
      "codes": [
        "M862.1"
      ],
      "id": "RepRap.M862.1[0]",
      "parameters": [
        {
          "description": " nnnn = Nozzle diameter 0.25 /0.40 /0.60",
          "label": "Pnnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Current nozzle diameter",
          "label": "Q",
          "optional": true,
          "tag": "Q",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M862.1: Check nozzle diameter",
      "url": "https://reprap.org/wiki/G-code#M862.1:_Check_nozzle_diameter"
    }
  ],
  "M862.2": [
    {
      "brief": "",
      "codes": [
        "M862.2"
      ],
      "id": "RepRap.M862.2[0]",
      "parameters": [
        {
          "description": " nnnn = Prusa model",
          "label": "Pnnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Current model",
          "label": "Q",
          "optional": true,
          "tag": "Q",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M862.2: Check model code",
      "url": "https://reprap.org/wiki/G-code#M862.2:_Check_model_code"
    }
  ],
  "M862.3": [
    {
      "brief": "",
      "codes": [
        "M862.3"
      ],
      "id": "RepRap.M862.3[0]",
      "parameters": [
        {
          "description": " nnnn = Prusa model name",
          "label": "P\"nnnn\"",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Current model name",
          "label": "Q",
          "optional": true,
          "tag": "Q",
          "values": []
        },
        {
          "description": "",
          "label": "M862.3 P \"MK3S\"",
          "optional": true,
          "tag": "M",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M862.3: Model name",
      "url": "https://reprap.org/wiki/G-code#M862.3:_Model_name"
    }
  ],
  "M862.4": [
    {
      "brief": "",
      "codes": [
        "M862.4"
      ],
      "id": "RepRap.M862.4[0]",
      "parameters": [
        {
          "description": " nnnn = Prusa firmware version",
          "label": "Pnnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Current firmware version",
          "label": "Q",
          "optional": true,
          "tag": "Q",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M862.4: Firmware version",
      "url": "https://reprap.org/wiki/G-code#M862.4:_Firmware_version"
    }
  ],
  "M862.5": [
    {
      "brief": "",
      "codes": [
        "M862.5"
      ],
      "id": "RepRap.M862.5[0]",
      "parameters": [
        {
          "description": " nnnn = Gcode level",
          "label": "Pnnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Current Gcode level",
          "label": "Q",
          "optional": true,
          "tag": "Q",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M862.5: Gcode level",
      "url": "https://reprap.org/wiki/G-code#M862.5:_Gcode_level"
    }
  ],
  "M863": [
    {
      "brief": "I2C position encoders for closed loop control",
      "codes": [
        "M860",
        "M861",
        "M862",
        "M863",
        "M864",
        "M865",
        "M866",
        "M867",
        "M868",
        "M869"
      ],
      "id": "Marlin.M863[0]",
      "parameters": [
        {
          "description": "Module index.  [0, I2CPE_ENCODER_CNT - 1]",
          "label": "[I<index>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Include homed zero-offset in returned position",
          "label": "[O<bool>]",
          "optional": true,
          "tag": "O",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Report on X axis encoder if present. (If A or I not specified)",
          "label": "[X<axis>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Y axis encoder if present. (If A or I not specified)",
          "label": "[Y<axis>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Z axis encoder if present. (If A or I not specified)",
          "label": "[Z<axis>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on E axis encoder if present. (If A or I not specified)",
          "label": "[E<axis>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Units in mm or raw step count. (for M860 only)",
          "label": "[U<bool>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Number of rePeats/iterations. (for M863 only)",
          "label": "[P<int>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Module new I2C address. [30, 200]. (for M864 only)",
          "label": "[S<addr>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "addr",
              "type": "int"
            }
          ]
        },
        {
          "description": "Reset error counter. (for M866 only)",
          "label": "[R<bool>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Enable/disable error correction. 1 enables, 0 disables.  If not supplied, toggle. (for M867 only)",
          "label": "[S<bool>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "New error correction threshold. (for M868 only)",
          "label": "[T<float>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "I2C Position Encoders",
      "url": "https://marlinfw.org/docs/gcode/M860-M869"
    }
  ],
  "M864": [
    {
      "brief": "I2C position encoders for closed loop control",
      "codes": [
        "M860",
        "M861",
        "M862",
        "M863",
        "M864",
        "M865",
        "M866",
        "M867",
        "M868",
        "M869"
      ],
      "id": "Marlin.M864[0]",
      "parameters": [
        {
          "description": "Module index.  [0, I2CPE_ENCODER_CNT - 1]",
          "label": "[I<index>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Include homed zero-offset in returned position",
          "label": "[O<bool>]",
          "optional": true,
          "tag": "O",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Report on X axis encoder if present. (If A or I not specified)",
          "label": "[X<axis>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Y axis encoder if present. (If A or I not specified)",
          "label": "[Y<axis>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Z axis encoder if present. (If A or I not specified)",
          "label": "[Z<axis>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on E axis encoder if present. (If A or I not specified)",
          "label": "[E<axis>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Units in mm or raw step count. (for M860 only)",
          "label": "[U<bool>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Number of rePeats/iterations. (for M863 only)",
          "label": "[P<int>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Module new I2C address. [30, 200]. (for M864 only)",
          "label": "[S<addr>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "addr",
              "type": "int"
            }
          ]
        },
        {
          "description": "Reset error counter. (for M866 only)",
          "label": "[R<bool>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Enable/disable error correction. 1 enables, 0 disables.  If not supplied, toggle. (for M867 only)",
          "label": "[S<bool>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "New error correction threshold. (for M868 only)",
          "label": "[T<float>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "I2C Position Encoders",
      "url": "https://marlinfw.org/docs/gcode/M860-M869"
    }
  ],
  "M865": [
    {
      "brief": "I2C position encoders for closed loop control",
      "codes": [
        "M860",
        "M861",
        "M862",
        "M863",
        "M864",
        "M865",
        "M866",
        "M867",
        "M868",
        "M869"
      ],
      "id": "Marlin.M865[0]",
      "parameters": [
        {
          "description": "Module index.  [0, I2CPE_ENCODER_CNT - 1]",
          "label": "[I<index>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Include homed zero-offset in returned position",
          "label": "[O<bool>]",
          "optional": true,
          "tag": "O",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Report on X axis encoder if present. (If A or I not specified)",
          "label": "[X<axis>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Y axis encoder if present. (If A or I not specified)",
          "label": "[Y<axis>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Z axis encoder if present. (If A or I not specified)",
          "label": "[Z<axis>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on E axis encoder if present. (If A or I not specified)",
          "label": "[E<axis>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Units in mm or raw step count. (for M860 only)",
          "label": "[U<bool>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Number of rePeats/iterations. (for M863 only)",
          "label": "[P<int>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Module new I2C address. [30, 200]. (for M864 only)",
          "label": "[S<addr>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "addr",
              "type": "int"
            }
          ]
        },
        {
          "description": "Reset error counter. (for M866 only)",
          "label": "[R<bool>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Enable/disable error correction. 1 enables, 0 disables.  If not supplied, toggle. (for M867 only)",
          "label": "[S<bool>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "New error correction threshold. (for M868 only)",
          "label": "[T<float>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "I2C Position Encoders",
      "url": "https://marlinfw.org/docs/gcode/M860-M869"
    }
  ],
  "M866": [
    {
      "brief": "I2C position encoders for closed loop control",
      "codes": [
        "M860",
        "M861",
        "M862",
        "M863",
        "M864",
        "M865",
        "M866",
        "M867",
        "M868",
        "M869"
      ],
      "id": "Marlin.M866[0]",
      "parameters": [
        {
          "description": "Module index.  [0, I2CPE_ENCODER_CNT - 1]",
          "label": "[I<index>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Include homed zero-offset in returned position",
          "label": "[O<bool>]",
          "optional": true,
          "tag": "O",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Report on X axis encoder if present. (If A or I not specified)",
          "label": "[X<axis>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Y axis encoder if present. (If A or I not specified)",
          "label": "[Y<axis>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Z axis encoder if present. (If A or I not specified)",
          "label": "[Z<axis>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on E axis encoder if present. (If A or I not specified)",
          "label": "[E<axis>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Units in mm or raw step count. (for M860 only)",
          "label": "[U<bool>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Number of rePeats/iterations. (for M863 only)",
          "label": "[P<int>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Module new I2C address. [30, 200]. (for M864 only)",
          "label": "[S<addr>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "addr",
              "type": "int"
            }
          ]
        },
        {
          "description": "Reset error counter. (for M866 only)",
          "label": "[R<bool>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Enable/disable error correction. 1 enables, 0 disables.  If not supplied, toggle. (for M867 only)",
          "label": "[S<bool>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "New error correction threshold. (for M868 only)",
          "label": "[T<float>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "I2C Position Encoders",
      "url": "https://marlinfw.org/docs/gcode/M860-M869"
    }
  ],
  "M867": [
    {
      "brief": "I2C position encoders for closed loop control",
      "codes": [
        "M860",
        "M861",
        "M862",
        "M863",
        "M864",
        "M865",
        "M866",
        "M867",
        "M868",
        "M869"
      ],
      "id": "Marlin.M867[0]",
      "parameters": [
        {
          "description": "Module index.  [0, I2CPE_ENCODER_CNT - 1]",
          "label": "[I<index>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Include homed zero-offset in returned position",
          "label": "[O<bool>]",
          "optional": true,
          "tag": "O",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Report on X axis encoder if present. (If A or I not specified)",
          "label": "[X<axis>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Y axis encoder if present. (If A or I not specified)",
          "label": "[Y<axis>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Z axis encoder if present. (If A or I not specified)",
          "label": "[Z<axis>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on E axis encoder if present. (If A or I not specified)",
          "label": "[E<axis>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Units in mm or raw step count. (for M860 only)",
          "label": "[U<bool>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Number of rePeats/iterations. (for M863 only)",
          "label": "[P<int>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Module new I2C address. [30, 200]. (for M864 only)",
          "label": "[S<addr>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "addr",
              "type": "int"
            }
          ]
        },
        {
          "description": "Reset error counter. (for M866 only)",
          "label": "[R<bool>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Enable/disable error correction. 1 enables, 0 disables.  If not supplied, toggle. (for M867 only)",
          "label": "[S<bool>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "New error correction threshold. (for M868 only)",
          "label": "[T<float>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "I2C Position Encoders",
      "url": "https://marlinfw.org/docs/gcode/M860-M869"
    }
  ],
  "M868": [
    {
      "brief": "I2C position encoders for closed loop control",
      "codes": [
        "M860",
        "M861",
        "M862",
        "M863",
        "M864",
        "M865",
        "M866",
        "M867",
        "M868",
        "M869"
      ],
      "id": "Marlin.M868[0]",
      "parameters": [
        {
          "description": "Module index.  [0, I2CPE_ENCODER_CNT - 1]",
          "label": "[I<index>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Include homed zero-offset in returned position",
          "label": "[O<bool>]",
          "optional": true,
          "tag": "O",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Report on X axis encoder if present. (If A or I not specified)",
          "label": "[X<axis>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Y axis encoder if present. (If A or I not specified)",
          "label": "[Y<axis>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Z axis encoder if present. (If A or I not specified)",
          "label": "[Z<axis>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on E axis encoder if present. (If A or I not specified)",
          "label": "[E<axis>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Units in mm or raw step count. (for M860 only)",
          "label": "[U<bool>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Number of rePeats/iterations. (for M863 only)",
          "label": "[P<int>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Module new I2C address. [30, 200]. (for M864 only)",
          "label": "[S<addr>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "addr",
              "type": "int"
            }
          ]
        },
        {
          "description": "Reset error counter. (for M866 only)",
          "label": "[R<bool>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Enable/disable error correction. 1 enables, 0 disables.  If not supplied, toggle. (for M867 only)",
          "label": "[S<bool>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "New error correction threshold. (for M868 only)",
          "label": "[T<float>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "I2C Position Encoders",
      "url": "https://marlinfw.org/docs/gcode/M860-M869"
    }
  ],
  "M869": [
    {
      "brief": "I2C position encoders for closed loop control",
      "codes": [
        "M860",
        "M861",
        "M862",
        "M863",
        "M864",
        "M865",
        "M866",
        "M867",
        "M868",
        "M869"
      ],
      "id": "Marlin.M869[0]",
      "parameters": [
        {
          "description": "Module index.  [0, I2CPE_ENCODER_CNT - 1]",
          "label": "[I<index>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        },
        {
          "description": "Include homed zero-offset in returned position",
          "label": "[O<bool>]",
          "optional": true,
          "tag": "O",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Report on X axis encoder if present. (If A or I not specified)",
          "label": "[X<axis>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Y axis encoder if present. (If A or I not specified)",
          "label": "[Y<axis>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on Z axis encoder if present. (If A or I not specified)",
          "label": "[Z<axis>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Report on E axis encoder if present. (If A or I not specified)",
          "label": "[E<axis>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "axis",
              "type": "char"
            }
          ]
        },
        {
          "description": "Units in mm or raw step count. (for M860 only)",
          "label": "[U<bool>]",
          "optional": true,
          "tag": "U",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Number of rePeats/iterations. (for M863 only)",
          "label": "[P<int>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Module new I2C address. [30, 200]. (for M864 only)",
          "label": "[S<addr>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "addr",
              "type": "int"
            }
          ]
        },
        {
          "description": "Reset error counter. (for M866 only)",
          "label": "[R<bool>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "Enable/disable error correction. 1 enables, 0 disables.  If not supplied, toggle. (for M867 only)",
          "label": "[S<bool>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "bool"
            }
          ]
        },
        {
          "description": "New error correction threshold. (for M868 only)",
          "label": "[T<float>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "I2C Position Encoders",
      "url": "https://marlinfw.org/docs/gcode/M860-M869"
    }
  ],
  "M87": [
    {
      "brief": "",
      "codes": [
        "M87"
      ],
      "id": "RepRap.M87[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M87: Cancel Safety Timer",
      "url": "https://reprap.org/wiki/G-code#M87:_Cancel_Safety_Timer"
    }
  ],
  "M871": [
    {
      "brief": "Configure probe temperature compensation",
      "codes": [
        "M871"
      ],
      "id": "Marlin.M871[0]",
      "parameters": [
        {
          "description": "Z adjustment value, in micrometers.",
          "label": "[V<\u00b5m>]",
          "optional": true,
          "tag": "V",
          "values": [
            {
              "tag": "\u00b5m",
              "type": "int"
            }
          ]
        },
        {
          "description": "Index at which to store the given Z adjustment value.",
          "label": "[I<flag>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "Store the value `V` as the Z adjustment at index `I` for the Bed.",
          "label": "[B<flag>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "Store the value `V` as the Z adjustment at index `I` for the Probe.",
          "label": "[P<flag>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "Store the value `V` as the Z adjustment at index `I` for the Extruder.",
          "label": "[E<flag>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        },
        {
          "description": "Reset all Z adjustment values to factory defaults (zero).",
          "label": "[R<flag>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "tag": "flag",
              "type": "bool"
            }
          ]
        }
      ],
      "related": [
        "G76",
        "M192"
      ],
      "source": "Marlin",
      "title": "Probe temperature config",
      "url": "https://marlinfw.org/docs/gcode/M871"
    },
    {
      "brief": "M871 allows you to modify the Z adjustments corresponding to temperatures.",
      "codes": [
        "M871"
      ],
      "id": "RepRap.M871[0]",
      "parameters": [
        {
          "description": " Set the Z adjustment for bed temperature",
          "label": "B",
          "optional": true,
          "tag": "B",
          "values": []
        },
        {
          "description": " Set the Z adjustment for probe temperature",
          "label": "P",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Set the Z adjustment for extruder temperature",
          "label": "E",
          "optional": true,
          "tag": "E",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M871: PTC Configuration",
      "url": "https://reprap.org/wiki/G-code#M871:_PTC_Configuration"
    }
  ],
  "M876": [
    {
      "brief": "Handle Host prompt responses",
      "codes": [
        "M876"
      ],
      "id": "Marlin.M876[0]",
      "parameters": [
        {
          "description": "Response to prompt",
          "label": "S<response>",
          "optional": false,
          "tag": "S",
          "values": [
            {
              "tag": "response",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Handle Prompt Response",
      "url": "https://marlinfw.org/docs/gcode/M876"
    },
    {
      "brief": "",
      "codes": [
        "M876"
      ],
      "id": "RepRap.M876[0]",
      "parameters": [
        {
          "description": " signal support for dialog creation on the host = 1, disable = 0",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " select dialog option nnn (0 based)",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M876: Dialog handling",
      "url": "https://reprap.org/wiki/G-code#M876:_Dialog_handling"
    }
  ],
  "M890": [
    {
      "brief": "",
      "codes": [
        "M890"
      ],
      "id": "RepRap.M890[0]",
      "parameters": [
        {
          "description": " select 1 - 5 User Gcode defined in configuration.",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M890 Run User Gcode",
      "url": "https://reprap.org/wiki/G-code#M890_Run_User_Gcode"
    }
  ],
  "M9": [
    {
      "brief": "Turn mist or flood coolant on / off",
      "codes": [
        "M7",
        "M8",
        "M9"
      ],
      "id": "Marlin.M9[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Coolant Controls",
      "url": "https://marlinfw.org/docs/gcode/M007-M009"
    },
    {
      "brief": "",
      "codes": [
        "M9"
      ],
      "id": "RepRap.M9[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M9: Coolant Off (CNC specific)",
      "url": "https://reprap.org/wiki/G-code#M9:_Coolant_Off_.28CNC_specific.29"
    }
  ],
  "M900": [
    {
      "brief": "Get and set Linear Advance K value",
      "codes": [
        "M900"
      ],
      "id": "Marlin.M900[0]",
      "parameters": [
        {
          "description": "The K factor to set for the specified extruder. Unchanged if omitted. Set this value higher for more flexible filament or a longer filament path.\n\nWith `EXTRA_LIN_ADVANCE_K` this sets the *primary* K factor. Note that this factor may be inactive and won't take effect until the next `M900 S0`.\n",
          "label": "[K<kfactor>]",
          "optional": true,
          "tag": "K",
          "values": [
            {
              "tag": "kfactor",
              "type": "float"
            }
          ]
        },
        {
          "description": "Set the second K factor for the specified extruder. Requires `EXTRA_LIN_ADVANCE_K`. Note that this factor may be inactive and won't take effect until the next `M900 S1`.",
          "label": "[L<kfactor>]",
          "optional": true,
          "since": "2.0.0",
          "tag": "L",
          "values": [
            {
              "tag": "kfactor",
              "type": "float"
            }
          ]
        },
        {
          "description": "Select slot and activate the last stored value. Requires `EXTRA_LIN_ADVANCE_K`.",
          "label": "[S<slot>]",
          "optional": true,
          "since": "2.0.0",
          "tag": "S",
          "values": [
            {
              "tag": "slot",
              "type": "int"
            }
          ]
        },
        {
          "description": "Extruder to which `K`, `L`, and `S` will apply. Requires `EXTRA_LIN_ADVANCE_K`.",
          "label": "[T<index>]",
          "optional": true,
          "since": "2.0.0",
          "tag": "T",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Linear Advance Factor",
      "url": "https://marlinfw.org/docs/gcode/M900"
    },
    {
      "brief": "Sets the advance extrusion factors for Linear Advance. If any of the R, W, H, or D parameters are set to zero the ratio will be computed dynamically during printing.",
      "codes": [
        "M900"
      ],
      "id": "RepRap.M900[0]",
      "parameters": [
        {
          "description": " Advance K factor",
          "label": "K[factor]",
          "optional": true,
          "tag": "K",
          "values": []
        },
        {
          "description": " Set ratio directly (overrides WH/D)",
          "label": "R[ratio]",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " H[height] D[diam] Set ratio from WH/D",
          "label": "W[width]",
          "optional": true,
          "tag": "W",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M900 Set Linear Advance Scaling Factors",
      "url": "https://reprap.org/wiki/G-code#M900_Set_Linear_Advance_Scaling_Factors"
    }
  ],
  "M905": [
    {
      "brief": "",
      "codes": [
        "M905"
      ],
      "id": "RepRap.M905[0]",
      "parameters": [
        {
          "description": " Current date in the format YYYY-MM-DD",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Current time in the format HH:MM:SS",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M905: Set local date and time",
      "url": "https://reprap.org/wiki/G-code#M905:_Set_local_date_and_time"
    }
  ],
  "M906": [
    {
      "brief": "Set the motor current (in milliamps)",
      "codes": [
        "M906"
      ],
      "id": "Marlin.M906[0]",
      "parameters": [
        {
          "description": "Index for multiple steppers. (i.e., `I1` for X2, Y2, Z2; `I2` for Z3; `I3` for Z4).",
          "label": "I<int>",
          "optional": false,
          "since": "1.1.9",
          "tag": "I",
          "values": [
            {
              "type": "int",
              "unit": "index"
            }
          ]
        },
        {
          "description": "Current for the E0 stepper",
          "label": "[E<int>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "type": "int",
              "unit": "mA"
            }
          ]
        },
        {
          "description": "Index (tool) number for the E axis. If not specified, the E0 extruder.",
          "label": "[T<int>]",
          "optional": true,
          "since": "1.1.9",
          "tag": "T",
          "values": [
            {
              "type": "int",
              "unit": "index"
            }
          ]
        },
        {
          "description": "Current for the X stepper",
          "label": "[X<int>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "type": "int",
              "unit": "mA"
            }
          ]
        },
        {
          "description": "Current for the Y stepper",
          "label": "[Y<int>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "type": "int",
              "unit": "mA"
            }
          ]
        },
        {
          "description": "Current for the Z stepper",
          "label": "[Z<int>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "type": "int",
              "unit": "mA"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Stepper Motor Current",
      "url": "https://marlinfw.org/docs/gcode/M906"
    },
    {
      "brief": "",
      "codes": [
        "M906"
      ],
      "id": "RepRap.M906[0]",
      "parameters": [
        {
          "description": " X drive motor current",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Y drive motor current",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Z drive motor current",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " E drive(s) motor current(s)",
          "label": "Ennn",
          "optional": true,
          "tag": "E",
          "values": []
        },
        {
          "description": " Motor idle current in percent (0..100)",
          "label": "Innn",
          "optional": true,
          "tag": "I",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M906: Set motor currents",
      "url": "https://reprap.org/wiki/G-code#M906:_Set_motor_currents"
    }
  ],
  "M907": [
    {
      "brief": "Set motor current via digital trimpot",
      "codes": [
        "M907"
      ],
      "id": "Marlin.M907[0]",
      "parameters": [
        {
          "description": "Current for the E1 stepper (Requires `DIGIPOTSS_PIN` or `DIGIPOT_I2C`)",
          "label": "[B<current>]",
          "optional": true,
          "tag": "B",
          "values": [
            {
              "tag": "current"
            }
          ]
        },
        {
          "description": "Current for the E2 stepper (Requires `DIGIPOT_I2C`)",
          "label": "[C<current>]",
          "optional": true,
          "tag": "C",
          "values": [
            {
              "tag": "current"
            }
          ]
        },
        {
          "description": "Current for the E3 stepper (Requires `DIGIPOT_I2C`)",
          "label": "[D<current>]",
          "optional": true,
          "tag": "D",
          "values": [
            {
              "tag": "current"
            }
          ]
        },
        {
          "description": "Current for the E0 stepper",
          "label": "[E<current>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "current"
            }
          ]
        },
        {
          "description": "Set this current on all steppers (Requires `DIGIPOTSS_PIN` or `DAC_STEPPER_CURRENT`)",
          "label": "[S<current>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "tag": "current"
            }
          ]
        },
        {
          "description": "Current for the X stepper (and the Y stepper with `MOTOR_CURRENT_PWM_XY`)",
          "label": "[X<current>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "current"
            }
          ]
        },
        {
          "description": "Current for the Y stepper (Use `X` with `MOTOR_CURRENT_PWM_XY`)",
          "label": "[Y<current>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "current"
            }
          ]
        },
        {
          "description": "Current for the Z stepper",
          "label": "[Z<current>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "current"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Motor Current",
      "url": "https://marlinfw.org/docs/gcode/M907"
    },
    {
      "brief": "Set digital trimpot motor current using axis codes (X, Y, Z, E, B, S). In Repetier, it sets the current in Percent. In Redeem, it sets the current in Amps (whereas M906 uses milliamps).",
      "codes": [
        "M907"
      ],
      "id": "RepRap.M907[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M907: Set digital trimpot motor",
      "url": "https://reprap.org/wiki/G-code#M907:_Set_digital_trimpot_motor"
    }
  ],
  "M908": [
    {
      "brief": "Set a digital trimpot directly",
      "codes": [
        "M908"
      ],
      "id": "Marlin.M908[0]",
      "parameters": [
        {
          "description": "Pin (i.e., Address, Channel)",
          "label": "P<address>",
          "optional": false,
          "tag": "P",
          "values": [
            {
              "tag": "address",
              "type": "int"
            }
          ]
        },
        {
          "description": "Current value",
          "label": "S<current>",
          "optional": false,
          "tag": "S",
          "values": [
            {
              "tag": "current",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Trimpot Pins",
      "url": "https://marlinfw.org/docs/gcode/M908"
    },
    {
      "brief": "M908 P<pin> S<current>",
      "codes": [
        "M908"
      ],
      "id": "RepRap.M908[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M908: Control digital trimpot directly",
      "url": "https://reprap.org/wiki/G-code#M908:_Control_digital_trimpot_directly"
    }
  ],
  "M909": [
    {
      "brief": "Report DAC current values to host",
      "codes": [
        "M909"
      ],
      "id": "Marlin.M909[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "DAC Print Values",
      "url": "https://marlinfw.org/docs/gcode/M909"
    },
    {
      "brief": "",
      "codes": [
        "M909"
      ],
      "id": "RepRap.M909[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M909: Set microstepping",
      "url": "https://reprap.org/wiki/G-code#M909:_Set_microstepping"
    }
  ],
  "M910": [
    {
      "brief": "Commit digipot/DAC value to external EEPROM",
      "codes": [
        "M910"
      ],
      "id": "Marlin.M910[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Commit DAC to EEPROM",
      "url": "https://marlinfw.org/docs/gcode/M910"
    },
    {
      "brief": "",
      "codes": [
        "M910"
      ],
      "id": "RepRap.M910[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M910: Set decay mode",
      "url": "https://reprap.org/wiki/G-code#M910:_Set_decay_mode"
    },
    {
      "brief": ":Not active in default, only if TMC2130_SERVICE_CODES_M910_M918 is defined in source code.",
      "codes": [
        "M910"
      ],
      "id": "RepRap.M910[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M910: TMC2130 init",
      "url": "https://reprap.org/wiki/G-code#M910:_TMC2130_init"
    }
  ],
  "M911": [
    {
      "brief": "Driver overtemperature pre-warn condition",
      "codes": [
        "M911"
      ],
      "id": "Marlin.M911[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "TMC OT Pre-Warn Condition",
      "url": "https://marlinfw.org/docs/gcode/M911"
    },
    {
      "brief": "",
      "codes": [
        "M911"
      ],
      "id": "RepRap.M911[0]",
      "parameters": [
        {
          "description": " Auto save threshold in volts. The print will be stopped automatically and resume parameters saved if the voltage falls below this value. Set to around 1V to 2V lower than the voltage that appears at the Duet VIN terminals at full load. A negative or zero value disables auto save.",
          "label": "Saaa",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Resume threshold in volts. Must be greater than  the auto save voltage. Set to a high value to disable auto resume.",
          "label": "Raaa",
          "optional": true,
          "tag": "R",
          "values": []
        },
        {
          "description": " G-Code commands to run when the print is stopped.",
          "label": "P\"command string\"",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M911: Configure auto save on loss of power (\"power panic\")",
      "url": "https://reprap.org/wiki/G-code#M911:_Configure_auto_save_on_loss_of_power_.28.22power_panic.22.29"
    },
    {
      "brief": ":Not active in default, only if TMC2130_SERVICE_CODES_M910_M918 is defined in source code.",
      "codes": [
        "M911"
      ],
      "id": "RepRap.M911[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M911: Set TMC2130 holding currents",
      "url": "https://reprap.org/wiki/G-code#M911:_Set_TMC2130_holding_currents"
    }
  ],
  "M912": [
    {
      "brief": "Clear overtemperature pre-warn condition flag",
      "codes": [
        "M912"
      ],
      "id": "Marlin.M912[0]",
      "parameters": [
        {
          "description": "Stepper number to set. If omitted, all specified axes.",
          "label": "[I<0|1|2|3>]",
          "optional": true,
          "since": "1.1.9",
          "tag": "I",
          "values": [
            {
              "description": "Both.",
              "tag": 0
            },
            {
              "description": "Base (X, Y, Z) steppers.",
              "tag": 1
            },
            {
              "description": "Second (X2, Y2, Z2) steppers.",
              "tag": 2
            },
            {
              "description": "Third (Z3) steppers.",
              "tag": 3
            }
          ]
        },
        {
          "description": "Clear `X` and/or `X2` stepper driver Over Temperature Pre-warn flag.",
          "label": "[X]",
          "optional": true,
          "tag": "X",
          "type": "int"
        },
        {
          "description": "Clear `Y` and/or `Y2` stepper driver Over Temperature Pre-warn flag.",
          "label": "[Y]",
          "optional": true,
          "tag": "Y",
          "type": "int"
        },
        {
          "description": "Clear `Z` and/or `Z2`  and/or `Z3` stepper driver Over Temperature Pre-warn flag.",
          "label": "[Z]",
          "optional": true,
          "tag": "Z",
          "type": "int"
        },
        {
          "description": "Clear all or one `E` stepper driver Over Temperature Pre-warn flag.",
          "label": "[E<-|0-4>]",
          "optional": true,
          "tag": "E",
          "type": "int",
          "values": [
            {
              "description": "All E.",
              "tag": "-"
            },
            {
              "description": "E index.",
              "tag": "0-4"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Clear TMC OT Pre-Warn",
      "url": "https://marlinfw.org/docs/gcode/M912"
    },
    {
      "brief": "",
      "codes": [
        "M912"
      ],
      "id": "RepRap.M912[0]",
      "parameters": [
        {
          "description": " Temperature monitor channel, default 0",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " Value to be added to the temperature reading in degC",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M912: Set electronics temperature monitor adjustment",
      "url": "https://reprap.org/wiki/G-code#M912:_Set_electronics_temperature_monitor_adjustment"
    },
    {
      "brief": ":Not active in default, only if TMC2130_SERVICE_CODES_M910_M918 is defined in source code.",
      "codes": [
        "M912"
      ],
      "id": "RepRap.M912[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M912: Set TMC2130 running currents",
      "url": "https://reprap.org/wiki/G-code#M912:_Set_TMC2130_running_currents"
    }
  ],
  "M913": [
    {
      "brief": "TMC driver switching to spreadCycle",
      "codes": [
        "M913"
      ],
      "id": "Marlin.M913[0]",
      "parameters": [
        {
          "description": "Index for multiple steppers. (i.e., `I1` for X2, Y2, Z2; `I2` for Z3; `I3` for Z4).",
          "label": "[I<int>]",
          "optional": true,
          "since": "1.1.9",
          "tag": "I",
          "values": [
            {
              "type": "int",
              "unit": "index"
            }
          ]
        },
        {
          "description": "Index (tool) number for the E axis. If not specified, the E0 extruder.",
          "label": "[T<int>]",
          "optional": true,
          "since": "1.1.9",
          "tag": "T",
          "values": [
            {
              "type": "int",
              "unit": "index"
            }
          ]
        },
        {
          "description": "Set Hybrid Threshold for X to the given value.",
          "label": "[X]",
          "optional": true,
          "tag": "X",
          "type": "int"
        },
        {
          "description": "Set Hybrid Threshold for Y to the given value.",
          "label": "[Y]",
          "optional": true,
          "tag": "Y",
          "type": "int"
        },
        {
          "description": "Set Hybrid Threshold for Z to the given value.",
          "label": "[Z]",
          "optional": true,
          "tag": "Z",
          "type": "int"
        },
        {
          "description": "Set Hybrid Threshold for E to the given value.",
          "label": "[E]",
          "optional": true,
          "tag": "E",
          "type": "int"
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Hybrid Threshold Speed",
      "url": "https://marlinfw.org/docs/gcode/M913"
    },
    {
      "brief": "",
      "codes": [
        "M913"
      ],
      "id": "RepRap.M913[0]",
      "parameters": [
        {
          "description": " Percentage of normal current to use for the specified axis or extruder motor(s)",
          "label": "X, Y, Z, E",
          "optional": true,
          "tag": "X",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M913: Set motor percentage of normal current",
      "url": "https://reprap.org/wiki/G-code#M913:_Set_motor_percentage_of_normal_current"
    },
    {
      "brief": ":Not active in default, only if TMC2130_SERVICE_CODES_M910_M918 is defined in source code.",
      "codes": [
        "M913"
      ],
      "id": "RepRap.M913[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M913: Print TMC2130 currents",
      "url": "https://reprap.org/wiki/G-code#M913:_Print_TMC2130_currents"
    }
  ],
  "M914": [
    {
      "brief": "Set sensorless homing sensitivity",
      "codes": [
        "M914"
      ],
      "id": "Marlin.M914[0]",
      "parameters": [
        {
          "description": "Index for multiple steppers. (i.e., `I1` for X2, Y2, Z2; `I2` for Z3; `I3` for Z4).",
          "label": "[I<int>]",
          "optional": true,
          "since": "1.1.9",
          "tag": "I",
          "values": [
            {
              "type": "int",
              "unit": "index"
            }
          ]
        },
        {
          "description": "Sensitivity of the X stepper driver.",
          "label": "[X<int>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Sensitivity of the Y stepper driver.",
          "label": "[Y<int>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Sensitivity of the Z stepper driver.",
          "label": "[Z<int>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "TMC Bump Sensitivity",
      "url": "https://marlinfw.org/docs/gcode/M914"
    },
    {
      "brief": "",
      "codes": [
        "M914"
      ],
      "id": "RepRap.M914[0]",
      "parameters": [
        {
          "description": " Expansion voltage signal level, must be 3 or 5",
          "label": "S",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M914: Set/Get Expansion Voltage Level Translator",
      "url": "https://reprap.org/wiki/G-code#M914:_Set.2FGet_Expansion_Voltage_Level_Translator"
    },
    {
      "brief": ":Not active in default, only if TMC2130_SERVICE_CODES_M910_M918 is defined in source code.",
      "codes": [
        "M914"
      ],
      "id": "RepRap.M914[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M914: Set TMC2130 normal mode",
      "url": "https://reprap.org/wiki/G-code#M914:_Set_TMC2130_normal_mode"
    }
  ],
  "M915": [
    {
      "brief": "Align ends of the Z axis and test torque",
      "codes": [
        "M915"
      ],
      "id": "Marlin.M915[0]",
      "parameters": [
        {
          "description": "Current value to use for the raise move. (Default: `CALIBRATION_CURRENT`)",
          "label": "[S<int>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "int",
              "unit": "mA"
            }
          ]
        },
        {
          "description": "Extra distance past `Z_MAX_POS` to move the Z axis. (Default: `CALIBRATION_EXTRA_HEIGHT`)",
          "label": "[Z<float>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "type": "float",
              "unit": "linear"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "TMC Z axis calibration",
      "url": "https://marlinfw.org/docs/gcode/M915"
    },
    {
      "brief": "",
      "codes": [
        "M915"
      ],
      "id": "RepRap.M915[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M915: Configure motor stall detection",
      "url": "https://reprap.org/wiki/G-code#M915:_Configure_motor_stall_detection"
    },
    {
      "brief": ":Not active in default, only if TMC2130_SERVICE_CODES_M910_M918 is defined in source code.",
      "codes": [
        "M915"
      ],
      "id": "RepRap.M915[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M915: Set TMC2130 silent mode",
      "url": "https://reprap.org/wiki/G-code#M915:_Set_TMC2130_silent_mode"
    }
  ],
  "M916": [
    {
      "brief": "Find L6474 drive level (KVAL_HOLD) threshold",
      "codes": [
        "M916"
      ],
      "id": "Marlin.M916[0]",
      "parameters": [
        {
          "description": "Select which driver(s) to monitor on multi-driver axis",
          "label": "[J<0|1|2|3|4|5|6|7>]",
          "optional": true,
          "tag": "J",
          "values": [
            {
              "description": "(default) Monitor all drivers on the axis",
              "tag": 0
            },
            {
              "description": "Monitor only X, Y, Z, E1",
              "tag": 1
            },
            {
              "description": "Monitor only X2, Y2, Z2, E2",
              "tag": 2
            },
            {
              "description": "Monitor only Z3, E3",
              "tag": 3
            },
            {
              "description": "Monitor only Z4, E4",
              "tag": 4
            },
            {
              "description": "Monitor only Z5, E5",
              "tag": 5
            },
            {
              "description": "Monitor only Z6, E6",
              "tag": 6
            },
            {
              "description": "Monitor only Z7, E7",
              "tag": 7
            }
          ]
        },
        {
          "description": "Monitor X with the given displacement (1 - 255mm) on either side of the current position.",
          "label": "[X<mm>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "type": "mm"
            }
          ]
        },
        {
          "description": "Monitor Y with the given displacement (1 - 255mm) on either side of the current position.",
          "label": "[Y<mm>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "type": "mm"
            }
          ]
        },
        {
          "description": "Monitor Z with the given displacement (1 - 255mm) on either side of the current position.",
          "label": "[Z<mm>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "type": "mm"
            }
          ]
        },
        {
          "description": "Monitor E with the given displacement (1 - 255mm) on either side of the current position.",
          "label": "[E<mm>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "type": "mm"
            }
          ]
        },
        {
          "description": "Feedrate for the moves. (Default max feedrate if unspecified.)",
          "label": "[F<feedrate>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "feedrate",
              "type": "int"
            }
          ]
        },
        {
          "description": "Current (mA) setting for TVAL (0 - 4A in 31.25mA increments, rounds down) - L6474 only. If unspecified, report current value from driver.",
          "label": "[T<current>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "current",
              "type": "int"
            }
          ]
        },
        {
          "description": "Value for KVAL_HOLD (0 - 255) (ignored for L6474). If unspecified, report current value from driver.",
          "label": "[K<Kvalue>]",
          "optional": true,
          "tag": "K",
          "values": [
            {
              "tag": "Kvalue",
              "type": "int"
            }
          ]
        },
        {
          "description": "Time (in seconds) to run each setting of KVAL_HOLD/TVAL. (Default zero, to run each setting once.)",
          "label": "[D<second>]",
          "optional": true,
          "tag": "D",
          "values": [
            {
              "tag": "second",
              "type": "int"
            }
          ]
        }
      ],
      "related": [
        "M917",
        "M918"
      ],
      "source": "Marlin",
      "title": "L6474 Thermal Warning Test",
      "url": "https://marlinfw.org/docs/gcode/M916"
    },
    {
      "brief": "",
      "codes": [
        "M916"
      ],
      "id": "RepRap.M916[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M916: Resume print after power failure",
      "url": "https://reprap.org/wiki/G-code#M916:_Resume_print_after_power_failure"
    },
    {
      "brief": ":Not active in default, only if TMC2130_SERVICE_CODES_M910_M918 is defined in source code.",
      "codes": [
        "M916"
      ],
      "id": "RepRap.M916[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M916: Set TMC2130 Stallguard sensitivity threshold",
      "url": "https://reprap.org/wiki/G-code#M916:_Set_TMC2130_Stallguard_sensitivity_threshold"
    }
  ],
  "M917": [
    {
      "brief": "Find L6474 minimum current thresholds",
      "codes": [
        "M917"
      ],
      "id": "Marlin.M917[0]",
      "parameters": [
        {
          "description": "Select which driver(s) to monitor on multi-driver axis.",
          "label": "[J<0|1|2|3|4|5|6|7>]",
          "optional": true,
          "tag": "J",
          "values": [
            {
              "description": "(default) Monitor all drivers on the axis or E0.",
              "tag": 0
            },
            {
              "description": "Monitor only X, Y, Z, E1.",
              "tag": 1
            },
            {
              "description": "Monitor only X2, Y2, Z2, E2.",
              "tag": 2
            },
            {
              "description": "Monitor only Z3, E3",
              "tag": 3
            },
            {
              "description": "Monitor only Z4, E4",
              "tag": 4
            },
            {
              "description": "Monitor only Z5, E5",
              "tag": 5
            },
            {
              "description": "Monitor only Z6, E6",
              "tag": 6
            },
            {
              "description": "Monitor only Z7, E7",
              "tag": 7
            }
          ]
        },
        {
          "description": "Monitor X with the given displacement (1 - 255mm) on either side of the current position.",
          "label": "[X<mm>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "type": "mm"
            }
          ]
        },
        {
          "description": "Monitor Y with the given displacement (1 - 255mm) on either side of the current position.",
          "label": "[Y<mm>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "type": "mm"
            }
          ]
        },
        {
          "description": "Monitor Z with the given displacement (1 - 255mm) on either side of the current position.",
          "label": "[Z<mm>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "type": "mm"
            }
          ]
        },
        {
          "description": "Monitor E with the given displacement (1 - 255mm) on either side of the current position.",
          "label": "[E<mm>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "type": "mm"
            }
          ]
        },
        {
          "description": "Feedrate for the moves. If unspecified, uses the max feedrate.",
          "label": "[F<feedrate>]",
          "optional": true,
          "tag": "F",
          "values": [
            {
              "tag": "feedrate",
              "type": "int"
            }
          ]
        },
        {
          "description": "Starting overcurrent threshold. Report current value from driver if not specified. If there are multiple drivers on the axis then all will be set the same.",
          "label": "[I<current>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "current",
              "type": "int"
            }
          ]
        },
        {
          "description": "Current (mA) setting for TVAL (0 - 4A in 31.25mA increments, rounds down) - L6474 only. Report current value from driver if not specified.",
          "label": "[T<current>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "current",
              "type": "int"
            }
          ]
        },
        {
          "description": "Value for KVAL_HOLD (0 - 255) (ignored for L6474). Report current value from driver if not specified",
          "label": "[K<Kvalue>]",
          "optional": true,
          "tag": "K",
          "values": [
            {
              "tag": "Kvalue",
              "type": "int"
            }
          ]
        }
      ],
      "related": [
        "M916",
        "M918"
      ],
      "source": "Marlin",
      "title": "L6474 Overcurrent Warning Test",
      "url": "https://marlinfw.org/docs/gcode/M917"
    },
    {
      "brief": "",
      "codes": [
        "M917"
      ],
      "id": "RepRap.M917[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M917: Set motor standstill current reduction",
      "url": "https://reprap.org/wiki/G-code#M917:_Set_motor_standstill_current_reduction"
    },
    {
      "brief": ":Not active in default, only if TMC2130_SERVICE_CODES_M910_M918 is defined in source code.",
      "codes": [
        "M917"
      ],
      "id": "RepRap.M917[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M917: Set TMC2130 PWM amplitude offset (pwm_ampl)",
      "url": "https://reprap.org/wiki/G-code#M917:_Set_TMC2130_PWM_amplitude_offset_.28pwm_ampl.29"
    }
  ],
  "M918": [
    {
      "brief": "Find L6474 speed threshold",
      "codes": [
        "M918"
      ],
      "id": "Marlin.M918[0]",
      "parameters": [
        {
          "description": "Select which driver(s) to monitor on a multi-driver axis.",
          "label": "[J<0|1|2|3|4|5|6|7>]",
          "optional": true,
          "tag": "J",
          "values": [
            {
              "description": "(default) Monitor all drivers on the axis or E0",
              "tag": 0
            },
            {
              "description": "Monitor only X, Y, Z, E1",
              "tag": 1
            },
            {
              "description": "Monitor only X2, Y2, Z2, E2",
              "tag": 2
            },
            {
              "description": "Monitor only Z3, E3",
              "tag": 3
            },
            {
              "description": "Monitor only Z4, E4",
              "tag": 4
            },
            {
              "description": "Monitor only Z5, E5",
              "tag": 5
            },
            {
              "description": "Monitor only Z6, E6",
              "tag": 6
            },
            {
              "description": "Monitor only Z7, E7",
              "tag": 7
            }
          ]
        },
        {
          "description": "Monitor X with the given displacement (1 - 255mm) on either side of the current position.",
          "label": "[X<mm>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "type": "mm"
            }
          ]
        },
        {
          "description": "Monitor Y with the given displacement (1 - 255mm) on either side of the current position.",
          "label": "[Y<mm>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "type": "mm"
            }
          ]
        },
        {
          "description": "Monitor Z with the given displacement (1 - 255mm) on either side of the current position.",
          "label": "[Z<mm>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "type": "mm"
            }
          ]
        },
        {
          "description": "Monitor E with the given displacement (1 - 255mm) on either side of the current position.",
          "label": "[E<mm>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "type": "mm"
            }
          ]
        },
        {
          "description": "Overcurrent threshold. Report current value from driver if not specified.",
          "label": "[I<current>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "tag": "current",
              "type": "int"
            }
          ]
        },
        {
          "description": "Current (mA) setting for TVAL (0 - 4A in 31.25mA increments, rounds down) - L6474 only. Report current value from driver if not specified.",
          "label": "[T<current>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "current",
              "type": "int"
            }
          ]
        },
        {
          "description": "Value for KVAL_HOLD (0 - 255) (ignored for L6474). Report current value from driver if not specified.",
          "label": "[K<Kvalue>]",
          "optional": true,
          "tag": "K",
          "values": [
            {
              "tag": "Kvalue",
              "type": "int"
            }
          ]
        },
        {
          "description": "Value for microsteps (1 - 128). Report current value from driver if not specified.",
          "label": "[M<microsteps>]",
          "optional": true,
          "tag": "M",
          "values": [
            {
              "tag": "microsteps",
              "type": "int"
            }
          ]
        }
      ],
      "related": [
        "M916",
        "M917"
      ],
      "source": "Marlin",
      "title": "L6474 Speed Warning Test",
      "url": "https://marlinfw.org/docs/gcode/M918"
    },
    {
      "brief": "This command is used to tell RepRapFirmware about a directly-connected dumb LCD or similar display.",
      "codes": [
        "M918"
      ],
      "id": "RepRap.M918[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M918: Configure direct-connect display",
      "url": "https://reprap.org/wiki/G-code#M918:_Configure_direct-connect_display"
    },
    {
      "brief": ":Not active in default, only if TMC2130_SERVICE_CODES_M910_M918 is defined in source code.",
      "codes": [
        "M918"
      ],
      "id": "RepRap.M918[1]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M918: Set TMC2130 PWM amplitude gradient (pwm_grad)",
      "url": "https://reprap.org/wiki/G-code#M918:_Set_TMC2130_PWM_amplitude_gradient_.28pwm_grad.29"
    }
  ],
  "M919": [
    {
      "brief": "Set Chopper Timing values",
      "codes": [
        "M919"
      ],
      "id": "Marlin.M919[0]",
      "parameters": [
        {
          "description": "Time-Off value (1..15). If omitted, the default from `CHOPPER_TIMING`.",
          "label": "[O<int>]",
          "optional": true,
          "tag": "O",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Hysteresis End value (-3..12). If omitted, the default from `CHOPPER_TIMING`.",
          "label": "[P<int>]",
          "optional": true,
          "tag": "P",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Hysteresis Start value (1..8). If omitted, the default from `CHOPPER_TIMING`.",
          "label": "[S<int>]",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "int"
            }
          ]
        },
        {
          "description": "Index for multiple steppers. (i.e., `I1` for X2, Y2, Z2; `I2` for Z3; `I3` for Z4).",
          "label": "[I<int>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "type": "int",
              "unit": "index"
            }
          ]
        },
        {
          "description": "Index (tool) number for the E axis. If not specified, all extruders.",
          "label": "[T<int>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "type": "int",
              "unit": "index"
            }
          ]
        },
        {
          "description": "Current for the Z stepper",
          "label": "[Z<int>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "type": "int",
              "unit": "mA"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "TMC Chopper Timing",
      "url": "https://marlinfw.org/docs/gcode/M919"
    }
  ],
  "M92": [
    {
      "brief": "Set the number of steps-per-mm, per-inch, or per-degree",
      "codes": [
        "M92"
      ],
      "id": "Marlin.M92[0]",
      "parameters": [
        {
          "description": "X steps per unit",
          "label": "[X<steps>]",
          "optional": true,
          "tag": "X",
          "values": [
            {
              "tag": "steps",
              "type": "float"
            }
          ]
        },
        {
          "description": "Y steps per unit",
          "label": "[Y<steps>]",
          "optional": true,
          "tag": "Y",
          "values": [
            {
              "tag": "steps",
              "type": "float"
            }
          ]
        },
        {
          "description": "Z steps per unit",
          "label": "[Z<steps>]",
          "optional": true,
          "tag": "Z",
          "values": [
            {
              "tag": "steps",
              "type": "float"
            }
          ]
        },
        {
          "description": "E steps per unit",
          "label": "[E<steps>]",
          "optional": true,
          "tag": "E",
          "values": [
            {
              "tag": "steps",
              "type": "float"
            }
          ]
        },
        {
          "description": "Target extruder (Requires `DISTINCT_E_FACTORS`)",
          "label": "[T<index>]",
          "optional": true,
          "tag": "T",
          "values": [
            {
              "tag": "index",
              "type": "int"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Set Axis Steps-per-unit",
      "url": "https://marlinfw.org/docs/gcode/M092"
    },
    {
      "brief": "",
      "codes": [
        "M92"
      ],
      "id": "RepRap.M92[0]",
      "parameters": [
        {
          "description": " Steps per unit for the X drive",
          "label": "Xnnn",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": " Steps per unit for the Y drive",
          "label": "Ynnn",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": " Steps per unit for the Z drive",
          "label": "Znnn",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": " Steps per unit for the extruder drive(s)",
          "label": "Ennn",
          "optional": true,
          "tag": "E",
          "values": []
        },
        {
          "description": " Defines in which microstepping the above steps per unit are given. If omitted it will use the microstepping currently set by M350.",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M92: Set axis_steps_per_unit",
      "url": "https://reprap.org/wiki/G-code#M92:_Set_axis_steps_per_unit"
    }
  ],
  "M928": [
    {
      "brief": "Log serial input to an SD file",
      "codes": [
        "M928"
      ],
      "id": "Marlin.M928[0]",
      "parameters": [
        {
          "description": "File name of log file",
          "label": "filename",
          "optional": false,
          "tag": "filename"
        }
      ],
      "related": [
        "M29"
      ],
      "source": "Marlin",
      "title": "Start SD Logging",
      "url": "https://marlinfw.org/docs/gcode/M928"
    },
    {
      "brief": "",
      "codes": [
        "M928"
      ],
      "id": "RepRap.M928[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M928: Start SD logging",
      "url": "https://reprap.org/wiki/G-code#M928:_Start_SD_logging"
    }
  ],
  "M929": [
    {
      "brief": "",
      "codes": [
        "M929"
      ],
      "id": "RepRap.M929[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M929: Start/stop event logging to SD card",
      "url": "https://reprap.org/wiki/G-code#M929:_Start.2Fstop_event_logging_to_SD_card"
    }
  ],
  "M93": [
    {
      "brief": "",
      "codes": [
        "M93"
      ],
      "id": "RepRap.M93[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M93: Send axis_steps_per_unit",
      "url": "https://reprap.org/wiki/G-code#M93:_Send_axis_steps_per_unit"
    }
  ],
  "M950": [
    {
      "brief": "",
      "codes": [
        "M950"
      ],
      "id": "RepRap.M950[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M950: Create heater, fan or GPIO/servo device",
      "url": "https://reprap.org/wiki/G-code#M950:_Create_heater.2C_fan_or_GPIO.2Fservo_device"
    }
  ],
  "M951": [
    {
      "brief": "Set / report Magnetic Parking Extruder settings",
      "codes": [
        "M951"
      ],
      "id": "Marlin.M951[0]",
      "parameters": [
        {
          "description": "Set X[0] position. (Default `PARKING_EXTRUDER_PARKING_X`)",
          "label": "[L<float>]",
          "optional": true,
          "tag": "L",
          "values": [
            {
              "type": "float",
              "unit": "linear"
            }
          ]
        },
        {
          "description": "Set X[1] position. (Default `PARKING_EXTRUDER_PARKING_X`)",
          "label": "[R<float>]",
          "optional": true,
          "tag": "R",
          "values": [
            {
              "type": "float",
              "unit": "linear"
            }
          ]
        },
        {
          "description": "Set grab distance. (Default `PARKING_EXTRUDER_GRAB_DISTANCE`)",
          "label": "[I<float>]",
          "optional": true,
          "tag": "I",
          "values": [
            {
              "type": "float",
              "unit": "linear"
            }
          ]
        },
        {
          "description": "Set slow feedrate. (Default `MPE_SLOW_SPEED`)",
          "label": "[J<float>]",
          "optional": true,
          "tag": "J",
          "values": [
            {
              "type": "float",
              "unit": "linear"
            }
          ]
        },
        {
          "description": "Set fast feedrate. (Default `MPE_FAST_SPEED`)",
          "label": "[H<float>]",
          "optional": true,
          "tag": "H",
          "values": [
            {
              "type": "float",
              "unit": "linear"
            }
          ]
        },
        {
          "description": "Set travel feedrate. (Default `MPE_TRAVEL_DISTANCE`)",
          "label": "[D<float>]",
          "optional": true,
          "tag": "D",
          "values": [
            {
              "type": "float",
              "unit": "linear"
            }
          ]
        },
        {
          "description": "Set compensation factor. (Default `MPE_COMPENSATION`)",
          "label": "[C<float>]",
          "optional": true,
          "tag": "C",
          "values": [
            {
              "type": "float"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "Magnetic Parking Extruder",
      "url": "https://marlinfw.org/docs/gcode/M951"
    },
    {
      "brief": "",
      "codes": [
        "M951"
      ],
      "id": "RepRap.M951[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M951: Set height following mode parameters",
      "url": "https://reprap.org/wiki/G-code#M951:_Set_height_following_mode_parameters"
    }
  ],
  "M952": [
    {
      "brief": "",
      "codes": [
        "M952"
      ],
      "id": "RepRap.M952[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M952: Set CAN expansion board address and/or normal data rate",
      "url": "https://reprap.org/wiki/G-code#M952:_Set_CAN_expansion_board_address_and.2For_normal_data_rate"
    }
  ],
  "M953": [
    {
      "brief": "",
      "codes": [
        "M953"
      ],
      "id": "RepRap.M953[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M953: Set CAN-FD bus fast data rate",
      "url": "https://reprap.org/wiki/G-code#M953:_Set_CAN-FD_bus_fast_data_rate"
    }
  ],
  "M954": [
    {
      "brief": "",
      "codes": [
        "M954"
      ],
      "id": "RepRap.M954[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M954: Configure as CAN expansion board",
      "url": "https://reprap.org/wiki/G-code#M954:_Configure_as_CAN_expansion_board"
    }
  ],
  "M955": [
    {
      "brief": "",
      "codes": [
        "M955"
      ],
      "id": "RepRap.M955[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M955: Configure Accelerometer",
      "url": "https://reprap.org/wiki/G-code#M955:_Configure_Accelerometer"
    }
  ],
  "M956": [
    {
      "brief": "",
      "codes": [
        "M956"
      ],
      "id": "RepRap.M956[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M956: Collect accelerometer data and write to file",
      "url": "https://reprap.org/wiki/G-code#M956:_Collect_accelerometer_data_and_write_to_file"
    }
  ],
  "M957": [
    {
      "brief": "",
      "codes": [
        "M957"
      ],
      "id": "RepRap.M957[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M957: Raise event",
      "url": "https://reprap.org/wiki/G-code#M957:_Raise_event"
    }
  ],
  "M98": [
    {
      "brief": "",
      "codes": [
        "M98"
      ],
      "id": "RepRap.M98[0]",
      "parameters": [
        {
          "description": " Macro filename. In RepRapFirmware 3 this must be enclosed in double-quote characters. In RepRapFirmware 2 the double-quote characters are optional.",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M98: Call Macro/Subprogram",
      "url": "https://reprap.org/wiki/G-code#M98:_Call_Macro.2FSubprogram"
    }
  ],
  "M99": [
    {
      "brief": "",
      "codes": [
        "M99"
      ],
      "id": "RepRap.M99[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M99: Return from Macro/Subprogram",
      "url": "https://reprap.org/wiki/G-code#M99:_Return_from_Macro.2FSubprogram"
    }
  ],
  "M993": [
    {
      "brief": "load or back up SPI Flash and SD",
      "codes": [
        "M993",
        "M994"
      ],
      "id": "Marlin.M993[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "SD / SPI Flash",
      "url": "https://marlinfw.org/docs/gcode/M993"
    }
  ],
  "M994": [
    {
      "brief": "load or back up SPI Flash and SD",
      "codes": [
        "M993",
        "M994"
      ],
      "id": "Marlin.M994[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "SD / SPI Flash",
      "url": "https://marlinfw.org/docs/gcode/M993"
    }
  ],
  "M995": [
    {
      "brief": "Touch screen calibration for TFT display",
      "codes": [
        "M995"
      ],
      "id": "Marlin.M995[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Touch Screen Calibration",
      "url": "https://marlinfw.org/docs/gcode/M995"
    },
    {
      "brief": "",
      "codes": [
        "M995"
      ],
      "id": "RepRap.M995[0]",
      "parameters": [],
      "related": [],
      "source": "RepRap",
      "title": "M995: Calibrate Touch Screen",
      "url": "https://reprap.org/wiki/G-code#M995:_Calibrate_Touch_Screen"
    }
  ],
  "M997": [
    {
      "brief": "Perform in-application firmware update",
      "codes": [
        "M997"
      ],
      "id": "Marlin.M997[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Firmware update",
      "url": "https://marlinfw.org/docs/gcode/M997"
    },
    {
      "brief": "",
      "codes": [
        "M997"
      ],
      "id": "RepRap.M997[0]",
      "parameters": [
        {
          "description": " Firmware module number(s), default 0",
          "label": "Snnn",
          "optional": true,
          "tag": "S",
          "values": []
        },
        {
          "description": " Expansion board address, default 0 (i.e. main controller board)",
          "label": "Bnnn",
          "optional": true,
          "tag": "B",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M997: Perform in-application firmware update",
      "url": "https://reprap.org/wiki/G-code#M997:_Perform_in-application_firmware_update"
    }
  ],
  "M998": [
    {
      "brief": "",
      "codes": [
        "M998"
      ],
      "id": "RepRap.M998[0]",
      "parameters": [
        {
          "description": " Line number",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M998: Request resend of line",
      "url": "https://reprap.org/wiki/G-code#M998:_Request_resend_of_line"
    }
  ],
  "M999": [
    {
      "brief": "Return the machine to Running state",
      "codes": [
        "M999"
      ],
      "id": "Marlin.M999[0]",
      "parameters": [
        {
          "description": "Resume without flushing the command buffer. The default behavior is to flush the serial buffer and request a resend to the host starting on the last `N` line received.",
          "label": "S<bool>",
          "optional": true,
          "tag": "S",
          "values": [
            {
              "type": "bool"
            }
          ]
        }
      ],
      "related": [],
      "source": "Marlin",
      "title": "STOP Restart",
      "url": "https://marlinfw.org/docs/gcode/M999"
    },
    {
      "brief": "",
      "codes": [
        "M999"
      ],
      "id": "RepRap.M999[0]",
      "parameters": [
        {
          "description": " Reset flags",
          "label": "Pnnn",
          "optional": true,
          "tag": "P",
          "values": []
        },
        {
          "description": " CAN address of the board to reset (RRF only)",
          "label": "Bnnn",
          "optional": true,
          "tag": "B",
          "values": []
        }
      ],
      "related": [],
      "source": "RepRap",
      "title": "M999: Restart after being stopped by error",
      "url": "https://reprap.org/wiki/G-code#M999:_Restart_after_being_stopped_by_error"
    }
  ],
  "MANUAL_PROBE": [
    {
      "brief": "Run a helper script useful for  measuring the height of the nozzle at a given location. If SPEED is  specified, it sets the speed of TESTZ commands (the default is  5mm/s). During a manual probe, the following additional commands are  available",
      "codes": [
        "MANUAL_PROBE"
      ],
      "id": "Klipper.MANUAL_PROBE[0]",
      "parameters": [
        {
          "description": "",
          "label": "SPEED=<speed>",
          "optional": true,
          "tag": "SPEED",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Run a helper script useful for  measuring the height of the nozzle at a given location",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "MANUAL_STEPPER": [
    {
      "brief": "This command  will alter the state of the stepper. Use the ENABLE parameter to  enable/disable the stepper. Use the SET_POSITION parameter to force  the stepper to think it is at the given position. Use the MOVE  parameter to request a movement to the given position. If SPEED  and/or ACCEL is specified then the given values will be used instead  of the defaults specified in the config file. If an ACCEL of zero is  specified then no acceleration will be performed. If  STOP_ON_ENDSTOP=1 is specified then the move will end early should  the endstop report as triggered (use STOP_ON_ENDSTOP=2 to complete  the move without error even if the endstop does not trigger, use -1  or -2 to stop when the endstop reports not triggered). Normally  future G-Code commands will be scheduled to run after the stepper  move completes, however if a manual stepper move uses SYNC=0 then  future G-Code movement commands may run in parallel with the stepper  movement.",
      "codes": [
        "MANUAL_STEPPER"
      ],
      "id": "Klipper.MANUAL_STEPPER[0]",
      "parameters": [
        {
          "description": "",
          "label": "STEPPER=config_name",
          "optional": false,
          "tag": "STEPPERconfig_name",
          "values": []
        },
        {
          "description": "",
          "label": "ENABLE=0|1",
          "optional": true,
          "tag": "ENABLE0|1",
          "values": []
        },
        {
          "description": "",
          "label": "SET_POSITION=<pos>",
          "optional": true,
          "tag": "SET_POSITION",
          "values": []
        },
        {
          "description": "",
          "label": "SPEED=<speed>",
          "optional": true,
          "tag": "SPEED",
          "values": []
        },
        {
          "description": "",
          "label": "ACCEL=<accel>",
          "optional": true,
          "tag": "ACCEL",
          "values": []
        },
        {
          "description": "",
          "label": "MOVE=<pos>",
          "optional": true,
          "tag": "MOVE",
          "values": []
        },
        {
          "description": "",
          "label": "STOP_ON_ENDSTOP=1|2|-1|-2",
          "optional": true,
          "tag": "STOP_ON_ENDSTOP1|2|-1|-2",
          "values": []
        },
        {
          "description": "",
          "label": "SYNC=0",
          "optional": true,
          "tag": "SYNC0",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This command  will alter the state of the stepper",
      "url": "https://www.klipper3d.org/G-Codes.html#manual-stepper-commands"
    }
  ],
  "MEASURE_AXES_NOISE": [
    {
      "brief": "Measures and outputs the noise for all axes of  all enabled accelerometer chips.",
      "codes": [
        "MEASURE_AXES_NOISE"
      ],
      "id": "Klipper.MEASURE_AXES_NOISE[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "Measures and outputs the noise for all axes of  all enabled accelerometer chips",
      "url": "https://www.klipper3d.org/G-Codes.html#resonance-testing-commands"
    }
  ],
  "PALETTE_CLEAR": [
    {
      "brief": "This command instructs the Palette 2 to clear all of the  input and output paths of filament.",
      "codes": [
        "PALETTE_CLEAR"
      ],
      "id": "Klipper.PALETTE_CLEAR[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "This command instructs the Palette 2 to clear all of the  input and output paths of filament",
      "url": "https://www.klipper3d.org/G-Codes.html#palette-2-commands"
    }
  ],
  "PALETTE_CONNECT": [
    {
      "brief": "This command initializes the connection with  the Palette 2.",
      "codes": [
        "PALETTE_CONNECT"
      ],
      "id": "Klipper.PALETTE_CONNECT[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "This command initializes the connection with  the Palette 2",
      "url": "https://www.klipper3d.org/G-Codes.html#palette-2-commands"
    }
  ],
  "PALETTE_CUT": [
    {
      "brief": "This command instructs the Palette 2 to cut the filament  currently loaded in the splice core.",
      "codes": [
        "PALETTE_CUT"
      ],
      "id": "Klipper.PALETTE_CUT[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "This command instructs the Palette 2 to cut the filament  currently loaded in the splice core",
      "url": "https://www.klipper3d.org/G-Codes.html#palette-2-commands"
    }
  ],
  "PALETTE_DISCONNECT": [
    {
      "brief": "This command disconnects from the Palette 2.",
      "codes": [
        "PALETTE_DISCONNECT"
      ],
      "id": "Klipper.PALETTE_DISCONNECT[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "This command disconnects from the Palette 2",
      "url": "https://www.klipper3d.org/G-Codes.html#palette-2-commands"
    }
  ],
  "PALETTE_SMART_LOAD": [
    {
      "brief": "This command start the smart load sequence on the  Palette 2. Filament is loaded automatically by extruding it the distance  calibrated on the device for the printer, and instructs the Palette 2  once the loading has been completed. This command is the same as pressing",
      "codes": [
        "PALETTE_SMART_LOAD"
      ],
      "id": "Klipper.PALETTE_SMART_LOAD[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "This command start the smart load sequence on the  Palette 2",
      "url": "https://www.klipper3d.org/G-Codes.html#palette-2-commands"
    }
  ],
  "PAUSE": [
    {
      "brief": "Pauses the current print. The current position is captured  for restoration upon resume.",
      "codes": [
        "PAUSE"
      ],
      "id": "Klipper.PAUSE[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "Pauses the current print",
      "url": "https://www.klipper3d.org/G-Codes.html#pause-resume"
    }
  ],
  "PID_CALIBRATE": [
    {
      "brief": "Perform a PID calibration test. The specified  heater will be enabled until the specified target temperature is  reached, and then the heater will be turned off and on for several  cycles. If the WRITE_FILE parameter is enabled, then the file  /tmp/heattest.txt will be created with a log of all temperature  samples taken during the test.",
      "codes": [
        "PID_CALIBRATE"
      ],
      "id": "Klipper.PID_CALIBRATE[0]",
      "parameters": [
        {
          "description": "",
          "label": "HEATER=<config_name>",
          "optional": false,
          "tag": "HEATER",
          "values": []
        },
        {
          "description": "",
          "label": "TARGET=<temperature>",
          "optional": false,
          "tag": "TARGET",
          "values": []
        },
        {
          "description": "",
          "label": "WRITE_FILE=1",
          "optional": true,
          "tag": "WRITE_FILE1",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Perform a PID calibration test",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "PROBE": [
    {
      "brief": "Move the nozzle downwards until  the probe triggers. If any of the optional parameters are provided  they override their equivalent setting in the",
      "codes": [
        "PROBE"
      ],
      "id": "Klipper.PROBE[0]",
      "parameters": [
        {
          "description": "",
          "label": "PROBE_SPEED=<mm/s>",
          "optional": true,
          "tag": "PROBE_SPEED",
          "values": []
        },
        {
          "description": "",
          "label": "LIFT_SPEED=<mm/s>",
          "optional": true,
          "tag": "LIFT_SPEED",
          "values": []
        },
        {
          "description": "",
          "label": "SAMPLES=<count>",
          "optional": true,
          "tag": "SAMPLES",
          "values": []
        },
        {
          "description": "",
          "label": "SAMPLE_RETRACT_DIST=<mm>",
          "optional": true,
          "tag": "SAMPLE_RETRACT_DIST",
          "values": []
        },
        {
          "description": "",
          "label": "SAMPLES_TOLERANCE=<mm>",
          "optional": true,
          "tag": "SAMPLES_TOLERANCE",
          "values": []
        },
        {
          "description": "",
          "label": "SAMPLES_TOLERANCE_RETRIES=<count>",
          "optional": true,
          "tag": "SAMPLES_TOLERANCE_RETRIES",
          "values": []
        },
        {
          "description": "",
          "label": "SAMPLES_RESULT=median|average",
          "optional": true,
          "tag": "SAMPLES_RESULTmedian|average",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Move the nozzle downwards until  the probe triggers",
      "url": "https://www.klipper3d.org/G-Codes.html#probe"
    }
  ],
  "PROBE_ACCURACY": [
    {
      "brief": "Calculate the maximum, minimum,  average, median, and standard deviation of multiple probe  samples. By default, 10 SAMPLES are taken. Otherwise the optional  parameters default to their equivalent setting in the probe config  section.",
      "codes": [
        "PROBE_ACCURACY"
      ],
      "id": "Klipper.PROBE_ACCURACY[0]",
      "parameters": [
        {
          "description": "",
          "label": "PROBE_SPEED=<mm/s>",
          "optional": true,
          "tag": "PROBE_SPEED",
          "values": []
        },
        {
          "description": "",
          "label": "SAMPLES=<count>",
          "optional": true,
          "tag": "SAMPLES",
          "values": []
        },
        {
          "description": "",
          "label": "SAMPLE_RETRACT_DIST=<mm>",
          "optional": true,
          "tag": "SAMPLE_RETRACT_DIST",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Calculate the maximum, minimum,  average, median, and standard deviation of multiple probe  samples",
      "url": "https://www.klipper3d.org/G-Codes.html#probe"
    }
  ],
  "PROBE_CALIBRATE": [
    {
      "brief": "Run a  helper script useful for calibrating the probe's z_offset. See the  PROBE command for details on the optional probe parameters. See  the MANUAL_PROBE command for details on the SPEED parameter and the  additional commands available while the tool is active. Please note,  the PROBE_CALIBRATE command uses the speed variable  to move in XY direction as well as Z.",
      "codes": [
        "PROBE_CALIBRATE"
      ],
      "id": "Klipper.PROBE_CALIBRATE[0]",
      "parameters": [
        {
          "description": "",
          "label": "SPEED=<speed>",
          "optional": true,
          "tag": "SPEED",
          "values": []
        },
        {
          "description": "",
          "label": "<probe_parameter>=<value>",
          "optional": true,
          "tag": "probe_parameter=value",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Run a  helper script useful for calibrating the probe's z_offset",
      "url": "https://www.klipper3d.org/G-Codes.html#probe"
    }
  ],
  "QUERY_ADC": [
    {
      "brief": "Report the last  analog value received for a configured analog pin. If NAME is not  provided, the list of available adc names are reported. If PULLUP is  provided (as a value in Ohms), the raw analog value along with the  equivalent resistance given that pullup is reported.",
      "codes": [
        "QUERY_ADC"
      ],
      "id": "Klipper.QUERY_ADC[0]",
      "parameters": [
        {
          "description": "",
          "label": "NAME=<config_name>",
          "optional": true,
          "tag": "NAME",
          "values": []
        },
        {
          "description": "",
          "label": "PULLUP=<value>",
          "optional": true,
          "tag": "PULLUP",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Report the last  analog value received for a configured analog pin",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "QUERY_ENDSTOPS": [
    {
      "brief": "Probe the axis endstops and report if they are  \"triggered\" or in an \"open\" state. This command is typically used to  verify that an endstop is working correctly.",
      "codes": [
        "QUERY_ENDSTOPS"
      ],
      "id": "Klipper.QUERY_ENDSTOPS[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "Probe the axis endstops and report if they are  \"triggered\" or in an \"open\" state",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "QUERY_FILAMENT_SENSOR": [
    {
      "brief": "Queries the current  status of the filament sensor. The data displayed on the terminal  will depend on the sensor type defined in the confguration.",
      "codes": [
        "QUERY_FILAMENT_SENSOR"
      ],
      "id": "Klipper.QUERY_FILAMENT_SENSOR[0]",
      "parameters": [
        {
          "description": "",
          "label": "SENSOR=<sensor_name>",
          "optional": false,
          "tag": "SENSOR",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Queries the current  status of the filament sensor",
      "url": "https://www.klipper3d.org/G-Codes.html#filament-sensor"
    }
  ],
  "QUERY_FILAMENT_WIDTH": [
    {
      "brief": "- Return the current measured filament width",
      "codes": [
        "QUERY_FILAMENT_WIDTH"
      ],
      "id": "Klipper.QUERY_FILAMENT_WIDTH[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "- Return the current measured filament width",
      "url": "https://www.klipper3d.org/G-Codes.html#filament-width-sensor-commands"
    }
  ],
  "QUERY_PROBE": [
    {
      "brief": "Report the current status of the probe (\"triggered\"  or \"open\").",
      "codes": [
        "QUERY_PROBE"
      ],
      "id": "Klipper.QUERY_PROBE[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "Report the current status of the probe (\"triggered\"  or \"open\")",
      "url": "https://www.klipper3d.org/G-Codes.html#probe"
    }
  ],
  "QUERY_RAW_FILAMENT_WIDTH": [
    {
      "brief": "- Return the current ADC channel readings and  RAW sensor value for calibration points",
      "codes": [
        "QUERY_RAW_FILAMENT_WIDTH"
      ],
      "id": "Klipper.QUERY_RAW_FILAMENT_WIDTH[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "- Return the current ADC channel readings and  RAW sensor value for calibration points",
      "url": "https://www.klipper3d.org/G-Codes.html#hall-filament-width-sensor-commands"
    }
  ],
  "RESET_FILAMENT_WIDTH_SENSOR": [
    {
      "brief": "- Clear all sensor readings. Helpful after  filament change",
      "codes": [
        "RESET_FILAMENT_WIDTH_SENSOR"
      ],
      "id": "Klipper.RESET_FILAMENT_WIDTH_SENSOR[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "- Clear all sensor readings",
      "url": "https://www.klipper3d.org/G-Codes.html#filament-width-sensor-commands"
    }
  ],
  "RESPOND": [
    {
      "brief": "echo the message  prepended with",
      "codes": [
        "RESPOND"
      ],
      "id": "Klipper.RESPOND[0]",
      "parameters": [
        {
          "description": "",
          "label": "PREFIX=<prefix>",
          "optional": false,
          "tag": "PREFIX",
          "values": []
        },
        {
          "description": "",
          "label": "MSG=\"<message>\"",
          "optional": false,
          "tag": "MSG\"",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "echo the message  prepended with",
      "url": "https://www.klipper3d.org/G-Codes.html#send-message-respond-to-host"
    }
  ],
  "RESTART": [
    {
      "brief": "This will cause the host software to reload its config  and perform an internal reset. This command will not clear error  state from the micro-controller (see FIRMWARE_RESTART) nor will it  load new software (see",
      "codes": [
        "RESTART"
      ],
      "id": "Klipper.RESTART[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "This will cause the host software to reload its config  and perform an internal reset",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "RESTORE_GCODE_STATE": [
    {
      "brief": "Restore a state previously saved via  SAVE_GCODE_STATE. If \"MOVE=1\" is specified then a toolhead move will  be issued to move back to the previous XYZ position. If \"MOVE_SPEED\"  is specified then the toolhead move will be performed with the given  speed (in mm/s); otherwise the toolhead move will use the restored  g-code speed.",
      "codes": [
        "RESTORE_GCODE_STATE"
      ],
      "id": "Klipper.RESTORE_GCODE_STATE[0]",
      "parameters": [
        {
          "description": "",
          "label": "NAME=<state_name>",
          "optional": true,
          "tag": "NAME",
          "values": []
        },
        {
          "description": "",
          "label": "MOVE=1",
          "optional": true,
          "tag": "MOVE1",
          "values": []
        },
        {
          "description": "",
          "label": "MOVE_SPEED=<speed>",
          "optional": true,
          "tag": "MOVE_SPEED",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Restore a state previously saved via  SAVE_GCODE_STATE",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "RESUME": [
    {
      "brief": "Resumes the print from a pause, first  restoring the previously captured position.  The VELOCITY parameter  determines the speed at which the tool should return to the original  captured position.",
      "codes": [
        "RESUME"
      ],
      "id": "Klipper.RESUME[0]",
      "parameters": [
        {
          "description": "",
          "label": "VELOCITY=<value>",
          "optional": true,
          "tag": "VELOCITY",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Resumes the print from a pause, first  restoring the previously captured position",
      "url": "https://www.klipper3d.org/G-Codes.html#pause-resume"
    }
  ],
  "SAVE_CONFIG": [
    {
      "brief": "This command will overwrite the main printer config  file and restart the host software. This command is used in  conjunction with other calibration commands to store the results of  calibration tests.",
      "codes": [
        "SAVE_CONFIG"
      ],
      "id": "Klipper.SAVE_CONFIG[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "This command will overwrite the main printer config  file and restart the host software",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "SAVE_GCODE_STATE": [
    {
      "brief": "Save the current  g-code coordinate parsing state. Saving and restoring the g-code  state is useful in scripts and macros. This command saves the  current g-code absolute coordinate mode (G90/G91), absolute extrude  mode (M82/M83), origin (G92), offset (SET_GCODE_OFFSET), speed  override (M220), extruder override (M221), move speed, current XYZ  position, and relative extruder \"E\" position. If NAME is provided it  allows one to name the saved state to the given string. If NAME is  not provided it defaults to \"default\".",
      "codes": [
        "SAVE_GCODE_STATE"
      ],
      "id": "Klipper.SAVE_GCODE_STATE[0]",
      "parameters": [
        {
          "description": "",
          "label": "NAME=<state_name>",
          "optional": true,
          "tag": "NAME",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Save the current  g-code coordinate parsing state",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "SAVE_VARIABLE": [
    {
      "brief": "Saves the variable to  disk so that it can be used across restarts. All stored variables  are loaded into the",
      "codes": [
        "SAVE_VARIABLE"
      ],
      "id": "Klipper.SAVE_VARIABLE[0]",
      "parameters": [
        {
          "description": "",
          "label": "VARIABLE=<name>",
          "optional": false,
          "tag": "VARIABLE",
          "values": []
        },
        {
          "description": "",
          "label": "VALUE=<value>",
          "optional": false,
          "tag": "VALUE",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Saves the variable to  disk so that it can be used across restarts",
      "url": "https://www.klipper3d.org/G-Codes.html#save-variables"
    }
  ],
  "SCREWS_TILT_CALCULATE": [
    {
      "brief": "This command will invoke the bed screws adjustment tool. It will command the  nozzle to different locations (as defined in the config file)  probing the z height and calculate the number of knob turns to  adjust the bed level. If DIRECTION is specified, the knob turns will all  be in the same direction, clockwise (CW) or counterclockwise (CCW).  See the PROBE command for details on the optional probe parameters.  IMPORTANT: You MUST always do a G28 before using this command.",
      "codes": [
        "SCREWS_TILT_CALCULATE"
      ],
      "id": "Klipper.SCREWS_TILT_CALCULATE[0]",
      "parameters": [
        {
          "description": "",
          "label": "DIRECTION=CW|CCW",
          "optional": true,
          "tag": "DIRECTIONCW|CCW",
          "values": []
        },
        {
          "description": "",
          "label": "<probe_parameter>=<value>",
          "optional": true,
          "tag": "probe_parameter=value",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This command will invoke the bed screws adjustment tool",
      "url": "https://www.klipper3d.org/G-Codes.html#bed-screws-tilt-adjust-helper"
    }
  ],
  "SDCARD_LOOP_BEGIN": [
    {
      "brief": "Begin a looped section in the SD  print. A count of 0 indicates that the section should be looped  indefinately.",
      "codes": [
        "SDCARD_LOOP_BEGIN"
      ],
      "id": "Klipper.SDCARD_LOOP_BEGIN[0]",
      "parameters": [
        {
          "description": "",
          "label": "COUNT=<count>",
          "optional": false,
          "tag": "COUNT",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Begin a looped section in the SD  print",
      "url": "https://www.klipper3d.org/G-Codes.html#sdcard-loop"
    }
  ],
  "SDCARD_LOOP_DESIST": [
    {
      "brief": "Complete existing loops without further  iterations.",
      "codes": [
        "SDCARD_LOOP_DESIST"
      ],
      "id": "Klipper.SDCARD_LOOP_DESIST[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "Complete existing loops without further  iterations",
      "url": "https://www.klipper3d.org/G-Codes.html#sdcard-loop"
    }
  ],
  "SDCARD_LOOP_END": [
    {
      "brief": "End a looped section in the SD print.",
      "codes": [
        "SDCARD_LOOP_END"
      ],
      "id": "Klipper.SDCARD_LOOP_END[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "End a looped section in the SD print",
      "url": "https://www.klipper3d.org/G-Codes.html#sdcard-loop"
    }
  ],
  "SDCARD_PRINT_FILE": [
    {
      "brief": "",
      "codes": [
        "SDCARD_PRINT_FILE"
      ],
      "id": "Klipper.SDCARD_PRINT_FILE[0]",
      "parameters": [
        {
          "description": "",
          "label": "FILENAME=<filename>",
          "optional": false,
          "tag": "FILENAME",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-sd-card-commands"
    }
  ],
  "SDCARD_RESET_FILE": [
    {
      "brief": "",
      "codes": [
        "SDCARD_RESET_FILE"
      ],
      "id": "Klipper.SDCARD_RESET_FILE[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-sd-card-commands"
    }
  ],
  "SET_DISPLAY_GROUP": [
    {
      "brief": "Set the  active display group of an lcd display. This allows to define  multiple display data groups in the config,  e.g.",
      "codes": [
        "SET_DISPLAY_GROUP"
      ],
      "id": "Klipper.SET_DISPLAY_GROUP[0]",
      "parameters": [
        {
          "description": "",
          "label": "DISPLAY=<display>",
          "optional": true,
          "tag": "DISPLAY",
          "values": []
        },
        {
          "description": "",
          "label": "GROUP=<group>",
          "optional": false,
          "tag": "GROUP",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Set the  active display group of an lcd display",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "SET_DUAL_CARRIAGE": [
    {
      "brief": "This command will set the active  carriage. It is typically invoked from the activate_gcode and  deactivate_gcode fields in a multiple extruder configuration.",
      "codes": [
        "SET_DUAL_CARRIAGE"
      ],
      "id": "Klipper.SET_DUAL_CARRIAGE[0]",
      "parameters": [
        {
          "description": "",
          "label": "CARRIAGE=0|1",
          "optional": true,
          "tag": "CARRIAGE0|1",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This command will set the active  carriage",
      "url": "https://www.klipper3d.org/G-Codes.html#dual-carriages"
    }
  ],
  "SET_EXTRUDER_STEP_DISTANCE": [
    {
      "brief": "Set a new value for the provided extruder's  \"step distance\". The \"step distance\" is",
      "codes": [
        "SET_EXTRUDER_STEP_DISTANCE"
      ],
      "id": "Klipper.SET_EXTRUDER_STEP_DISTANCE[0]",
      "parameters": [
        {
          "description": "",
          "label": "EXTRUDER=<config_name>",
          "optional": true,
          "tag": "EXTRUDER",
          "values": []
        },
        {
          "description": "",
          "label": "DISTANCE=<distance>",
          "optional": true,
          "tag": "DISTANCE",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Set a new value for the provided extruder's  \"step distance\"",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "SET_FAN_SPEED": [
    {
      "brief": "This command sets  the speed of a fan.",
      "codes": [
        "SET_FAN_SPEED"
      ],
      "id": "Klipper.SET_FAN_SPEED[0]",
      "parameters": [
        {
          "description": "",
          "label": "FAN=config_name",
          "optional": false,
          "tag": "FANconfig_name",
          "values": []
        },
        {
          "description": "",
          "label": "SPEED=<speed>",
          "optional": false,
          "tag": "SPEED",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This command sets  the speed of a fan",
      "url": "https://www.klipper3d.org/G-Codes.html#manually-controlled-fans-commands"
    }
  ],
  "SET_FILAMENT_SENSOR": [
    {
      "brief": "Sets the  filament sensor on/off. If ENABLE is set to 0, the filament sensor  will be disabled, if set to 1 it is enabled.",
      "codes": [
        "SET_FILAMENT_SENSOR"
      ],
      "id": "Klipper.SET_FILAMENT_SENSOR[0]",
      "parameters": [
        {
          "description": "",
          "label": "SENSOR=<sensor_name>",
          "optional": false,
          "tag": "SENSOR",
          "values": []
        },
        {
          "description": "",
          "label": "ENABLE=0|1",
          "optional": true,
          "tag": "ENABLE0|1",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Sets the  filament sensor on/off",
      "url": "https://www.klipper3d.org/G-Codes.html#filament-sensor"
    }
  ],
  "SET_GCODE_OFFSET": [
    {
      "brief": "Set a positional offset to apply to  future G-Code commands. This is commonly used to virtually change  the Z bed offset or to set nozzle XY offsets when switching  extruders. For example, if \"SET_GCODE_OFFSET Z=0.2\" is sent, then  future G-Code moves will have 0.2mm added to their Z height. If the  X_ADJUST style parameters are used, then the adjustment will be  added to any existing offset (eg, \"SET_GCODE_OFFSET Z=-0.2\" followed  by \"SET_GCODE_OFFSET Z_ADJUST=0.3\" would result in a total Z offset  of 0.1). If \"MOVE=1\" is specified then a toolhead move will be  issued to apply the given offset (otherwise the offset will take  effect on the next absolute G-Code move that specifies the given  axis). If \"MOVE_SPEED\" is specified then the toolhead move will be  performed with the given speed (in mm/s); otherwise the toolhead  move will use the last specified G-Code speed.",
      "codes": [
        "SET_GCODE_OFFSET"
      ],
      "id": "Klipper.SET_GCODE_OFFSET[0]",
      "parameters": [
        {
          "description": "",
          "label": "X=<pos>|X_ADJUST=<adjust>",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": "",
          "label": "Y=<pos>|Y_ADJUST=<adjust>",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": "",
          "label": "Z=<pos>|Z_ADJUST=<adjust>",
          "optional": true,
          "tag": "Z",
          "values": []
        },
        {
          "description": "",
          "label": "MOVE=1",
          "optional": true,
          "tag": "MOVE1",
          "values": []
        },
        {
          "description": "",
          "label": "MOVE_SPEED=<speed>",
          "optional": true,
          "tag": "MOVE_SPEED",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Set a positional offset to apply to  future G-Code commands",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "SET_GCODE_VARIABLE": [
    {
      "brief": "This command allows one to change the value of a  gcode_macro variable at run-time. The provided VALUE is parsed as a  Python literal.",
      "codes": [
        "SET_GCODE_VARIABLE"
      ],
      "id": "Klipper.SET_GCODE_VARIABLE[0]",
      "parameters": [
        {
          "description": "",
          "label": "MACRO=<macro_name>",
          "optional": false,
          "tag": "MACRO",
          "values": []
        },
        {
          "description": "",
          "label": "VARIABLE=<name>",
          "optional": false,
          "tag": "VARIABLE",
          "values": []
        },
        {
          "description": "",
          "label": "VALUE=<value>",
          "optional": false,
          "tag": "VALUE",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This command allows one to change the value of a  gcode_macro variable at run-time",
      "url": "https://www.klipper3d.org/G-Codes.html#g-code-macro-commands"
    }
  ],
  "SET_HEATER_TEMPERATURE": [
    {
      "brief": "Sets the target temperature for a heater. If a target temperature is  not supplied, the target is 0.",
      "codes": [
        "SET_HEATER_TEMPERATURE"
      ],
      "id": "Klipper.SET_HEATER_TEMPERATURE[0]",
      "parameters": [
        {
          "description": "",
          "label": "HEATER=<heater_name>",
          "optional": false,
          "tag": "HEATER",
          "values": []
        },
        {
          "description": "",
          "label": "TARGET=<target_temperature>",
          "optional": true,
          "tag": "TARGET",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Sets the target temperature for a heater",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "SET_IDLE_TIMEOUT": [
    {
      "brief": "Allows the user to set the  idle timeout (in seconds).",
      "codes": [
        "SET_IDLE_TIMEOUT"
      ],
      "id": "Klipper.SET_IDLE_TIMEOUT[0]",
      "parameters": [
        {
          "description": "",
          "label": "TIMEOUT=<timeout>",
          "optional": true,
          "tag": "TIMEOUT",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Allows the user to set the  idle timeout (in seconds)",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "SET_INPUT_SHAPER": [
    {
      "brief": "Modify input shaper parameters. Note that SHAPER_TYPE parameter  resets input shaper for both X and Y axes even if different shaper  types have been configured in [input_shaper] section. SHAPER_TYPE  cannot be used together with either of SHAPER_TYPE_X and  SHAPER_TYPE_Y parameters. See",
      "codes": [
        "SET_INPUT_SHAPER"
      ],
      "id": "Klipper.SET_INPUT_SHAPER[0]",
      "parameters": [
        {
          "description": "",
          "label": "SHAPER_FREQ_X=<shaper_freq_x>",
          "optional": true,
          "tag": "SHAPER_FREQ_X",
          "values": []
        },
        {
          "description": "",
          "label": "SHAPER_FREQ_Y=<shaper_freq_y>",
          "optional": true,
          "tag": "SHAPER_FREQ_Y",
          "values": []
        },
        {
          "description": "",
          "label": "DAMPING_RATIO_X=<damping_ratio_x>",
          "optional": true,
          "tag": "DAMPING_RATIO_X",
          "values": []
        },
        {
          "description": "",
          "label": "DAMPING_RATIO_Y=<damping_ratio_y>",
          "optional": true,
          "tag": "DAMPING_RATIO_Y",
          "values": []
        },
        {
          "description": "",
          "label": "SHAPER_TYPE=<shaper>",
          "optional": true,
          "tag": "SHAPER_TYPE",
          "values": []
        },
        {
          "description": "",
          "label": "SHAPER_TYPE_X=<shaper_type_x>",
          "optional": true,
          "tag": "SHAPER_TYPE_X",
          "values": []
        },
        {
          "description": "",
          "label": "SHAPER_TYPE_Y=<shaper_type_y>",
          "optional": true,
          "tag": "SHAPER_TYPE_Y",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Modify input shaper parameters",
      "url": "https://www.klipper3d.org/G-Codes.html#resonance-compensation"
    }
  ],
  "SET_KINEMATIC_POSITION": [
    {
      "brief": "Force  the low-level kinematic code to believe the toolhead is at the given  cartesian position. This is a diagnostic and debugging command; use  SET_GCODE_OFFSET and/or G92 for regular axis transformations. If an  axis is not specified then it will default to the position that the  head was last commanded to. Setting an incorrect or invalid position  may lead to internal software errors. This command may invalidate  future boundary checks; issue a G28 afterwards to reset the  kinematics.",
      "codes": [
        "SET_KINEMATIC_POSITION"
      ],
      "id": "Klipper.SET_KINEMATIC_POSITION[0]",
      "parameters": [
        {
          "description": "",
          "label": "X=<value>",
          "optional": true,
          "tag": "X",
          "values": []
        },
        {
          "description": "",
          "label": "Y=<value>",
          "optional": true,
          "tag": "Y",
          "values": []
        },
        {
          "description": "",
          "label": "Z=<value>",
          "optional": true,
          "tag": "Z",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Force  the low-level kinematic code to believe the toolhead is at the given  cartesian position",
      "url": "https://www.klipper3d.org/G-Codes.html#force-movement"
    }
  ],
  "SET_LED": [
    {
      "brief": "This sets the LED  output. Each color",
      "codes": [
        "SET_LED"
      ],
      "id": "Klipper.SET_LED[0]",
      "parameters": [
        {
          "description": "",
          "label": "LED=<config_name>",
          "optional": false,
          "tag": "LED",
          "values": []
        },
        {
          "description": "",
          "label": "RED=<value>",
          "optional": false,
          "tag": "RED",
          "values": []
        },
        {
          "description": "",
          "label": "GREEN=<value>",
          "optional": false,
          "tag": "GREEN",
          "values": []
        },
        {
          "description": "",
          "label": "BLUE=<value>",
          "optional": false,
          "tag": "BLUE",
          "values": []
        },
        {
          "description": "",
          "label": "WHITE=<value>",
          "optional": false,
          "tag": "WHITE",
          "values": []
        },
        {
          "description": "",
          "label": "INDEX=<index>",
          "optional": true,
          "tag": "INDEX",
          "values": []
        },
        {
          "description": "",
          "label": "TRANSMIT=0",
          "optional": true,
          "tag": "TRANSMIT0",
          "values": []
        },
        {
          "description": "",
          "label": "SYNC=1",
          "optional": true,
          "tag": "SYNC1",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This sets the LED  output",
      "url": "https://www.klipper3d.org/G-Codes.html#neopixel-and-dotstar-commands"
    }
  ],
  "SET_PIN": [
    {
      "brief": "",
      "codes": [
        "SET_PIN"
      ],
      "id": "Klipper.SET_PIN[0]",
      "parameters": [
        {
          "description": "",
          "label": "PIN=config_name",
          "optional": false,
          "tag": "PINconfig_name",
          "values": []
        },
        {
          "description": "",
          "label": "VALUE=<value>",
          "optional": false,
          "tag": "VALUE",
          "values": []
        },
        {
          "description": "",
          "label": "CYCLE_TIME=<cycle_time>",
          "optional": false,
          "tag": "CYCLE_TIME",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "",
      "url": "https://www.klipper3d.org/G-Codes.html#custom-pin-commands"
    }
  ],
  "SET_PRESSURE_ADVANCE": [
    {
      "brief": "Set pressure advance  parameters. If EXTRUDER is not specified, it defaults to the active  extruder.",
      "codes": [
        "SET_PRESSURE_ADVANCE"
      ],
      "id": "Klipper.SET_PRESSURE_ADVANCE[0]",
      "parameters": [
        {
          "description": "",
          "label": "EXTRUDER=<config_name>",
          "optional": true,
          "tag": "EXTRUDER",
          "values": []
        },
        {
          "description": "",
          "label": "ADVANCE=<pressure_advance>",
          "optional": true,
          "tag": "ADVANCE",
          "values": []
        },
        {
          "description": "",
          "label": "SMOOTH_TIME=<pressure_advance_smooth_time>",
          "optional": true,
          "tag": "SMOOTH_TIME",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Set pressure advance  parameters",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "SET_RETRACTION": [
    {
      "brief": "Adjust the  parameters used by firmware retraction. RETRACT_LENGTH determines  the length of filament to retract and unretract. The speed of  retraction is adjusted via RETRACT_SPEED, and is typically set  relatively high. The speed of unretraction is adjusted via  UNRETRACT_SPEED, and is not particularly critical, although often  lower than RETRACT_SPEED. In some cases it is useful to add a small  amount of additional length on unretraction, and this is set via  UNRETRACT_EXTRA_LENGTH. SET_RETRACTION is commonly set as part of  slicer per-filament configuration, as different filaments require  different parameter settings.",
      "codes": [
        "SET_RETRACTION"
      ],
      "id": "Klipper.SET_RETRACTION[0]",
      "parameters": [
        {
          "description": "",
          "label": "RETRACT_LENGTH=<mm>",
          "optional": true,
          "tag": "RETRACT_LENGTH",
          "values": []
        },
        {
          "description": "",
          "label": "RETRACT_SPEED=<mm/s>",
          "optional": true,
          "tag": "RETRACT_SPEED",
          "values": []
        },
        {
          "description": "",
          "label": "UNRETRACT_EXTRA_LENGTH=<mm>",
          "optional": true,
          "tag": "UNRETRACT_EXTRA_LENGTH",
          "values": []
        },
        {
          "description": "",
          "label": "UNRETRACT_SPEED=<mm/s>",
          "optional": true,
          "tag": "UNRETRACT_SPEED",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Adjust the  parameters used by firmware retraction",
      "url": "https://www.klipper3d.org/G-Codes.html#firmware-retraction"
    }
  ],
  "SET_SERVO": [
    {
      "brief": "Set the servo position to the given angle (in degrees) or pulse  width (in seconds). Use",
      "codes": [
        "SET_SERVO"
      ],
      "id": "Klipper.SET_SERVO[0]",
      "parameters": [
        {
          "description": "",
          "label": "SERVO=config_name",
          "optional": false,
          "tag": "SERVOconfig_name",
          "values": []
        },
        {
          "description": "",
          "label": "ANGLE=<degrees>",
          "optional": true,
          "tag": "ANGLE",
          "values": []
        },
        {
          "description": "",
          "label": "|",
          "optional": false,
          "tag": "|",
          "values": []
        },
        {
          "description": "",
          "label": "WIDTH=<seconds>",
          "optional": true,
          "tag": "WIDTH",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Set the servo position to the given angle (in degrees) or pulse  width (in seconds)",
      "url": "https://www.klipper3d.org/G-Codes.html#servo-commands"
    }
  ],
  "SET_SKEW": [
    {
      "brief": "Configures the [skew_correction]  module with measurements (in mm) taken from a calibration print.  One may enter measurements for any combination of planes, planes not  entered will retain their current value. If",
      "codes": [
        "SET_SKEW"
      ],
      "id": "Klipper.SET_SKEW[0]",
      "parameters": [
        {
          "description": "",
          "label": "XY=<ac_length,bd_length,ad_length>",
          "optional": true,
          "tag": "XY",
          "values": []
        },
        {
          "description": "",
          "label": "XZ=<ac,bd,ad>",
          "optional": true,
          "tag": "XZ",
          "values": []
        },
        {
          "description": "",
          "label": "YZ=<ac,bd,ad>",
          "optional": true,
          "tag": "YZ",
          "values": []
        },
        {
          "description": "",
          "label": "CLEAR=<0|1>",
          "optional": true,
          "tag": "CLEAR",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Configures the [skew_correction]  module with measurements (in mm) taken from a calibration print",
      "url": "https://www.klipper3d.org/G-Codes.html#skew-correction"
    }
  ],
  "SET_STEPPER_ENABLE": [
    {
      "brief": "Enable or  disable only the given stepper. This is a diagnostic and debugging  tool and must be used with care. Disabling an axis motor does not  reset the homing information. Manually moving a disabled stepper may  cause the machine to operate the motor outside of safe limits. This  can lead to damage to axis components, hot ends, and print surface.",
      "codes": [
        "SET_STEPPER_ENABLE"
      ],
      "id": "Klipper.SET_STEPPER_ENABLE[0]",
      "parameters": [
        {
          "description": "",
          "label": "STEPPER=<config_name>",
          "optional": false,
          "tag": "STEPPER",
          "values": []
        },
        {
          "description": "",
          "label": "ENABLE=0|1",
          "optional": true,
          "tag": "ENABLE0|1",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Enable or  disable only the given stepper",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "SET_TEMPERATURE_FAN_TARGET": [
    {
      "brief": "Sets the target temperature for a  temperature_fan. If a target is not supplied, it is set to the  specified temperature in the config file. If speeds are not supplied, no change is applied.",
      "codes": [
        "SET_TEMPERATURE_FAN_TARGET"
      ],
      "id": "Klipper.SET_TEMPERATURE_FAN_TARGET[0]",
      "parameters": [
        {
          "description": "",
          "label": "temperature_fan=<temperature_fan_name>",
          "optional": false,
          "tag": "temperature_fan",
          "values": []
        },
        {
          "description": "",
          "label": "target=<target_temperature>",
          "optional": true,
          "tag": "target",
          "values": []
        },
        {
          "description": "",
          "label": "min_speed=<min_speed>",
          "optional": true,
          "tag": "min_speed",
          "values": []
        },
        {
          "description": "",
          "label": "max_speed=<max_speed>",
          "optional": true,
          "tag": "max_speed",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Sets the target temperature for a  temperature_fan",
      "url": "https://www.klipper3d.org/G-Codes.html#temperature-fan-commands"
    }
  ],
  "SET_TMC_CURRENT": [
    {
      "brief": "This will adjust the run and hold currents of the TMC driver.  (HOLDCURRENT is not applicable to tmc2660 drivers.)",
      "codes": [
        "SET_TMC_CURRENT"
      ],
      "id": "Klipper.SET_TMC_CURRENT[0]",
      "parameters": [
        {
          "description": "",
          "label": "STEPPER=<name>",
          "optional": false,
          "tag": "STEPPER",
          "values": []
        },
        {
          "description": "",
          "label": "CURRENT=<amps>",
          "optional": false,
          "tag": "CURRENT",
          "values": []
        },
        {
          "description": "",
          "label": "HOLDCURRENT=<amps>",
          "optional": false,
          "tag": "HOLDCURRENT",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This will adjust the run and hold currents of the TMC driver",
      "url": "https://www.klipper3d.org/G-Codes.html#tmc-stepper-drivers"
    }
  ],
  "SET_TMC_FIELD": [
    {
      "brief": "This  will alter the value of the specified register field of the TMC  driver. This command is intended for low-level diagnostics and  debugging only because changing the fields during run-time can lead  to undesired and potentially dangerous behavior of your printer.  Permanent changes should be made using the printer configuration  file instead. No sanity checks are performed for the given values.",
      "codes": [
        "SET_TMC_FIELD"
      ],
      "id": "Klipper.SET_TMC_FIELD[0]",
      "parameters": [
        {
          "description": "",
          "label": "STEPPER=<name>",
          "optional": false,
          "tag": "STEPPER",
          "values": []
        },
        {
          "description": "",
          "label": "FIELD=<field>",
          "optional": false,
          "tag": "FIELD",
          "values": []
        },
        {
          "description": "",
          "label": "VALUE=<value>",
          "optional": false,
          "tag": "VALUE",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This  will alter the value of the specified register field of the TMC  driver",
      "url": "https://www.klipper3d.org/G-Codes.html#tmc-stepper-drivers"
    }
  ],
  "SET_VELOCITY_LIMIT": [
    {
      "brief": "Modify  the printer's velocity limits.",
      "codes": [
        "SET_VELOCITY_LIMIT"
      ],
      "id": "Klipper.SET_VELOCITY_LIMIT[0]",
      "parameters": [
        {
          "description": "",
          "label": "VELOCITY=<value>",
          "optional": true,
          "tag": "VELOCITY",
          "values": []
        },
        {
          "description": "",
          "label": "ACCEL=<value>",
          "optional": true,
          "tag": "ACCEL",
          "values": []
        },
        {
          "description": "",
          "label": "ACCEL_TO_DECEL=<value>",
          "optional": true,
          "tag": "ACCEL_TO_DECEL",
          "values": []
        },
        {
          "description": "",
          "label": "SQUARE_CORNER_VELOCITY=<value>",
          "optional": true,
          "tag": "SQUARE_CORNER_VELOCITY",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Modify  the printer's velocity limits",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "SHAPER_CALIBRATE": [
    {
      "brief": "Similarly to",
      "codes": [
        "SHAPER_CALIBRATE"
      ],
      "id": "Klipper.SHAPER_CALIBRATE[0]",
      "parameters": [
        {
          "description": "",
          "label": "AXIS=<axis>",
          "optional": true,
          "tag": "AXIS",
          "values": []
        },
        {
          "description": "",
          "label": "NAME=<name>",
          "optional": true,
          "tag": "NAME",
          "values": []
        },
        {
          "description": "",
          "label": "FREQ_START=<min_freq>",
          "optional": true,
          "tag": "FREQ_START",
          "values": []
        },
        {
          "description": "",
          "label": "FREQ_END=<max_freq>",
          "optional": true,
          "tag": "FREQ_END",
          "values": []
        },
        {
          "description": "",
          "label": "HZ_PER_SEC=<hz_per_sec>",
          "optional": true,
          "tag": "HZ_PER_SEC",
          "values": []
        },
        {
          "description": "",
          "label": "MAX_SMOOTHING=<max_smoothing>",
          "optional": true,
          "tag": "MAX_SMOOTHING",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Similarly to",
      "url": "https://www.klipper3d.org/G-Codes.html#resonance-testing-commands"
    }
  ],
  "SKEW_PROFILE": [
    {
      "brief": "Profile  management for skew_correction. LOAD will restore skew state from  the profile matching the supplied name. SAVE will save the current  skew state to a profile matching the supplied name. Remove will  delete the profile matching the supplied name from persistent  memory. Note that after SAVE or REMOVE operations have been run the  SAVE_CONFIG gcode must be run to make the changes to peristent  memory permanent.",
      "codes": [
        "SKEW_PROFILE"
      ],
      "id": "Klipper.SKEW_PROFILE[0]",
      "parameters": [
        {
          "description": "",
          "label": "LOAD=<name>",
          "optional": true,
          "tag": "LOAD",
          "values": []
        },
        {
          "description": "",
          "label": "SAVE=<name>",
          "optional": true,
          "tag": "SAVE",
          "values": []
        },
        {
          "description": "",
          "label": "REMOVE=<name>",
          "optional": true,
          "tag": "REMOVE",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Profile  management for skew_correction",
      "url": "https://www.klipper3d.org/G-Codes.html#skew-correction"
    }
  ],
  "STATUS": [
    {
      "brief": "Report the Klipper host software status.",
      "codes": [
        "STATUS"
      ],
      "id": "Klipper.STATUS[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "Report the Klipper host software status",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "STEPPER_BUZZ": [
    {
      "brief": "Move the given stepper forward  one mm and then backward one mm, repeated 10 times. This is a  diagnostic tool to help verify stepper connectivity.",
      "codes": [
        "STEPPER_BUZZ"
      ],
      "id": "Klipper.STEPPER_BUZZ[0]",
      "parameters": [
        {
          "description": "",
          "label": "STEPPER=<config_name>",
          "optional": false,
          "tag": "STEPPER",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Move the given stepper forward  one mm and then backward one mm, repeated 10 times",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "STEP_DELTA": [
    {
      "brief": "and",
      "codes": [
        "STEP_DELTA"
      ],
      "id": "Klipper.STEP_DELTA[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "and",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "SYNC_STEPPER_TO_EXTRUDER": [
    {
      "brief": "This  command will cause the given extruder STEPPER (as specified in an",
      "codes": [
        "SYNC_STEPPER_TO_EXTRUDER"
      ],
      "id": "Klipper.SYNC_STEPPER_TO_EXTRUDER[0]",
      "parameters": [
        {
          "description": "",
          "label": "STEPPER=<name>",
          "optional": false,
          "tag": "STEPPER",
          "values": []
        },
        {
          "description": "",
          "label": "EXTRUDER=<name>",
          "optional": true,
          "tag": "EXTRUDER",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This  command will cause the given extruder STEPPER (as specified in an",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "T0": [
    {
      "brief": "Switch to the specified tool",
      "codes": [
        "T0",
        "T1",
        "T2",
        "T3",
        "T4",
        "T5",
        "T6"
      ],
      "id": "Marlin.T0[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Select Tool",
      "url": "https://marlinfw.org/docs/gcode/T001-T002"
    }
  ],
  "T1": [
    {
      "brief": "Switch to the specified tool",
      "codes": [
        "T0",
        "T1",
        "T2",
        "T3",
        "T4",
        "T5",
        "T6"
      ],
      "id": "Marlin.T1[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Select Tool",
      "url": "https://marlinfw.org/docs/gcode/T001-T002"
    }
  ],
  "T2": [
    {
      "brief": "Switch to the specified tool",
      "codes": [
        "T0",
        "T1",
        "T2",
        "T3",
        "T4",
        "T5",
        "T6"
      ],
      "id": "Marlin.T2[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Select Tool",
      "url": "https://marlinfw.org/docs/gcode/T001-T002"
    }
  ],
  "T3": [
    {
      "brief": "Switch to the specified tool",
      "codes": [
        "T0",
        "T1",
        "T2",
        "T3",
        "T4",
        "T5",
        "T6"
      ],
      "id": "Marlin.T3[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Select Tool",
      "url": "https://marlinfw.org/docs/gcode/T001-T002"
    }
  ],
  "T4": [
    {
      "brief": "Switch to the specified tool",
      "codes": [
        "T0",
        "T1",
        "T2",
        "T3",
        "T4",
        "T5",
        "T6"
      ],
      "id": "Marlin.T4[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Select Tool",
      "url": "https://marlinfw.org/docs/gcode/T001-T002"
    }
  ],
  "T5": [
    {
      "brief": "Switch to the specified tool",
      "codes": [
        "T0",
        "T1",
        "T2",
        "T3",
        "T4",
        "T5",
        "T6"
      ],
      "id": "Marlin.T5[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Select Tool",
      "url": "https://marlinfw.org/docs/gcode/T001-T002"
    }
  ],
  "T6": [
    {
      "brief": "Switch to the specified tool",
      "codes": [
        "T0",
        "T1",
        "T2",
        "T3",
        "T4",
        "T5",
        "T6"
      ],
      "id": "Marlin.T6[0]",
      "parameters": [],
      "related": [],
      "source": "Marlin",
      "title": "Select Tool",
      "url": "https://marlinfw.org/docs/gcode/T001-T002"
    }
  ],
  "TEMPERATURE_WAIT": [
    {
      "brief": "Wait until the given temperature sensor is at or above the supplied  MINIMUM and/or at or below the supplied MAXIMUM.",
      "codes": [
        "TEMPERATURE_WAIT"
      ],
      "id": "Klipper.TEMPERATURE_WAIT[0]",
      "parameters": [
        {
          "description": "",
          "label": "SENSOR=<config_name>",
          "optional": false,
          "tag": "SENSOR",
          "values": []
        },
        {
          "description": "",
          "label": "MINIMUM=<target>",
          "optional": true,
          "tag": "MINIMUM",
          "values": []
        },
        {
          "description": "",
          "label": "MAXIMUM=<target>",
          "optional": true,
          "tag": "MAXIMUM",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Wait until the given temperature sensor is at or above the supplied  MINIMUM and/or at or below the supplied MAXIMUM",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "TESTZ": [
    {
      "brief": "This command moves the nozzle up or down by the  amount specified in \"value\". For example,",
      "codes": [
        "TESTZ"
      ],
      "id": "Klipper.TESTZ[0]",
      "parameters": [
        {
          "description": "",
          "label": "Z=<value>",
          "optional": false,
          "tag": "Z",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This command moves the nozzle up or down by the  amount specified in \"value\"",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "TEST_RESONANCES": [
    {
      "brief": "Runs the resonance  test in all configured probe points for the requested",
      "codes": [
        "TEST_RESONANCES"
      ],
      "id": "Klipper.TEST_RESONANCES[0]",
      "parameters": [
        {
          "description": "",
          "label": "AXIS=<axis>",
          "optional": false,
          "tag": "AXIS",
          "values": []
        },
        {
          "description": "",
          "label": "OUTPUT=<resonances,raw_data>",
          "optional": false,
          "tag": "OUTPUT",
          "values": []
        },
        {
          "description": "",
          "label": "NAME=<name>",
          "optional": true,
          "tag": "NAME",
          "values": []
        },
        {
          "description": "",
          "label": "FREQ_START=<min_freq>",
          "optional": true,
          "tag": "FREQ_START",
          "values": []
        },
        {
          "description": "",
          "label": "FREQ_END=<max_freq>",
          "optional": true,
          "tag": "FREQ_END",
          "values": []
        },
        {
          "description": "",
          "label": "HZ_PER_SEC=<hz_per_sec>",
          "optional": true,
          "tag": "HZ_PER_SEC",
          "values": []
        },
        {
          "description": "",
          "label": "INPUT_SHAPING=<0:1>",
          "optional": true,
          "tag": "INPUT_SHAPING",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Runs the resonance  test in all configured probe points for the requested",
      "url": "https://www.klipper3d.org/G-Codes.html#resonance-testing-commands"
    }
  ],
  "TUNING_TOWER": [
    {
      "brief": "A tool for tuning a parameter on each Z height during a print.  The tool will run the given",
      "codes": [
        "TUNING_TOWER"
      ],
      "id": "Klipper.TUNING_TOWER[0]",
      "parameters": [
        {
          "description": "",
          "label": "COMMAND=<command>",
          "optional": false,
          "tag": "COMMAND",
          "values": []
        },
        {
          "description": "",
          "label": "PARAMETER=<name>",
          "optional": false,
          "tag": "PARAMETER",
          "values": []
        },
        {
          "description": "",
          "label": "START=<value>",
          "optional": false,
          "tag": "START",
          "values": []
        },
        {
          "description": "",
          "label": "SKIP=<value>",
          "optional": true,
          "tag": "SKIP",
          "values": []
        },
        {
          "description": "",
          "label": "FACTOR=<value>",
          "optional": true,
          "tag": "FACTOR",
          "values": []
        },
        {
          "description": "",
          "label": "BAND=<value>",
          "optional": true,
          "tag": "BAND",
          "values": []
        },
        {
          "description": "",
          "label": "|",
          "optional": false,
          "tag": "|",
          "values": []
        },
        {
          "description": "",
          "label": "STEP_DELTA=<value>",
          "optional": true,
          "tag": "STEP_DELTA",
          "values": []
        },
        {
          "description": "",
          "label": "STEP_HEIGHT=<value>",
          "optional": true,
          "tag": "STEP_HEIGHT",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "A tool for tuning a parameter on each Z height during a print",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "TURN_OFF_HEATERS": [
    {
      "brief": "Turn off all heaters.",
      "codes": [
        "TURN_OFF_HEATERS"
      ],
      "id": "Klipper.TURN_OFF_HEATERS[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "Turn off all heaters",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "UPDATE_DELAYED_GCODE": [
    {
      "brief": "Updates the  delay duration for the identified [delayed_gcode] and starts the timer  for gcode execution.  A value of 0 will cancel a pending delayed gcode  from executing.",
      "codes": [
        "UPDATE_DELAYED_GCODE"
      ],
      "id": "Klipper.UPDATE_DELAYED_GCODE[0]",
      "parameters": [
        {
          "description": "",
          "label": "ID=<name>",
          "optional": true,
          "tag": "ID",
          "values": []
        },
        {
          "description": "",
          "label": "DURATION=<seconds>",
          "optional": true,
          "tag": "DURATION",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Updates the  delay duration for the identified [delayed_gcode] and starts the timer  for gcode execution",
      "url": "https://www.klipper3d.org/G-Codes.html#delayed-gcode"
    }
  ],
  "Z_ENDSTOP_CALIBRATE": [
    {
      "brief": "Run a helper script useful  for calibrating a Z position_endstop config setting. See the  MANUAL_PROBE command for details on the parameters and the  additional commands available while the tool is active.",
      "codes": [
        "Z_ENDSTOP_CALIBRATE"
      ],
      "id": "Klipper.Z_ENDSTOP_CALIBRATE[0]",
      "parameters": [
        {
          "description": "",
          "label": "SPEED=<speed>",
          "optional": true,
          "tag": "SPEED",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "Run a helper script useful  for calibrating a Z position_endstop config setting",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "Z_OFFSET_APPLY_ENDSTOP": [
    {
      "brief": "Take the current Z Gcode offset (aka,  babystepping), and subtract it from the stepper_z endstop_position.  This acts to take a frequently used babystepping value, and \"make  it permanent\".  Requires a",
      "codes": [
        "Z_OFFSET_APPLY_ENDSTOP"
      ],
      "id": "Klipper.Z_OFFSET_APPLY_ENDSTOP[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "Take the current Z Gcode offset (aka,  babystepping), and subtract it from the stepper_z endstop_position",
      "url": "https://www.klipper3d.org/G-Codes.html#extended-g-code-commands"
    }
  ],
  "Z_OFFSET_APPLY_PROBE": [
    {
      "brief": "Take the current Z Gcode offset (aka,  babystepping), and subtract if from the probe's z_offset.  This acts to take a frequently used babystepping value, and \"make  it permanent\".  Requires a",
      "codes": [
        "Z_OFFSET_APPLY_PROBE"
      ],
      "id": "Klipper.Z_OFFSET_APPLY_PROBE[0]",
      "parameters": [],
      "related": [],
      "source": "Klipper",
      "title": "Take the current Z Gcode offset (aka,  babystepping), and subtract if from the probe's z_offset",
      "url": "https://www.klipper3d.org/G-Codes.html#probe"
    }
  ],
  "Z_TILT_ADJUST": [
    {
      "brief": "This command will probe  the points specified in the config and then make independent  adjustments to each Z stepper to compensate for tilt. See the PROBE  command for details on the optional probe parameters.",
      "codes": [
        "Z_TILT_ADJUST"
      ],
      "id": "Klipper.Z_TILT_ADJUST[0]",
      "parameters": [
        {
          "description": "",
          "label": "<probe_parameter>=<value>",
          "optional": true,
          "tag": "probe_parameter=value",
          "values": []
        }
      ],
      "related": [],
      "source": "Klipper",
      "title": "This command will probe  the points specified in the config and then make independent  adjustments to each Z stepper to compensate for tilt",
      "url": "https://www.klipper3d.org/G-Codes.html#z-tilt"
    }
  ]
}