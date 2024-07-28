const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

// Define routes
router.post('/create', itemsController.createTransaction);
router.get('/list', itemsController.getAllTransactions);

module.exports = router;
