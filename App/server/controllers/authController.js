const Customer= require("../models/Customer.js");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = (id, username) => {
    return jwt.sign({id, username}, process.env.ACCESS_TOKEN_SECRET.toString(), {expiresIn: 3*24**60*60});
}

module.exports.signupHandler = async(req, res, next) => {
    res.set('Acces-Control-Allow-Origin', '*');
    console.log(req.body);
    res.send({'errors': 0, 'status': 'working'});
}