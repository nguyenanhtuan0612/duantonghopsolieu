const express = require('express');
const router = express.Router();
const changmiController = require('../controller/ChangmiController');

router.get('/',changmiController.dashboard);

module.exports = router;