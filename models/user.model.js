import mongoose from 'mongoose'


const userDetailsSchema = mongoose.Schema({
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
	required: true
    },
    password:{
	type: String,
	required: true
    },
    phoneNo:{
	type: Number,
	required: true
    }
})
