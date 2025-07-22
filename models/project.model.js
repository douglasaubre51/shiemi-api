import mongoose from "mongoose"
import { Types } from "mongoose"


let projectSchema = mongoose.Schema({
    userId: Types.ObjectId,
    channelId: Types.ObjectId,

    title: String,
    description: String,
    shortDescription: String,
    image: String,

    price: {
        type: Types.Decimal128
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    endsAt: Date,
})

export const Project = mongoose.model(
    "project",
    projectSchema
)