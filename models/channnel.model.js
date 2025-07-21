import mongoose from "mongoose";


let channelSchema = mongoose.Schema({
    workerIdList: [mongoose.Types.ObjectId]
})