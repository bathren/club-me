/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var mongoose = require('mongoose');

var index = require('./routes/index');
var project = require('./routes/project');

var local_database_name = 'clubme';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);

var matchme = require('./routes/matchme');
var settings = require('./routes/settings');
var myclubs = require('./routes/myclubs');
var search = require('./routes/search');
var update = require('./routes/update');
var csignup = require('./routes/csignup');
var isignup = require('./routes/isignup');
var dance = require('./routes/dance');
var ifc = require('./routes/ifc');
var phc = require('./routes/phc');
var ttv = require('./routes/ttv');
var nmotion = require('./routes/nmotion');
var indprofile = require('./routes/indprofile');
var signup = require('./routes/signup');
var club = require('./routes/club');

var searchresults = require('./routes/searchresults');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.post('/user/login', isignup.checkUser);
app.post('/user/new', isignup.addUser);
//app.post('/club/new', csignup.addClub);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/project/:name', project.viewProject);
app.get('/settings', settings.view);
app.get('/matchme', matchme.view);
app.get('/myclubs', myclubs.view);
app.get('/search', search.view);
app.get('/update', update.view);
app.get('/csignup', csignup.view);
app.get('/isignup', isignup.view);
app.get('/dance', dance.view);
app.get('/ttv', ttv.view);
app.get('/nmotion', nmotion.view);
app.get('/indprofile', indprofile.view);
app.get('/signup', signup.view);
app.get('/ifc', ifc.view);
app.get('/phc', phc.view);
//app.get('/club', club.view);
app.get('/clubs/dance/:id/:name', club.view);

app.get('/searchresults', searchresults.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
