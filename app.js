
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var matchme = require('./routes/matchme');
var settings = require('./routes/settings');
var myclubs = require('./routes/myclubs');
var search = require('./routes/search');
var update = require('./routes/update');
var dance = require('./routes/dance');
var ttv = require('./routes/ttv');
var nmotion = require('./routes/nmotion');
var indprofile = require('./routes/indprofile');
var signup = require('./routes/signup');
var club = require('./routes/club');
var categories = require('./routes/categories');
var category = require('./routes/category');

var searchresults = require('./routes/searchresults');
// Example route
// var user = require('./routes/user');

var app = express();

var hbs = handlebars.create({
    // Specify helpers which are only registered on this instance. 
    helpers: {
        lookup: function (obj, field) { return obj[field];
        }
    }
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine);
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

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/settings', settings.view);
app.get('/matchme', matchme.view);
app.get('/myclubs', myclubs.view);
app.get('/search', search.view);
app.get('/update', update.view);
app.get('/dance', dance.view);
app.get('/ttv', ttv.view);
app.get('/nmotion', nmotion.view);
app.get('/indprofile', indprofile.view);
app.get('/signup', signup.view);
app.get('/categories', categories.view);
app.get('/categories/:category', category.view);
app.get('/categories/:category/:id/:name', club.view);

app.get('/searchresults', searchresults.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});