const mapSessionIdtoUser = new Map();

function setUser(id, user){
    mapSessionIdtoUser.set(id, user);
}

function getUser(id){
    return mapSessionIdtoUser.get(id);
}

module.exports = {
    setUser,
    getUser
}