
import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    poster: {
        type: String,
    },
    director: {
        type: String,
    },
    cast: {
        type: String,
    },
    genre: {
        type: String,
    },
    runingTime: {
        type: Number,
    },
    languae: {
        type: String,
    },
    rated: {
        type: Number,
    },
    trailer: {
        type: String,
    }
},
    { timestamps: true, versionKey: false })
export default mongoose.model("Movies", movieSchema)