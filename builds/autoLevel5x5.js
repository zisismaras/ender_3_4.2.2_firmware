module.exports = {
    extends: "builds/base.js",
    include: "builds/features/autoLevel.js",
    meta: {
        stable_name: "ender_3_4.2.2-{{marlin_version}}-auto_level_5x5-{{uid}}",
        nightly_name: "ender_3_4.2.2-{{current_date}}-auto_level_5x5-{{uid}}"
    },
    configuration: {
        enable: [
            ["GRID_MAX_POINTS_X", 5]
        ]
    }
};
