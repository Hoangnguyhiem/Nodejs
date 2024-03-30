import Genres from "../models/genres"

export const getAllGenres = async (req, res) => {
  
    try {
        const data = await Genres.find();
        res.status(200).json({ data })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getGenreDetail = async (req, res) => {
    try {
        const data = await Genres.findById(req.params.id)
        if (!data) {
            return res.status(404).json({
                message: "Not Found",
            })
        }
        res.status(200).json({data})
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
}

export const addGenre = async (req, res) => {
    try {
        const data = await Genres(req.body).save();
        res.status(201).json({data})
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
}

export const updateGenre = async (req, res) => {
    try {
        const data = await Genres.findByIdAndUpdate(req.params.id , req.body , {new:true})
        if(!data) {
            return res.status(404).json({
                message: "Not Found",
            })
        }
        res.status(200).json({data})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteGenre = async(req, res) => {
    try {
        const data = await Genres.findByIdAndDelete(req.params.id)
        if(!data) {
            return res.status(404).json({
                message: "Not Found"
            })
        }
        res.status(200).json({data})
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
}