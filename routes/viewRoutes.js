const express = require('express');
const viewController = require('./../controllers/viewController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.use(authController.isLoggedIn);

router.get('/', viewController.getLanding);

router.get('/login', authController.protect, viewController.getLoginPage)
router.get('/register', viewController.getRegisterPage)
router.get('/books', viewController.getMyBooksPage)
router.get('/books/:title', viewController.getBookPage);

module.exports = router;