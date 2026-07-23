const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    type: {
        type: String,
        required: true
    },
    metadata: {
        type: Object,
        default: {}
    }
}, {
    timestamps: true
});

module.exports = mongoose.model(
    "Activity",
    activitySchema
);