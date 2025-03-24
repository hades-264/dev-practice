const express = require('express');
const Url = require('../models/model');
const router = express.Router();

router.get('/static', async (req, res) => {
    const allUrls = await Url.find();
    return res.render('home', {
        urls: allUrls
    });
});

module.exports = router;