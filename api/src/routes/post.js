const express = require('express');
const router = express.Router();
const jwt = require("../middlewares/jwtMiddleware");

const controller = require('../controllers/post');

router.get('/listAllPosts', jwt.verifyToken, controller.listAllPosts);

router.get('/:id', controller.getById);

router.put('/add', jwt.verifyToken, controller.add);

router.patch('/update', controller.update);

router.delete('/delete', controller.delete);

module.exports = router;