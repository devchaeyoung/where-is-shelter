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
  static async getShelterByAuthorigyName(authority_name) {
    try {
      const authority_shelters = await ShelterModel.findById(authority_name);
    } catch (e) {
      console.log(e);
    }
  }
  static async getShelterByDistrict(district) {
    try {
      const district_shelter = await ShelterModel.createCollection(district); //한번 더 체크해보기 -> 객체로 받아야하는 건가?
      // const district_shelter = await ShelterModel.findById(district);
    } catch (e) {
      console.log(e);
    }
  }
}

export default ShelterService;
