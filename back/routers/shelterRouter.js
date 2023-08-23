import { Router } from "express";
import ShelterController from "../controllers/shelterController";
import searchMiddleware from "../middlewares/searchMiddleware";

const shelterRouter = Router();

shelterRouter.get("/home", ShelterController.getShelters);
shelterRouter.get("/shelters/:id", ShelterController.getShelter);
shelterRouter.get(
  "/shelters/districts/:district",
  ShelterController.getDistrictShelter
);
shelterRouter.get(
  "/shelters/search/:name",
  searchMiddleware,
  ShelterController.searchByName
);

module.exports = shelterRouter;
