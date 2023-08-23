import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import UserController from "../controllers/userController";

const userRouter = Router();

userRouter.post('/user/register', UserController.addUser)
userRouter.get('/user/login', UserController.getUser)
userRouter.get('/user/current', login_required, UserController.detailUser)
userRouter.put('/user/update', login_required, UserController.setUser)
userRouter.delete('/user/delete', login_required, UserController.deleteUser)

export { userRouter };
