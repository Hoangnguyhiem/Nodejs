import { Router } from "express";
import MoviesController from "../controllers/movies.js";
import { checkPermission } from "../middlewares/checkPermision.js";

const moviesRouter = Router();

const moviesController = new MoviesController();

moviesRouter.get("/", moviesController.getAllMovies);
moviesRouter.post("/", moviesController.createMovie);
moviesRouter.get("/:id", moviesController.getMovieDetail);
moviesRouter.put("/:id", moviesController.updateMovie);
moviesRouter.delete("/:id", moviesController.deleteMovie);

export default moviesRouter;
