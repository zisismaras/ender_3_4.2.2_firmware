module.exports = {
    partial: true,
    configuration_adv: {
        enable: [
            "LIN_ADVANCE",
            ["LIN_ADVANCE_K", 0],
            "EXPERIMENTAL_SCURVE",
            "ALLOW_LOW_EJERK"
        ]
    }
};
