const express = require('express');
const router = express.Router();
const { getAllMenuItems, createMenuItem } = require('../controller/menuController');

router.get('/getmenu', getAllMenuItems);
router.post('/postmenu', createMenuItem); // optional admin use

module.exports = router;
