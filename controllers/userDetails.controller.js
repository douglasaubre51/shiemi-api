import mongoose from 'mongoose'
import { ObjectId } from 'mongoose'

import { User } from '../models/user.model.js'


export const GetUserDetails = async ( req, res ) =>{
    let user_id = req.params.user_id
    console.log(`user id : ${user_id}`)

    try{
	let getUser = await User.findById( user_id )

	// failure
	if( getUser == null )
	    return res.status(500).send(`user doesnot exist!`)

	// success
	return res.status(200).json({ 
	    userId: user_id,
	    firstName: getUser.details.firstName,
	    lastName: getUser.details.lastName,
	    email: getUser.details.email,
	    phoneNo: getUser.details.phoneNo,
	    profilePhoto: getUser.details.profilePhoto
	})

    }catch(e){
	console.log(`userDetails error: ${e}`)
	return res.status(500).end()
    }
}
