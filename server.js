var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");

var config = require('./config/config');
var app = express();

//MongoDB connect module
require('./config/mongoConnect')(config);

//Logging 
app.use(logger('dev'));
//parsing urlencoded and json requests
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/pub'));

//ROUTES - move to module to be required
require('./app/routes')(app);

var port = 3000;
app.listen(port, function(){
	console.log("Listening on port: " + port);
});