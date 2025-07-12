import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

import { User } from '../models/user.model.js'


// signup
export const SignUp = async ( req, res ) =>{
    let {
	firstName,
	lastName,
	email,
	password,
	phoneNo
    } = req.body

    try{
	const existingUser = await User.findOne({ 'details.email': email })
	if( existingUser ){
	    return res.status(400).send('email already exists!')
	}

	// hash password
	password = await bcrypt.hash( password, 10 )

	// create new user
	const details = {
	    firstName,
	    lastName,
	    email,
	    password,
	    phoneNo
	}
	const newUser = User({
	    details
	})
	newUser.save()

    }catch(e){ 
	console.log(`error creating user account!\n${e.message}`)
	return res
	    .status(400)
	    .send('Server signup error!')
    }

    return res.status(201).end()
}

// sign in
export const SignIn = async ( req, res ) =>{
    const {
	email,
	password
    } = req.body

    try{
	// fetch user
	const getUser = await User.findOne({ 'details.email': email })
	if ( !getUser ){
	    return res
		.status(400)
		.send(`account doesnot exist!`)
	}

	// compare passwords
	const checkPassword = await bcrypt.compare(
	    password,
	    getUser.details.password
	)
	if( checkPassword == false ){
	    return res
		.status(400)
	    .send('invalid password!')
	}

    }catch(e){
	return res
	    .status(400)
	.send('Server signin error!')
    }

    // success
    return res.status(200).json({
	message: 'user logged in'
    })
}
