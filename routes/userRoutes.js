const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.get('/logout', authController.logout);
router.post('/login', authController.login);
router.post('/register', authController.register)

router.use(authController.protect);

router.route('/').get(userController.getAllUsers)
                 .post(userController.createUser);

router.route('/:id').get(userController.getUser)
                    .patch(userController.updateUser)
                    .delete(userController.deleteUser);

module.exports = router;