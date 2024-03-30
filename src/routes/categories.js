import { Router } from "express";
import { addCategories, deleteCategories, getCategories, getCategoriesDetail, updateCategories } from "../controllers/categories";

const categoriesRouter = Router()

categoriesRouter.get("/" , getCategories)
categoriesRouter.post("/" , addCategories)
categoriesRouter.get("/:id" , getCategoriesDetail)
categoriesRouter.put("/:id" , updateCategories)
categoriesRouter.delete("/:id" , deleteCategories)

export default categoriesRouter;