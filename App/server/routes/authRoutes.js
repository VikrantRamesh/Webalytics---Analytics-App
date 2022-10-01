const {Router} = require('express');
const router = Router();
const authController = require('../controllers/authController.js');
const dataController = require('../controllers/dataController.js');
const requireAuthMiddleware = require('../middleware/authMiddleware.js');

// For now contains all routes

router.post('/api/signup', (req, res, next) => {
    // res.send()
    res.set('Access-Control-Allow-Origin', '*');
    console.log("Request reached");
    authController.signupHandler(req, res, next);
});


router.post('/api/login', (req, res, next)=> {
    res.set('Access-Control-Allow-Credentials', true);
    authController.loginHandler(req, res, next);
});

router.post('/api/profile', requireAuthMiddleware, (req, res, next) => {
    dataController.profileHandler(req, res, next);
    
})

router.post('/api/authorize', requireAuthMiddleware, (req, res, next) => {
    res.json({error: false, authState : 'authorized'});
});

router.post('/api/generateAPIkey', requireAuthMiddleware, (req, res, next) => {
    dataController.APIKeyGenerationHandler(req, res, next);
})

module.exports = router;