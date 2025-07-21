import mongoose from "mongoose";
import { Types } from "mongoose";


let messageSchema = mongoose.Schema({
    senderId: Types.ObjectId,

    image: Types.String,
    voice: Types.String,
    video: Types.String,
    text: Types.String,

    createdAt: {
        type: Types.Date,
        default: Date.now
    }
})

export const MessageRoom = mongoose.model(
    "message",
    messageSchema
)