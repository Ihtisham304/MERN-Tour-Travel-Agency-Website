const express = require('express');
const applyController = require('../controllers/apply');
const router = express.Router();

router.post('/createApply', applyController.createApply);


module.exports = router;