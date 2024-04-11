import { Router } from "express";
import AuthController from "../controllers/auth.js";

const authRouter = Router();

const authController = new AuthController();

authRouter.post("/signin", authController.login);
authRouter.post("/signup", authController.register);

export default authRouter;
