import { Router } from "express";
import GenresController from "../controllers/genres";
import { checkPermission } from "../middlewares/checkPermision";

const genresRouter = Router();

const genresController = new GenresController();

genresRouter.get("/", genresController.getAllGenres);
genresRouter.get("/:id", genresController.getGenreDetail);
genresRouter.post("/", genresController.createGenre);
genresRouter.put("/:id", genresController.updateGenre);
genresRouter.delete("/:id", genresController.deleteGenre);

export default genresRouter;
