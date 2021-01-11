const express = require('express');
const router = express.Router();
const reportController = require('../controller/ReportController');

router.post('/store',reportController.store);   
router.get('/add',reportController.addRp);
router.delete('/:id',reportController.delete);
router.get('/:id/detail',reportController.detail);
router.get('/',reportController.reports);

module.exports = router;