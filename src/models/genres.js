import mongoose, { Schema } from "mongoose";

const genreSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps : true , versionKey: false})

export default mongoose.model("Genres", genreSchema)