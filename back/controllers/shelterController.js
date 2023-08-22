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
      const shelter = await ShelterService.getShelterById(id);
      res.status(StatusCodes.OK).json(shelter);
    } catch (e) {
      console.log(e);
    }
  }

  static async getDistrictShelter(req, res, next) {
    try {
      // const { district } = req.params;
      const shelterDistrict = await ShelterService.getShelterByDistrict(
        district
      );
      res.status(StatusCodes.OK).json(shelterDistrict);
    } catch (e) {
      console.log(`${e}\n 쉼터 위치별 정보를 조회할 수 없습니다.`);
    }
  }
}

export default ShelterController;
