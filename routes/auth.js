const express = require('express');
const login = require('../controllers/user');

const router = express.Router();

router.post('/signup');
router.post('/login', login);
router.get('/logout');

module.exports = router;
