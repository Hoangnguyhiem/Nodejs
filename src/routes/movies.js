import { Router } from "express";
import { addMovies, deleteMovies, getMovies, getMoviesDetail, updateMovies } from "../controllers/movies";
import {checkPermisson} from "../checkPermisson/checkPermisson";


const moviesRouter = Router()

moviesRouter.get("/" , getMovies)
moviesRouter.post("/" , addMovies)
moviesRouter.get("/:id" , getMoviesDetail)
moviesRouter.put("/:id" , updateMovies)
moviesRouter.delete("/:id" ,checkPermisson, deleteMovies)

export default moviesRouter;