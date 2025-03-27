const {v4: uuidv4} = require('uuid');
const USER = require('../models/user');
const { setUser } = require('../services/auth');

async function handleUserSignUp(req, res) {
    const { name, email, password } = req.body;
    await USER.create({
        name,
        email,
        password
    });

    return res.redirect('/');
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await USER.findOne({ email, password });
    
    if (!user) {
        return res.render('login', {
            error: 'Invalid email or password'
        });
    }

    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie('uid', sessionId);

    return res.redirect('/');
}

module.exports = {
    handleUserSignUp,
    handleUserLogin
}