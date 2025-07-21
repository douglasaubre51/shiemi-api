import mongoose from "mongoose"
import { Types } from "mongoose"


let projectSchema = mongoose.Schema({
    userId: Types.ObjectId,
    channelId: Types.ObjectId,

    title: Types.String,
    description: Types.String,
    shortDescription: Types.String,
    price: Types.Decimal128,
    image: Types.String,

    createdAt: {
        type: Types.Date,
        default: Date.now
    },
    endsAt: Types.Date,
})

export const Project = mongoose.model(
    "project",
    projectSchema
)