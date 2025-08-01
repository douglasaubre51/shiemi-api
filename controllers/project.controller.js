// di
import mongoose from 'mongoose'

// models
import { Project } from "../models/project.model.js"

// dtos
import { ProjectDto } from '../dtos/project.dto.js'

// services
import { ProjectInitializer } from "../services/projectInitializer.service.js"


// POST: /project/edit-profile
export const EditProfile = async (req, res) => {
    try {
        const project = new ProjectDto(req.body)
        console.log(`req obj : ${project.projectId}`)

        const obj =  await Project.findByIdAndUpdate(
            project.projectId,
            {
                $set: {
                     title: project.title,
                     description: project.description,
                     shortDescription: project.shortDescription,
                     price: project.price,
                 }
            }
        )

        console.log(`edited project: ${obj}`)

        return res.status(200).end()
    }
    catch (e) {
        console.log(`EditProfile error: ${e}`)
        return res.status(500).end()
    }
}

// GET: /project/get-all
export const GetAll = async (req, res) => {
    try {

        const projects = await Project.find()
        return res.status(200).json({ projectsDto: projects })
    }
    catch (e) {

        console.log(`getall projects error:${e}`)
        return res.status(500).send(`server error`)
    }
}


// GET: /project/getall/:userId
export const GetAllByUserId = async (req, res) => {

    let userId = req.query.userId
    console.log(`user id: ${userId}`)
    try {

        const projectsDto = await Project.find({ userId: userId })
        if (projectsDto == null) {
            console.log(`empty project list!`)
            return res.status(500).send(`empty!`)
        }

        console.log(`sending projectsDto!`)
        return res.status(200).json({ projectsDto: projectsDto })

    } catch (e) {

        console.log(`error fetching projects : ${e}`)
        return res.status(500).send(`server error!`)
    }
}


// POST: /project/create
export const CreateNewProject = async (req, res) => {

    let {
        userId,

        title,
        description,
        shortDescription,
        price
    } = req.body

    try {

        let newProject = null
        let isProjectInitialized = false

        // init session
        const session = await mongoose.startSession()
        await session.withTransaction(async () => {
            newProject = await Project.create([{
                userId,
                title,
                description,
                shortDescription,
                price
            }],
                { session }
            )

            isProjectInitialized = await ProjectInitializer(userId, newProject._id, session)
        })
        session.endSession()

        // initialize project channels rooms
        if (!isProjectInitialized) {
            return res.status(500).send(`error initializing project!`)
        }

        return res.status(201).send(`project created successfully!`);

    } catch (e) {

        console.log(`createNewProject error: ${e}`)
        return res.status(500).end()
    }
}