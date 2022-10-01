const mongoose = require('mongoose');

const DataPointSchema = new mongoose.Schema({
    date: {
        type: String
    },
    purchasesMade: {
        type: Number,
        default: 0
    },
    visitors: {
        type: Number,
        default: 0
    },
    averageTime: {
        type: Number,
        default : 0
    }
});

module.exports = DataPointSchema;