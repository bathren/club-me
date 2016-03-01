
var Mongoose = require('mongoose');


var ILoginSchema = new Mongoose.Schema({
  name: String,
  email: String,
  password: String,
  college: String,
  major: String,
  grade: String
});

exports.ILogin = Mongoose.model('ILogin', ILoginSchema);
