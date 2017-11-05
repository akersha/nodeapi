var mongoose = require("mongoose");

module.exports = function(config){
	
	mongoose.connect(config.db, { useMongoClient: true });
	
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error'));
	db.on('open', function(){console.log('Connected to DB')});
	
}