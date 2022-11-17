const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    PirateName: {
        type: String,
        required: true
    },
    ImageURL: {
        type: String,
        required: true
    },
    NumberOfTreasureChests: {
        type: Number,
        required: true
    },
    CrewPosition: {
        type: String,
        required: true
    },
    PirateCatchPhrase: {
        type: String,
        required: true
    },
    PegLeg: {
        type: Boolean
    },
    EyePatch: {
        type: Boolean
    },
    HookHand: {
        type: Boolean
    },

}, { timestamps: true });

const Pirate = mongoose.model('Pirate', PirateSchema);

module.exports = Pirate;