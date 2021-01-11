const express = require('express');
const router = express.Router();
const mcController = require('../controller/MCController');

router.get('/',mcController.dashboard);

module.exports = router;