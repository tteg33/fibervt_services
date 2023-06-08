const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ModelAttrSchema= new Schema({
	name: String,
	url: String,
	size: Number,
	encrypted: Boolean,
	timestamp: Number,
});

module.exports = mongoose.model('ModelAttr', ModelAttrSchema);
