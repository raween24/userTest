const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST create user
router.post('/', userController.AddUser);

// GET all users (optionnel)
router.get('/', userController.getAllUsers);

module.exports = router;
