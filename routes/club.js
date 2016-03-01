var data = require('../public/json/dance.json');

exports.view = function(req, res){
  var id = req.params.id;
  console.log("id:" + data.dance[id].description);
  var jsonKey = data.dance[id];
  var baseUrl = req.protocol + '://' + req.get('host');
  console.log(baseUrl);
   res.render('club', {"jsonKey":jsonKey, "baseUrl": baseUrl});
}
