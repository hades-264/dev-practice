const mongoose = require('mongoose');

function connectMongoDb(url){
    mongoose.connect(url)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('Error! MongoDB not Connected', err))
}

module.exports = connectMongoDb;