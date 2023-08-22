import ShelterService from "../services/shelterService";
import { StatusCodes } from "http-status-codes";

class ShelterController {
  /**쉼터 목록 불러오기 */
  static async getShelters(req, res, next) {
    try {
      const shlters = await ShelterService.getShelters();
      res.status(StatusCodes.OK).json(shlters);
    } catch (e) {
      console.log(e);
    }
  }
  /**특정 쉼터 조회 */
  static async getShelter(req, res, next) {
    try {
      const id = req.params.id;
      const shlter = await ShelterService.getShelterById(id);
      res.status(StatusCodes.OK).json(shlter);
    } catch (e) {
      console.log(e);
    }
  }

  static async getDistrictShelter(req, res, next) {
    try {
      // const district = req.params.id;
      // res.status(StatusCodes.OK).json({});
    } catch (e) {
      console.log(e);
    }
  }
}

export default ShelterController;
