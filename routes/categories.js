// Get all of our friend data
var data = require('../public/json/clubs.json');
var other = require('../public/json/blocks.json');

exports.view = function(req, res){
  //console.log(data);
  console.log(other.clubs[0]);
  res.render('categories', {"clubs":data.clubs, "blocks":other.clubs});
};

