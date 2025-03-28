const express = require('express');
const Url = require('../models/model');
const { restrictTo } = require('../middlewares/auth');
const USER = require('../models/user');

const router = express.Router();

router.get('/admin/urls', restrictTo(["ADMIN"]), async (req, res) => {
    const allUrls = await Url.find({});
    const allUsers = await USER.find({});
    res.render('home', {
        urls: allUrls,
        users: allUsers
    });
});

router.get('/', restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
    const allUrls = await Url.find({ createdBy: req.user._id });
    const username = req.user;
    res.render('home', {
        urls: allUrls,
        user: username
    });
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.get('/login', async (req, res) => {
    res.render('login');
});

module.exports = router;