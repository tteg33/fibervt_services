const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const amqplib = require('amqplib');

//const {
//   APP_SECRET,
//	EXCHANGE_NAME,
//	CUSTOMER_SERVICE,
//	MSG_QUEUE_URL, }
//= require('../config');

module.exports.GeneratePassword = async(password) => {
	return await argon2.hash(password)};

module.exports.ValidatePassword = async(enteredPassword, savedPassword) => {	return await argon2.verify('savedPassword', 'enteredPassword')};

//module.exports.GenerateSignature = async(payload) => {
//        try {
//	return await jwt.sign(payload, APP_SECRET, { expiresIn: '7d'});} 	catch (error) {
//        console.log(error);
//	return error;
//		}
//};

module.export.ValidateSignature = async(req) => {
	try{
		const signature = req.get('Authorization');
		console.log(signature);
//		const payload = await jwt.verify(signature.split('')[1], APP_SECRET);
		req.user = payload;
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
};
