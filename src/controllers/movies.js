import Movies from "../models/movies.js"

export const getMovies = async(req, res) => {
    try {
        const data = await Movies.find();
        console.log(data)
        if(data.length < 0) {
            res.status(404).json({message: error.message});
        }else{
            res.status(201).json(data);
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
export const getMoviesDetail = async(req, res) => {
    try {
        const data = await Movies.findOne({_id: req.params.id});
        if(data.length < 0) {
            res.status(404).json({message: error.message});
        }else{
            res.status(201).json(data);
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
export const addMovies = async(req, res) => {
    try {
        const data = await Movies(req.body).save();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const updateMovies = async(req, res) => {
    try {
        const data = await Movies.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        if(data.length < 0) {
            res.status(404).json({message: error.message});
        }else{
            res.status(201).json(data);
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const deleteMovies = async(req, res) => { try {
    const data = await Movies.findOneAndDelete({_id: req.params.id});
    if(data.length < 0) {
        res.status(404).json({message: error.message});
    }else{
        res.status(200).json(data);
    }
} catch (error) {
    res.status(500).json({message: error.message});
}}