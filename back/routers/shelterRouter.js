import { Router } from "express";
import ShelterController from "../controllers/shelterController";

const sheltersRouter = Router();
const shelterRouter = Router();
sheltersRouter.get("/home", ShelterController.getShelters);
shelterRouter.get("/home/:shelter_id", ShelterController.getShelter);

export { sheltersRouter, shelterRouter };
