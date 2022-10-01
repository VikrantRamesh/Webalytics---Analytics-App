const Customer= require("../models/Customer.js");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = (id, username) => {
    return jwt.sign({id, username}, process.env.ACCESS_TOKEN_SECRET.toString(), {expiresIn: 3*24**60*60});
}

module.exports.signupHandler = async(req, res, next) => {
    // res.set('Acces-Control-Allow-Origin', '*');
    console.log(req.body);
    try{
        const customer = await Customer.create(req.body);
        res.json({'error': false, 'status': 'signedup'});
    }catch(err){
        console.log(err);
        res.json({'error': true, 'status': 'error'});
    }
}

module.exports.loginHandler = async(req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);
    
    
    try{
        const customer = await Customer.login(username, password);
        let doc = await Customer.findOne({username: username});
        const domain = doc.domain;
        const token = createToken(customer._id, customer.username);
        // Setting the cookies to be sent to the client on logging in
        res.cookie('username', username);
        res.cookie('domain', domain);
        res.status(200).cookie('jwt', token, {httpOnly:false, maxAge: 3*24*60*60*1000, secure: true}).json({error: false, customerId: customer._id, username: customer.username});
        // res.json({error: false, customerId: customer._id, username: customer.username});

    }catch(err){
        return res.json({error:true, message:err.message});
    }
}