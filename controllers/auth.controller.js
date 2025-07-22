// service
import bcrypt from 'bcrypt'
import { ImageUpload } from '../services/imageUpload.service.js'

// model
import { User } from '../models/user.model.js'


// signup
export const SignUp = async (req, res) => {
	let {
		firstName,
		lastName,
		email,
		password,
		phoneNo
	} = req.body

	try {
		// find existing user!
		const existingUser = await User.findOne({ 'details.email': email })
		if (existingUser) {
			return res.status(400).send('email already exists!')
		}

		// hash password
		password = await bcrypt.hash(password, 10)

		// upload profile photo
		let profilePhoto = await ImageUpload(req.file.path)
		if (profilePhoto == null) {
			console.log(`image upload failed!`)
			return res.status(400).send(`failed to upload image!`)
		}

		// create new user
		const details = {
			firstName,
			lastName,
			email,
			password,
			phoneNo,
			profilePhoto
		}
		// save to db
		const newUser = await User.create({
			details
		})

	} catch (e) {
		console.log(`error creating user account!\n${e.message}`)
		return res
			.status(400)
			.send('Server signup error!')
	}

	// success
	console.log(`${firstName} created new account!`)
	return res.status(201).end()
}

// sign in
export const SignIn = async (req, res) => {
	const {
		email,
		password
	} = req.body

	let userId = null;

	try {
		// fetch user
		const getUser = await User.findOne({ 'details.email': email })
		if (!getUser) {
			return res
				.status(400)
				.send(`account doesnot exist!`)
		}

		// compare passwords
		const checkPassword = await bcrypt.compare(
			password,
			getUser.details.password
		)
		if (checkPassword == false) {
			return res
				.status(400)
				.send('invalid password!')
		}

		// get userId
		userId = getUser['_id'].toString()
		console.log(`user id: ${userId}`)

	} catch (e) {
		console.log(`signin error: ${e}`)
		return res
			.status(400)
			.send('Server signin error!')
	}

	// success
	console.log(`${email} signed in!`)
	return res.status(200).json({
		userId: userId
	})
}
