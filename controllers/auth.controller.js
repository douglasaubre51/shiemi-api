import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

import { User } from '../models/user.model.js'


export const SignUp = async ( req, res ) =>{
    let {
	firstName,
	lastName,
	email,
	password,
	phoneNo
    } = req.body

    try{
	password = await bcrypt.hash( password, 10 )

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
	    .json({
		message: `error during sign up!`
	    })
    }

    console.log(`user account created!`)
    return res.status(201).end()
}

// sign in
export const SignIn = async ( req, res ) =>{
    console.log("signing in!");
    const {
	email,
	password
    } = req.body

    try{
	const getUser = await User.findOne({ 'details.email': email })

	if ( !getUser ){
	    console.log(`account doesnot exist!`)
	    return res
		.status(400)
		.json({
		    message: `account doesnot exist!`
		})
	}

	console.log(`password: ${password} & getUser password: ${getUser.details.password}`)

	const checkPassword = await bcrypt.compare(
	    password,
	    getUser.details.password
	)

	if( checkPassword == false ){
	    console.log(`wrong password!`)
	    return res
		.status(400)
		.json({
		    message: `wrong password!`
		})
	}
    }catch(e){
	console.log(`error during sign in!${e.message}`)
	return res
	    .status(400)
	    .json({
		message: `error during sign in${e.message}!`
	    })
    }

    console.log(`user logged in`)
    return res.status(200).json({
	message: 'user logged in'
    })
}
