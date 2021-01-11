const express = require('express');
const router = express.Router();
const KaixinController = require('../controller/KaixinController');

router.get('/',KaixinController.dashboard);

module.exports = router;