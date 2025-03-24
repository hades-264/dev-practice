const express = require('express');
const { 
    handleGenerateShortUrl, 
    handleGetShortUrl, 
    handleGetAnalytics, 
    handleDeleteUrl 
} = require('../controllers/controller');

const router = express.Router();

router.post('/url', handleGenerateShortUrl);
router.get('/url/:shortId', handleGetShortUrl);
router.get('/url/analytics/:shortId', handleGetAnalytics);
router.delete('/url/:shortId', handleDeleteUrl);

module.exports = router;