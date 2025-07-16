import mongoose from 'mongoose'


const userDetails = {
    firstName:{
	type: String,
	required: true
    },
    lastName:{
	type: String,
	required: true
    },
    email:{
	type: String,
	required: true,
	unique: true
    },
    password:{
	type: String,
	required: true
    },
    phoneNo:{
	type: Number,
	required: true
    },
    profilePhoto: String
}

const userSchema = mongoose.Schema({
    details: userDetails,
    isDev: Boolean,
    isAdmin: Boolean,
    isMember: Boolean
})

export const User = mongoose.model(
    'user',
    userSchema
)
