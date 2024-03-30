import { Router } from "express";
import { addMovies, deleteMovies, getMovies, getMoviesDetail, updateMovies } from "../controllers/movies";
import {checkPermisson} from "../checkPermisson/checkPermisson";


const moviesRouter = Router()

moviesRouter.get("/" , getMovies)
moviesRouter.post("/" ,checkPermisson, addMovies)
moviesRouter.get("/:id" , getMoviesDetail)
moviesRouter.put("/:id" ,checkPermisson, updateMovies)
moviesRouter.delete("/:id" ,checkPermisson, deleteMovies)

export default moviesRouter;