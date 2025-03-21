
const express = require('express');

const router = express.Router();

const { createSampleProduct, getProductStats, getProductAnalytics} = require('../controllers/product.controller.js');

router.post('/create-sample-product', createSampleProduct);
router.get('/stats', getProductStats);
router.get('/analytics', getProductAnalytics);

module.exports = router;