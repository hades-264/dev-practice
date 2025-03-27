const { getUser } = require("../services/auth");

async function retrictToLoggedinUserOnly(req, res, next){
    const userId = req.headers['authorization'];

    if(!userId)
        return res.redirect('/login');

    const token = userId.split('Bearer ')[1];
    
    const user = getUser(token);

    if(!user)
        return res.redirect('/login');

    req.user = user;
    next();
}

async function checkAuth(req, res, next){
    const userId = req.headers['authorization'];

    const token = userId.split('Bearer ')[1];

    const user = getUser(token);

    req.user = user;
    next();
}

module.exports = {
    retrictToLoggedinUserOnly,
    checkAuth
}