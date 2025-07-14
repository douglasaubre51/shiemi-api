import express from 'express'

import { SignUp, SignIn } from '../controllers/auth.controller.js'


export const authRouter = express.Router()

authRouter.post(
    '/sign-up',
    SignUp
)

authRouter.post(
    '/sign-in',
    SignIn
)

