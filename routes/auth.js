const express = require('express');
const login = require('../controllers/user');
const signup = require('../controllers/user');
const logout = require('../controllers/user');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;
