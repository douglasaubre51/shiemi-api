// services
import express from 'express'
import multer from 'multer'

// controllers
import { SignUp, SignIn } from '../controllers/auth.controller.js'


const upload = multer({ dest: 'uploads/' })

export const authRouter = express.Router()

authRouter.post(
    '/sign-up',
    upload.single('profilePhoto'),
    SignUp
)

authRouter.post(
    '/sign-in',
    SignIn
)

