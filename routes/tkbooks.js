const express = require('express');
const router = express.Router();
const tkController = require('../controller/TKController');

router.get('/dashboard',tkController.dashboard);
router.get('/',tkController.dashboard);

module.exports = router;