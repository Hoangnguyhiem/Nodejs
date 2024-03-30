import { Router } from "express";
import { Signin, Signup } from "../controllers/auth";


const userSchema = Router();

userSchema.post("/signup", Signup)
userSchema.post("/signin", Signin)

export default userSchema