const router = require('express').Router();
const authcontroller = require('../controllers/auth')
const jwt = require("jsonwebtoken");



router.post('/signup',authcontroller.signup);
router.post('/login',authcontroller.login);

module.exports = router;