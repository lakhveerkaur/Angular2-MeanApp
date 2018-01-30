var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
const videoSchema = new Schema({
    title: String,
    url: String,
    description: String
});

module.exports = mongoose.model('video', videoSchema, 'meanstack');
