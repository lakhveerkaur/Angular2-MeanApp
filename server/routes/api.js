const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var urlDetails = require('./../model/videoUrl.js');
var db = require('./../connections/dbconnect.js');
db.on('error', console.error.bind(console, 'connection error:'));
/* GET api listing. */
router.get('/videos', (req, res) => {
  console.log("get request for videos");
  urlDetails.find({})
  .exec(function(err, videos){
        if (err){
            console.log("Error retrieving videos");
        }else {
            res.json(videos);
        }
      });
});
router.post('/video', function(req, res){
    console.log('Post a video');
    var newVideo = new urlDetails();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function(err, insertedVideo){
        if (err){
            console.log('Error saving video');
        }else{
            res.json(insertedVideo);
        }
    });
});
module.exports = router;
