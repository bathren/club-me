// Get all of our friend data
var data = require('../dance.json');

exports.view = function(req, res){
  
  console.log(data);
  res.render('searchresults', data);
};

