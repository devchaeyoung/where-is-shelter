import { Router } from "express";
import ShelterController from "../controllers/shelterController";

const shelterRouter = Router();
shelterRouter.get("/home", ShelterController.getShelters);

export { shelterRouter };
