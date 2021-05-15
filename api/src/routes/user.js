const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const controller = require('../controllers/user');

router.post('/register', controller.userRegister);

router.post('/login', controller.userLogin);

module.exports = router;
