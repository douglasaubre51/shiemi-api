import mongoose from "mongoose";
import { Types } from "mongoose";


let messageRoomSchema = mongoose.Schema({
    messageIdList: [Types.ObjectId],

    pinnedMessageIdList: [Types.ObjectId]
})

export const MessageRoom = mongoose.model(
    "message_room",
    messageRoomSchema
)