const express = require('express');
const controller = require('../controllers/login');
const router = express.Router();

router.post('/register', controller.register);
router.get('/login', controller.findAll);
router.post('/login', controller.login);

module.exports = router;