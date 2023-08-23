import { ShelterModel } from "../db/index";

class ShelterService {
  static async getShelters() {
    try {
      const shelters = await ShelterModel.findAll();
      console.log(shelters);
      return shelters;
    } catch (e) {
      throw new Error(`${e}\n 해당 쉼터를 찾을 수 없습니다.`);
    }
  }
  static async getShelterById(id) {
    try {
      const shelter = await ShelterModel.findById(id);
      console.log(shelter);
      return shelter;
    } catch (e) {
      throw new Error(`${e}\n 해당 쉼터를 찾을 수 없습니다.`);
    }
  }
  static async getShelterByDistrict(district) {
    try {
      const district_shelter = await ShelterModel.findByDistrict(district);
      console.log(district_shelter);
      return district_shelter;
    } catch (e) {
      throw new Error(`${e}\n 해당 쉼터를 찾을 수 없습니다.`);
    }
  }
  /** 쉼터명 검색 */
  static async searchByName(name) {
    try {
      const searchShelter = await ShelterModel.searchByName(name);
      console.log(searchShelter);
      return searchShelter;
    } catch (e) {
      throw new Error(`${e}\n 해당 쉼터를 찾을 수 없습니다.`);
    }
  }
}

export default ShelterService;
