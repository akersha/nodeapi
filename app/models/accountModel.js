var mongoose = require('mongoose');

//create schema
var Schema = mongoose.Schema;
var accountSchema = new Schema({
	name: String,
	emailAddress: String,
	department: String	
}, { collection: 'Accounts' });

//create model that uses schema
module.exports = mongoose.model('Account', accountSchema);