// models
import { Project } from "../models/project.model.js"

// services
import { ProjectInitializer } from "../services/projectInitializer.service.js"


// POST: /project/create
export const CreateNewProject = async (req, res) => {
    let {
        userId,

        title,
        description,
        shortDescription,
        price,
        endsAt
    } = req.body

    try {
        const newProject = await Project.create({
            userId,
            title,
            description,
            shortDescription,
            price,
            endsAt
        })

        // initialize project channels rooms
        let isProjectInitialized = await ProjectInitializer(userId, newProject._id)
        if (!isProjectInitialized)
            return res.status(500).send(`error initializing project!`)

        return res.status(201).json({
            projectId: newProject._id.toString()
        })

    } catch (e) {
        console.log(`createNewProject error: ${e}`)
        return res.status(500).end()
    }
}


// GET: /project/getall/:userId
export const GetAllByUserId = async (req, res) => {
    let userId = req.body.userId

    await Project.findOne()
}