import express from "express";
import { addMovies, deleteMovies, getMovies, getMoviesDetail, updateMovies } from "../controllers/movies.js";

const moviesRouter = express.Router()

moviesRouter.get("/" , getMovies)
moviesRouter.post("/" , addMovies)
moviesRouter.get("/:id" , getMoviesDetail)
moviesRouter.put("/:id" , updateMovies)
moviesRouter.delete("/:id" , deleteMovies)

export default moviesRouter;