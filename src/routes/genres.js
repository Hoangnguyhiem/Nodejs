import { Router } from "express";
import { addGenre, deleteGenre, getAllGenres, getGenreDetail, updateGenre } from "../controllers/genres";


const genreRouter = Router();

genreRouter.get("/", getAllGenres)
genreRouter.get("/:id", getGenreDetail)
genreRouter.post("/", addGenre)
genreRouter.put("/:id", updateGenre)
genreRouter.delete("/:id", deleteGenre)

export default genreRouter;