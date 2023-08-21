import ShelterModel from "../db/index";

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
    } catch (e) {}
  }
}

export default ShelterService;
