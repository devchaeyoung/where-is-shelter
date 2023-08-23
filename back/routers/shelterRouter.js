import { Router } from "express";
import ShelterController from "../controllers/shelterController";

const shelterRouter = Router();

shelterRouter.get("/home", ShelterController.getShelters);
shelterRouter.get("/home/:id", ShelterController.getShelter);
shelterRouter.get("/home/:district", ShelterController.getDistrictShelter);

module.exports = shelterRouter;
