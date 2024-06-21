const express = require('express');
const router = express.Router();
const userController = require('../../controller/user.controller');

router.post('/create-user', userController.create);
router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;
