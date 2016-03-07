// Get all of our friend data
var data = require('../ifc.json');

exports.view = function(req, res){
  console.log(data);
  res.render('message', data);
};