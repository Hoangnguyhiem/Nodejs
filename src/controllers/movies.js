import Movies from "../models/movies"

export const getMovies = async (req, res) => {
    try {
        const data = await Movies.find();
        console.log(data)
        if (data.length < 0) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(201).json(data);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
export const getMoviesDetail = async (req, res) => {
    try {
        const data = await Movies.findOne({ _id: req.params.id }).populate("category");
        if (!data) {
            res.status(404).json({ message: "Not Found" });
        } else {
            res.status(201).json(data);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
export const addMovies = async (req, res) => {
    try {
        const data = await Movies(req.body).save();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const updateMovies = async (req, res) => {
    try {
        const data = await Movies.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!data) {
            res.status(404).json({ message: "Not Found" });
        } else {
            res.status(201).json(data);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const deleteMovies = async (req, res) => {
    try {
        const data = await Movies.findOneAndDelete({ _id: req.params.id });
        if (!data) {
            res.status(404).json({ message: "Not Found" });
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}