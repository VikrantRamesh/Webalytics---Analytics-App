const Customer= require("../models/Customer.js");
const ServiceCredential = require('../models/ServiceCredentials.js');
const crypto = require('crypto');
require('dotenv').config();

// Helper non-exported functions

const findAndReturn = async (req, res, next, username) => {
    Customer.findOne({username : username}, (err, foundItem) => {
        if(err){
            res.json({error: true, message: 'Not found'});
            return;
        }else{
            customerDocument = foundItem;
            console.log(customerDocument);
        }
    })
}

module.exports.profileHandler = async(req, res, next) => {
    // console.log(req.query);
    Customer.findOne({username: req.query.username}, (err, foundItem) => {
        if(err){
            res.json({error: true, message: 'Not found'});
        }else{
            // console.log(foundItem);
            res.json(foundItem);
        }
    });
    
}

// Regenerates API key even if it already exists
module.exports.APIKeyGenerationHandler = async(req, res, next) => {
    let customerDocument = await Customer.findOne({username : req.query.username});
    if(customerDocument === null){
        res.json({error: true, message: 'Not found'});
        return;
    }
   
    const preHash = customerDocument.username + customerDocument.domain;
    const key = crypto.createHash('sha1').update(preHash, 'utf-8').digest('hex');
   
    // Upsertion into serviceCredentials collection
    const doc = await ServiceCredential.findOneAndUpdate({username: customerDocument.username}, {$set : {apikey : key}}, {upsert : true, new : true});
    res.json({error: false, apiKey : doc.apikey});   

    
}