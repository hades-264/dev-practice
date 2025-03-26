const express = require('express');
const Url = require('../models/model');

const router = express.Router();

router.get('/', async (req, res) => {
    if (!req.user)
        return res.redirect('/login');
    const allUrls = await Url.find({ createdBy: req.user._id });
    res.render('home', {
        urls: allUrls
    });
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.get('/login', async (req, res) => {
    res.render('login');
});

module.exports = router;