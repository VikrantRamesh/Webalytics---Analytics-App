const {Router} = require('express');
const router = Router();
const authController = require('../controllers/authController.js');

router.post('/api/signup', (req, res, next) => {
    // res.send()
    res.set('Access-Control-Allow-Origin', '*');
    console.log("Request reached");
    authController.signupHandler(req, res, next);
});


router.get('/api/login', (req, res, next)=> {

});

module.exports = router;