// Get all of our friend data
var data = require('../public/json/dance.json');

exports.view = function(req, res){
  console.log(data);
  res.render('dance', data);
};

