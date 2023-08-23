import { Router } from "express";
import ShelterController from "../controllers/shelterController";

const shelterRouter = Router();

shelterRouter.get("/home", ShelterController.getShelters);
shelterRouter.get("/shelters/:id", ShelterController.getShelter);
shelterRouter.get(
  "/shelters/districts/:district",
  ShelterController.getDistrictShelter
);
shelterRouter.get("/shelters/search/:name", ShelterController.searchByName);

module.exports = shelterRouter;
