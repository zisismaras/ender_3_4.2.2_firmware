module.exports = {
    extends: "builds/default.js",
    meta: {
        stable_name: "ender_3_4.2.2-{{marlin_version}}-base-{{uid}}",
        nightly_name: "ender_3_4.2.2-{{current_date}}-base-{{uid}}"
    },
    configuration: {
        enable: [
            ["STRING_CONFIG_H_AUTHOR", "(Dust, valerionew, Ender-3, zisismaras)"],
            //standard leveling menu helper
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER"
        ]
    },
    configuration_adv: {
        enable: [
            //octoprint
            "HOST_ACTION_COMMANDS"
        ]
    }
};
