import mongoose from 'mongoose'
import { ObjectId } from 'mongoose'

import { User } from '../models/user.model.js'


export const GetUserDetails = async ( req, res ) =>{
    let user_id = req.params.user_id
    console.log(`user id : ${user_id}`)

    try{
	let getUser = await User.findById( user_id, 'details' )

	// failure
	if( getUser == null )
	    return res.status(500).send(`user doesnot exist!`)

	// success
	return res.status(200).json({ details: getUser })

    }catch(e){
	console.log(`userDetails error: ${e}`)
	return res.status(500).end()
    }
}
