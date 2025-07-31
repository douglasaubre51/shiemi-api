// services
import { Router } from 'express'

// controllers
import { CreateNewProject, EditProfile, GetAll, GetAllByUserId } from '../controllers/project.controller.js'


export const projectRouter = Router()

projectRouter.post(
    '/project/create',
    CreateNewProject
)

projectRouter.get(
    '/project/getall-by-userid',
    GetAllByUserId
)

projectRouter.get(
    '/project/get-all',
    GetAll
)

projectRouter.post(
    '/project/edit-project',
    EditProfile
)