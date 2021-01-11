const express = require('express');
const router = express.Router();
const kdController = require('../controller/KdController');

router.get('/',kdController.dashboard);

module.exports = router;

