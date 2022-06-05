module.exports = {
    extends: "builds/base.js",
    include: "builds/features/linearAdvance.js",
    meta: {
        stable_name: "ender_3_4.2.2-{{marlin_version}}-base_lin-{{uid}}",
        nightly_name: "ender_3_4.2.2-{{current_date}}-base_lin-{{uid}}"
    }
};
