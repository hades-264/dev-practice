const express = require('express');
const Url = require('../models/model');

const router = express.Router();

router.get('/', async (req, res) => {
    const allUrls = await Url.find({});
    res.render('home', {
        urls: allUrls
    });
});

module.exports = router;