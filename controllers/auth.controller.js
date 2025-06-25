import mongoose from 'mongoose'

import { User } from '../models/user.model.js'


export const SignUp = ( req, res ) =>{
    const {
	firstName,
	lastName,
	email,
	password,
	phoneNo
    } = req.body

    try{
    const newUser = User({
	firstName,
	lastName,
	email,
	password,
	phoneNo
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
    return res.status(201)
}
