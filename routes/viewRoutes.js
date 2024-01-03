const express = require('express');
const viewController = require('./../controllers/viewController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.get('/', authController.isLoggedIn,
                viewController.getLanding);

router.get('/login', viewController.getLoginPage)

module.exports = router;