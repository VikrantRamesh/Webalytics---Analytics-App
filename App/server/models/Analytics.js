const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
    domain: {
        type: String,
        unique: true
    },
    apiKey: {
        type: String,
        unique: true
    },
    data:[{
        date: {
            type: Date,
            default: Date.now
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
    }]

});

module.exports = mongoose.model('analytics', AnalyticsSchema, 'analytics');