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
export const GetAll = async (req, res) => {
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