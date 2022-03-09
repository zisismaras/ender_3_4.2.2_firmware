# Ender-3 4.2.2 firmware

Automatic [Marlin](https://github.com/MarlinFirmware/Marlin) builds for the Ender-3 with the stock creality 4.2.2(512K) board.  
**Make sure you have a 4.2.2(512K) board before installing.**  
You can find both stable and nightly (`bugfix-2.0.x`) downloads on the repository releases.  

**Update**  
Nightly builds are disabled for the time being until the board_env [rename](https://github.com/MarlinFirmware/Marlin/pull/23599) lands in marlin stable.  
When this happens this repo will only have builds for the standard 512K version.  
If you have the 256K version of the board please read [here](https://github.com/MarlinFirmware/Marlin/issues/23596).

## Builds

### default

The default Marlin configuration for Ender-3.

### base

Bed leveling helper menu to move around the corners. Better than having a gcode file or moving them by hand.  
Also enables `HOST_ACTION_COMMANDS` as required by octoprint.

### base_lin

base + [linear advance](https://marlinfw.org/docs/features/lin_advance.html).  
Check if your stepper drivers play nice with linear advance. People report problems with TMC2208. I have the A4988 version of the board and had no problems.  
**Note**: all builds here use the default A4988, you might want to fork and change that if you have a different one.  
To find out which drivers you have there is a little marking on the sd card slot. More info [here](https://github.com/MarlinFirmware/Configurations/pull/633#issuecomment-995206382).  
Linear advance `K factor` is set to `0`. You can read the marlin docs on how to find and set a good value. There are also numerous videos on youtube.  

### manual_mesh

[Manual mesh leveling](https://marlinfw.org/docs/gcode/G029-mbl.html)  
4 different variations are provided:

* `manual_mesh_5x5` [base](#base) + manual mesh leveling with 5x5 grid
* `manual_mesh_5x5_lin` [base_lin](#base_lin) + manual mesh leveling with 5x5 grid
* `manual_mesh_7x7` [base](#base) + manual mesh leveling with 7x7 grid
* `manual_mesh_7x7_lin` [base_lin](#base_lin) + manual mesh leveling with 7x7 grid

### auto_level

[automatic leveling](https://marlinfw.org/docs/gcode/G029-abl-bilinear.html)  
**Note**: I have a CR-touch but BL-touch should work as well. Not sure about the 3D-touch clones, do some research before flashing. If you have a different type of probe you will need a different configuration.  

4 different variations are provided:

* `auto_level_5x5` [base](#base) + automatic leveling with 5x5 grid
* `auto_level_5x5_lin` [base_lin](#base_lin) + automatic leveling with 5x5 grid
* `auto_level_7x7` [base](#base) + automatic leveling with 7x7 grid
* `auto_level_7x7_lin` [base_lin](#base_lin) + automatic leveling with 7x7 grid

The grid is configured to be symmetrical with 45mm margin on left and right and 15mm on front and back.  
All probe offsets are set to `0`. There are a lot of videos on how to measure and set them.  
The build enables the offset wizard to simplify the Z-offset measurement.  

**Important**: The build assumes you are using the dedicated BL-touch port on the board and you have the Z-stop disconnected. It will not work if you are using the Z-stop port for the probe.  

The [M48 accuracy test](https://marlinfw.org/docs/gcode/M048.html) is also enabled in case you want to test your probe.

## Build you own firmware

Check out [Marlin auto build](https://github.com/zisismaras/marlin_auto_build) if you want to build your own firmware automatically on github.
