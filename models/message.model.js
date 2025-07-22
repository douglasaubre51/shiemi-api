import mongoose from "mongoose";
import { Types } from "mongoose";


let messageSchema = mongoose.Schema({
    senderId: Types.ObjectId,

    image: String,
    voice: String,
    video: String,
    text: String,

    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const MessageRoom = mongoose.model(
    "message",
    messageSchema
)