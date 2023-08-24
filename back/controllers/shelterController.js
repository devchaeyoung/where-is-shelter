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
    const id = req.params.id;
    try {
      const shelter = await ShelterService.getShelterById(id);
      res.status(StatusCodes.OK).json(shelter);
    } catch (e) {
      console.log(e);
    }
  }
  /**지역별 쉼터 조회 */
  static async getDistrictShelter(req, res, next) {
    const district = req.params.district;
    try {
      const shelterDistrict = await ShelterService.getShelterByDistrict(
        district
      );
      res.status(StatusCodes.OK).json(shelterDistrict);
    } catch (e) {
      console.log(`${e}\n 쉼터 위치별 정보를 조회할 수 없습니다.`);
    }
  }
  /** 쉼터명 검색 */
  static async searchByName(req, res, next) {
    const name = req.params.name;

    if (!name) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "해당 검색어의 쉼터를 찾을 수 없습니다." });
    }
    try {
      const shelterFindName = await ShelterService.searchByName(name);
      res.json(shelterFindName);
    } catch (e) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: "An error occurred while searching for shelters." });
    }
  }
}

export default ShelterController;
