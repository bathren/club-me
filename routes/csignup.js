var login = require('../clogin')

exports.view = function(req, res){
  res.render('csignup');
}

exports.checkClub = function(req, res) {
  // query for the specific username and password
  login.CLogin
    .find({"clubname": req.body.uname, "password": req.body.password})
    .exec(afterQuery);
  // call the following callback

  function afterQuery(err, clubs) {
    if(err) console.log(err);
    res.json(clubs[0]);
  }
}

exports.addClub = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  // make a new User and save it to the DB
  var newClub = new login.CLogin(form_data);
  newClub.save(addCallback);
  // YOU MUST send an OK response w/ res.send();
  function addCallback(err) {
  	console.log("Entered");
	  if(err) { console.log(err); }
	  res.send();
  }
}

