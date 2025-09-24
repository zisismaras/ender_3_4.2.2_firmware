module.exports = {
    extends: "builds/base.js",
    include: "builds/features/autoLevel.js",
    meta: {
        stable_name: "ender_3_4.2.2-{{marlin_version}}-auto_level_7x7-{{uid}}",
        nightly_name: "ender_3_4.2.2-{{current_date}}-auto_level_7x7-{{uid}}"
    },
    board_env: "STM32F103RC_creality", // 256kB flash RCT6
    configuration: {
        enable: [
            ["GRID_MAX_POINTS_X", 7],   // 7x7 mřížka
            ["BLTOUCH"]                 // povolit BLTouch
        ]
    },
    extra_flags: [
        "-DZ_PROBE_OFFSET_RANGE_MIN=-20",
        "-DZ_PROBE_OFFSET_RANGE_MAX=20"
    ]
};
