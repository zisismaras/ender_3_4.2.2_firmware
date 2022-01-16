# Ender-3 4.2.2 firmware

Automatic [Marlin](https://github.com/MarlinFirmware/Marlin) builds for the Ender-3 with the stock creality 4.2.2 board.  
**Make sure you have a 4.2.2 board before installing.**  
You can find both stable and nightly (`bugfix-2.0.x`) downloads on the repository releases.

## Builds

* `default` The default Marlin configuration for Ender-3
* `base` Bed leveling helper + `HOST_ACTION_COMMANDS` for octoprint
* `manual_mesh_5x5` base + manual mesh leveling with 5x5 grid
* `manual_mesh_7x7` base + manual mesh leveling with 7x7 grid

## TODO

Will add bltouch builds soon when i have my sensor.

## Build you own firmware

Check out [Marlin auto build](https://github.com/zisismaras/marlin_auto_build) if you want to build your own firmware automatically on github.
