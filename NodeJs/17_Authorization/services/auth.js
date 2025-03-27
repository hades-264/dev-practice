const jwt = require('jsonwebtoken');
const secret = 'commit@dark#$to@get$';

function setUser(user) {
    return jwt.sign(user, secret);
}

function getUser(token) {
    try {
        return jwt.verify(token, secret);
    } catch (err) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser
}