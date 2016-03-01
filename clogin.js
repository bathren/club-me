
var Mongoose = require('mongoose');


var CLoginSchema = new Mongoose.Schema({
  clubname: String,
  email: String,
  password: String
});

exports.CLogin = Mongoose.model('CLogin', CLoginSchema);
