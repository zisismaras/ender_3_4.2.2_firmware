module.exports = {
    partial: true,
    configuration: {
        enable: [
            "PROBE_MANUALLY",
            ["NOZZLE_TO_PROBE_OFFSET", [0, 0, 0]],
            "MESH_BED_LEVELING",
            "RESTORE_LEVELING_AFTER_G28",
            "LCD_BED_LEVELING",
            "MESH_EDIT_MENU"
        ]
    }
};
