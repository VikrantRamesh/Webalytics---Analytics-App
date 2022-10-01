const jwt = require('jsonwebtoken');
const Customer = require("../models/Customer");
require('dotenv').config();

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET.toString(), async(err, decodedToken) => {
            if(err){
                console.log(err.message);
                res.json({error: true, message: err.message});
            }else{
                console.log(decodedToken);
                next(); // Calling the next middleware in line
            }
        })
    }else{
        res.json({error : true, message: 'Login Please'});
    }
}

module.exports = requireAuth;