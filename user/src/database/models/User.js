const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: String,
        password: String,
        salt: String,
	username: String,
	uploadedModel:[{type: Schema.Types.ObjectId, ref: 'modelattr', require: true }]},
	{toJSON:{
		transform(doc, ret){
			delete ret.password;
			delete ret.salt;
			delete __v;
		}}
	},
);

module.exports = mongoose.model('address', UserSchema);
