const express = require('express');
const router = express.Router();
const siteController = require('../controller/SiteContoller');

router.get('/dashboard',siteController.home);
router.get('/register',siteController.register);
router.get('/login',siteController.login);
router.get('/test',siteController.test);
router.get('/data',siteController.data);
router.post('/testStatus',siteController.testStatus)
router.get('/',siteController.home);


module.exports = router;