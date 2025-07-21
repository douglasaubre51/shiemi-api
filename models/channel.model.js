import mongoose from "mongoose";
import { Types } from "mongoose";


let channelSchema = mongoose.Schema({
    messageRoomId: Types.ObjectId,

    waitingRoomId: Types.ObjectId,

    addedWorkerIdList: [Types.ObjectId]
})

export const Channel = mongoose.model(
    "channel",
    channelSchema
)