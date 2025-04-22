const express = require('express');
const router = express.Router();
const { createOrder } = require('../controller/orderController');

router.post('/createorder', createOrder);

module.exports = router;
