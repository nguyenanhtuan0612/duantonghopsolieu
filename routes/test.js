const express = require('express');
const router = express.Router();
const testController = require('../controller/TestController');

router.get('/returnUrl/:id',testController.returnUrl);
router.post('/notifyUrl/:id',testController.notifyUrl);
router.post('/MomoApi',testController.testMomoApi);
router.get('/Momo',testController.testMomo);
router.post('/testStatus',testController.testStatus);
router.get('/',testController.test);

module.exports = router;