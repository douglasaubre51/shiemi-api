import mongoose from "mongoose";
import { Types } from "mongoose";


let waitingRoomSchema = mongoose.Schema({
    privateRoomIdList: [Types.ObjectId],

    addedPrivateRoomWorkerIdList: [Types.ObjectId],

    blockIdList: [Types.ObjectId]
})

export const WaitingRoom = mongoose.model(
    "waiting_room",
    waitingRoomSchema
)