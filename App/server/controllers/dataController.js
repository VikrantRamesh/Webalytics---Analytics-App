const Customer= require("../models/Customer.js");
require('dotenv').config();

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
