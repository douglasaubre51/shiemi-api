// services
import express from 'express'

// controllers
import { GetUserDetails } from '../controllers/userDetails.controller.js'


export const userRouter = express.Router()

userRouter.get(
    '/user-details/:user_id',
    GetUserDetails
)
