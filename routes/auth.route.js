import express from 'express'

import { SignUp, SignIn } from '../controllers/auth.controller.js'


export const Router = express.Router()

Router
.post(
    '/sign-up',
    SignUp
)

Router.post(
    '/sign-in',
    SignIn
)

