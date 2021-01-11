const express = require('express');
const router = express.Router();
const userController = require('../controller/UserControlller');

router.get('/profile/check',userController.profileCheck);
router.get('/profile',userController.profile);
router.post('/store',userController.store);
router.get('/',userController.user);


module.exports = router;