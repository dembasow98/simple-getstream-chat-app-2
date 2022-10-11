const express = require('express');

const router = express.Router();

const {login, register} = require('../Controllers/auth.controllers');

//Login Route
router.post('/login',login);
//Register Route
router.post('/register', register);


module.exports = router;