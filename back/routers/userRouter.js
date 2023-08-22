import { Router } from "express";
import { signInUser } from "../controllers/userController";

const userRouter = Router();

userRouter.post("/user/login", signInUser);
