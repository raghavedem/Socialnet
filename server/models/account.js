const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
	name:String,
	email:String,
	phone:String
});

module.exports = mongoose.model('account',AccountSchema,'accounts');