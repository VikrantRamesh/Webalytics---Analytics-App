const {Router} = require('express');
const router = Router();
analyticsController = require('../controllers/analyticsController.js');

// This file is meant to contain route handlers for only those endpoints which will be hit by the API extended out as part of logging analytics data
// So far we are unsure of a credible and simultaneously efficient way of authorizing these requests and hence this file contains only unauthenticated request routes.


// This is rudimentary, real handlers and controllers can be constructed/perfected only after the npm package containing the AJAX requests is ready
router.post('/api/analytics/id:', (req, res, next) => {
    analyticsController.logSessionMetrics(req, res, next);
});

module.exports = router;