import { Shelter } from "../schemas/shelter";

class ShelterModel {
  /** 모든 쉼터 (gps기반 조회) 클러스트링용 마커클러스터화하기 */
  static async findAll() {
    const shelters = await Shelter.find();
    return shelters;
  }
  /** 특정 쉼터 조회 */
  static async findById(id) {
    const shelter = await Shelter.findOne(id);
    return shelter;
  }
  /** 관할 구역별 쉼터 조회 */
  static async findByAuthorityName(authority_name) {
    const authority_shelters = await Shelter.find({
      authority_name,
    });
    return authority_shelters;
  }

  static async findByDistrict(district) {
    const district_shelter = await Shelter.find({
      district,
      //Model.createCollection() 이거 써야하는 건가..?
    });
    return district_shelter;
  }
}

export { ShelterModel };
