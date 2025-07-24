// services
import { Router } from 'express'

// controllers
import { CreateNewProject, GetAll } from '../controllers/project.controller.js'


export const projectRouter = Router()

projectRouter.post(
    '/project/create',
    CreateNewProject
)

projectRouter.get(
    '/project/get-all',
    GetAll
)