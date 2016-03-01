var login = require('../ilogin')

exports.view = function(req, res){
  res.render('isignup');
}

exports.checkUser = function(req, res) {
  // query for the specific username and password
  login.ILogin
    .find({"name": req.body.uname, "password": req.body.password})
    .exec(afterQuery);
  // call the following callback

  function afterQuery(err, users) {
    if(err) console.log(err);
    res.json(users[0]);
  }
}

exports.addUser = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  // make a new User and save it to the DB
  var newUser = new login.ILogin(form_data);
  newUser.save(addCallback);
  // YOU MUST send an OK response w/ res.send();
  function addCallback(err) {
  	console.log("Entered");
	  if(err) { console.log(err); }
	  res.send();
  }
}