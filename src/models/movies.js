
import mongoose, { Schema } from "mongoose";

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
    genres: {
        type: String,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Categories",
        require: true
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
    },
    imgBanner: {
        type: String,
    }
},
    { timestamps: true, versionKey: false })
export default mongoose.model("Movies", movieSchema)