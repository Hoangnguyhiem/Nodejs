import Categories from "../models/categories.js"

export const getCategories = async(req, res) => {
    try {
        const data = await Categories.find();
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
export const getCategoriesDetail = async(req, res) => {
    try {
        const data = await Categories.findOne({_id: req.params.id});
        if(data.length < 0) {
            res.status(404).json({message: error.message});
        }else{
            res.status(201).json(data);
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
export const addCategories = async(req, res) => {
    try {
        const data = await Categories(req.body).save();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const updateCategories = async(req, res) => {
    try {
        const data = await Categories.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        if(data.length < 0) {
            res.status(404).json({message: error.message});
        }else{
            res.status(201).json(data);
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const deleteCategories = async(req, res) => { try {
    const data = await Categories.findOneAndDelete({_id: req.params.id});
    if(data.length < 0) {
        res.status(404).json({message: error.message});
    }else{
        res.status(200).json(data);
    }
} catch (error) {
    res.status(500).json({message: error.message});
}}