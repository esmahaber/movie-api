const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://admin:abc123@ds229068.mlab.com:29068/heroku_d3jwxkqd');

    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });

    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;
};