import { Project } from "../models/project.model.js"
import { Channel } from "../models/channel.model.js"
import { MessageRoom } from "../models/messageRoom.model.js"
import { WaitingRoom } from "../models/waitingRoom.model.js"
import { User } from "../models/user.model.js"


export const ProjectInitializer = async (userId, projectId, session) => {
    try {
        // add to user
        await User.updateOne(
            { _id: userId },
            {
                $push: {
                    projectIdList: projectId
                }
            },
            { session }
        )

        // create message, waiting rooms
        const messageRoom = await MessageRoom.create([{}], { session })
        const waitingRoom = await WaitingRoom.create([{}], { session })

        // create channel
        const channel = await Channel.create(
            [{
                messageRoomId: messageRoom._id,
                waitingRoomId: waitingRoom._id
            }],
            { session }
        )

        // add to project
        await Project.updateOne(
            { _id: projectId },
            {
                $set:
                    { channelId: channel._id }
            },
            { session }
        )

        return true
    } catch (e) {
        console.log(`projectInitializer error: ${e}`)
        return false
    }
}