// 프로필 사진 기능 테스트용 파일입니다.

import { User } from "../schemas/user";

class profileModel {
  static async profileUploads() {
    const createdNewProfile = await User.create(newUser);
    return createdNewProfile;
  }

  static async deleteByProfile({ id }) {
    const deletedProfile = await User.deleteOne(id);
    return deletedProfile;
  }

  static async update({ id, fieldToUpdate, newValue }) {
    const filter = { id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedProfile = await User.findOneAndUpdate(filter, update, option);
    return updatedProfile;
  }
}

export default profileModel;
