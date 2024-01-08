const express = require('express');
const quoteController = require('../controllers/quoteController');

const router = express.Router();

router.route('/').get(quoteController.getAllQuotes)
                 .post(quoteController.createQuote);
router.route('/:id').get(quoteController.getQuote)
                    .patch(quoteController.updateQuote)
                    .delete(quoteController.deleteQuote);

module.exports = router;