import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { Router } from './routes/auth.route.js'


const port = 3000

const app = express()

// add middleware
app.use(express.json())
app.use(cors())
mongoose.connect(
    'mongodb+srv://allen:chancellor66@neliel.ptcuka3.mongodb.net/shiemidb?retryWrites=true&w=majority&appName=Neliel'
)
.then(
    () => console.log(`connected to neliel db cluster\nserver running!`)
)
.catch(
    (e) => console.log(`db connection error!\n${e.message}`)
)

// add routes
app.use(Router)

app.listen( 
    port,
    () =>{
	console.log(`started server!`)
    }
)
