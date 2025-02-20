const express = require('express');
const router = express.Router();
const currencyController = require('../controllers/currencyController');

router.get('/convert', currencyController.convertCurrency);

module.exports = router;