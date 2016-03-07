// Get all of our friend data
var data = require('../public/json/clubs.json');
var other = require('../public/json/clubs.json');

exports.view = function(req, res){
  //console.log(data);
  res.render('categories', {"clubs":data.clubs, "block":other.clubs});
};

