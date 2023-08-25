import { User } from "../schemas/user";

class profileModel {
  static async profileUploads() {
    const createNewUser = await User.create(newUser);
    return createNewUser;
  }

  static async deleteByProfile({ id }) {
    const user = await User.deleteOne(id);
    return user;
  }

  static async update({ id, fieldToUpdate, newValue }) {
    const filter = { id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedUser = await User.findOneAndUpdate(filter, update, option);
    return updatedUser;
  }
}

export default profileModel;
