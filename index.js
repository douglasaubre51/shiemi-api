// services
import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cloudinary from 'cloudinary'

// routes
import { authRouter } from './routes/auth.route.js'
import { userRouter } from './routes/userDetails.route.js'
import { projectRouter } from './routes/project.route.js'
import { settingsRouter } from './routes/settings.route.js'


// cloudinary setup
cloudinary.config({
    cloud_name: 'dwjpy8y0d',
    api_key: '313959326136119',
    api_secret: 'ZnfvP50eNajWKMHs0lY1O7GzNcc'
})

const port = 3000

const app = express()

// middlewares
app.use(bodyParser.urlencoded({ extended: true })) // parse multipart form data

app.use(express.json()) // parse json strings

app.use(express.urlencoded()) // parse url params

app.use(cors())

// connect to neliel db cluster
mongoose.connect(
    'mongodb+srv://allen:chancellor66@neliel.ptcuka3.mongodb.net/shiemidb?retryWrites=true&w=majority&appName=Neliel'
)
    .then(
        () => console.log(`connected to neliel db cluster\nserver running!`)
    )
    .catch(
        (e) => console.log(`db connection error!\n${e.message}`)
    )

// routes
app.use(authRouter)
app.use(userRouter)
app.use(projectRouter)
app.use(settingsRouter)

// start api
app.listen(
    port,
    () => {
        console.log(`started server!`)
    }
)
