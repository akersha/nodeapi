var mongoose = require('mongoose');

//create schema
var Schema = mongoose.Schema;
var foodSchema = new Schema({
	name: String,
	calories: Number,
	servingSize: String	
}, { collection: 'foods' });

//create model that uses schema
module.exports = mongoose.model('Food', foodSchema);