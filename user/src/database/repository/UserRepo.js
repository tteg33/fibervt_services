const mongoose = require('mongoose');
const { ModelAttrModel, UserModel } = require ('../models');

class UserRepo {


	//Create new user
	async CreateUser({email, password, salt, username}){
		const User = new UserModel({

			email,
			password,
			salt,
			username,
			uploadedModel: []
	})
                const userResult = await user.save();
		return userResult;
	}
       

//Create model attributes
	async CreateModelAttr({_id, name, url, size, encrypted, timestamp}){
	const profile = await UserModel.findById(_id);

	if (profile){
	const newModelAttrModel = new ModelAttrModel({

                name,
		url,
		size,
		encrypted,
		timestamp})

		await newModelAttrModel.save();
		
		profile.address.push(newModelAttrModel);
	        }
	return await profile.save();
	}

       
//Find user by their attibutes
	async FindUserbyEmail({ email }){
		const existingUser = await UserModel.findOne({ email: email });
		return existingUser;
	}



	async FindUserbyUsername({ username }){
		const existingUser = await UserModel.findOne({ username: username });
	return existingUser;
	}



	async FindUserbyId({ id }){
		const existingUser = await UserModel.findById(id).populate('uploadedModel');
		return existingUser;
	}
	
}

module.exports = UserRepo;
