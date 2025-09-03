const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.AddUser);
router.get('/', userController.getAllUsers);
router.delete('/:mdp', userController.deleteUser);
router.put('/:mdp', userController.updateUser);
module.exports = router;
