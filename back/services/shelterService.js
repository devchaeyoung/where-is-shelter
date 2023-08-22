import { ShelterModel } from "../db/index";

class ShelterService {
  static async getShelters() {
    try {
      const shelters = await ShelterModel.findAll();
      console.log(shelters);
      return shelters;
    } catch (e) {
      console.log(e);
    }
  }
  static async getShelterById(id) {
    try {
      const shelter = await ShelterModel.findById(id);
      return shelter;
    } catch (e) {
      console.log(e);
    }
  }
  static async getShelterByDistrict(district) {
    try {
      const district_shelter = await ShelterModel.findByDistrict(district);
      console.log(district_shelter);
      return district_shelter;
    } catch (e) {
      console.log(`${e}\n 해당지역의 쉼터가 없습니다.`);
    }
  }
}

export default ShelterService;
