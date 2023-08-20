import ShelterService from "../services/shelterService";
import { StatusCodes } from "http-status-codes";

class ShelterController {
  static async getShelters(req, res, next) {
    try {
      const shlters = await ShelterService.getShelters();
      res.status(StatusCodes.OK).json(shlters);
    } catch (e) {
      console.log(e);
    }
  }
  static async getShelter(req, res, next) {
    try {
      // const id = req.params.id;
      // const shlter = await ShelterService.getShelterById(id);
      // res.status(StatusCodes.OK).json(shlter);
    } catch (e) {}
  }
}

export default ShelterController;
