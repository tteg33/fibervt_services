const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: String,
        password: String,
	username: String,
	uploadedModel:[{type: Schema.Types.ObjectId, ref: 'modelattr', require: false }]},
	{toJSON:{
		transform(doc, ret){
			delete ret.password;
			delete __v;
		}}
	},
);

module.exports = mongoose.model('User', UserSchema);
