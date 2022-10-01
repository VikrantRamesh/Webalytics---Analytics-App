const mongoose = require('mongoose');

const ServiceCredentialsSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true
    },
    apikey: {
        type: String,
        unique: true
    },
    datetimestamp :{
        type:  Date,
        default: Date.now 
    }

});


module.exports = mongoose.model('serviceCredential', ServiceCredentialsSchema, 'serviceCredentials');