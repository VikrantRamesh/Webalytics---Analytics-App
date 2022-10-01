const mongoose = require('mongoose');
const DataPointSchema = require('./DataPoint.js'); 

const AnalyticsSchema = new mongoose.Schema({
    domain: {
        type: String,
        unique: true
    },
    apiKey: {
        type: String,
        unique: true
    },
    data:[DataPointSchema]

});

module.exports = mongoose.model('analytics', AnalyticsSchema, 'analytics');