const {Router} = require('express');
const router = Router();
const authController = require('../controllers/authController.js');

router.get('/api/signup', (req, res, next) => {
    // res.send()
    authController.signupHandler(req, res, next);
});


router.get('/api/login', (req, res, next)=> {

});

module.exports = router;