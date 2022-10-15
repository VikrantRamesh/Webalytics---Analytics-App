const Analytics = require('../models/Analytics.js');

// This file contains the controllers fo requests coming in / routed from analyticsRoutes.js

// module.exports.logUser = async(req, res, next) => {
//     // Providing a separate API for number of users so that the client can view this real time

// }

module.exports.logSessionMetrics = async(req, res, next) => {
    const sessionMetrics = {
        domain: req.body.domain.data,
        apiKey: req.body.apiKey,
        data: req.body.data
    };

    try{
        await Analytics.create(sessionMetrics);
        res.json({'error': false, 'status': 'logged'});
    }catch(err){
        console.log(err);
        res.json({'error': true, 'status': 'error'});
    }
}