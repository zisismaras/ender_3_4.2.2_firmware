module.exports = {
    board_env: "STM32F103RE_creality",
    min_version: "2.1.2",
    meta: {
        stable_name: "ender_3_4.2.2-{{marlin_version}}-default-{{uid}}",
        nightly_name: "ender_3_4.2.2-{{current_date}}-default-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3/CrealityV422/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    }
};
