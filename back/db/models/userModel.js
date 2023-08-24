import { User } from "../schemas/user";

class UserModel {
  static async create({ newUser }) {
    const createNewUser = await User.create(newUser);
    return createNewUser;
  }

  static async findById({ id }) {
    const user = await User.findOne(id);
    return user;
  }

  static async findByEmail({ email }) {
    const user = await User.findOne({ email });
    return user;
  }

  static async deleteById({ id }) {
    const user = await User.deleteOne(id);
    return user;
  }

  static async update({ id, fieldToUpdate, newValue }) {
    const filter = { id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedUser = await User.findOneAndUpdate(
      filter,
      update,
      option
    )
    return updatedUser;
  }
}

export { UserModel };
