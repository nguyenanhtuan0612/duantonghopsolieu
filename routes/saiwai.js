const express = require('express');
const router = express.Router();
const SaiwaiController = require('../controller/SaiwaiController');

router.get('/dashboard',SaiwaiController.dashboard);
router.get('/',SaiwaiController.dashboard);

module.exports = router;