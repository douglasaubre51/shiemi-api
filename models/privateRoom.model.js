import mongoose from "mongoose";
import { Types } from "mongoose";


let privateRoomSchema = mongoose.Schema({
    workerId: [Types.ObjectId],

    messageIdList: [Types.ObjectId],
    pinnedMessageIdList: [Types.ObjectId],
})

export const PrivateRoom = mongoose.model(
    "private_room",
    privateRoomSchema
)