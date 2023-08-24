import { Router } from "express";
import ShelterController from "../controllers/shelterController";
import searchMiddleware from "../middlewares/searchMiddleware";
import errorMiddleware from "../middlewares/errorMiddleware";

const shelterRouter = Router();

shelterRouter.get("/home", ShelterController.getShelters);
shelterRouter.get("/shelters/:id", ShelterController.getShelter);
shelterRouter.get(
  "/shelters/districts/:district",
  ShelterController.getDistrictShelter
);
shelterRouter.get("/shelters/search/:name", ShelterController.searchByName);

shelterRouter.use(errorMiddleware);

module.exports = shelterRouter;
