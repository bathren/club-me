// Get all of our friend data
var data = require('../matchme.json');

exports.view = function(req, res){
  console.log(data);
  res.render('matchme', data);
}
