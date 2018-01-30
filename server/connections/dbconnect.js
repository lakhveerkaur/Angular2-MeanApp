const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/meanstack');
module.exports = mongoose.connection;
