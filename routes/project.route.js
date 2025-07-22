// services
import { Router } from 'express'

// controllers
import { CreateNewProject } from '../controllers/project.controller.js'


export const projectRouter = Router()

projectRouter.post(
    '/project/create',
    CreateNewProject
)

// projectRouter.get(
//     '/project/getall/:projectId',

// )