const { getUser } = require("../services/auth");

function checkForAuthentication(req, res, next) {
    const authenticationHeaderValue = req.headers["authorization"];

    req.user = null;

    if (!authenticationHeaderValue || 
        !authenticationHeaderValue.startsWith("Bearer "))
        next();

    const token = authenticationHeaderValue.split("Bearer ")[1];

    const user = getUser(token);

    req.user = user;
    next();
}

function restrictTo(roles){
    return function(req, res, next){
        if(!req.user)
            return res.redirect('/login');
        
        if(!roles.includes(req.user.role))
            return res.end('Unauthorized');

        next();
    }
}

module.exports = {
    checkForAuthentication,
    restrictTo
}