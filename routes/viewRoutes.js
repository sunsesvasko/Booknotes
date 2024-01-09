const express = require('express');
const viewController = require('./../controllers/viewController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.use(authController.isLoggedIn);

router.get('/', viewController.getLanding);

router.get('/login', viewController.getLoginPage)
router.get('/register', viewController.getRegisterPage)

router.get('/books', authController.protect, viewController.getMyBooksPage)
router.get('/books/:title', authController.protect, viewController.getBookPage);

module.exports = router;