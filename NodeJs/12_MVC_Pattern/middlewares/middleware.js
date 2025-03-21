const fs = require('fs');

function logReqResMiddleware(fileName){
    return (req, res, next) => {
        fs.appendFile(fileName, `${Date.now()}: ${req.method} ${req.path}\n`,
            (err, data) => {
                next();
            })
    }
}

module.exports = logReqResMiddleware;