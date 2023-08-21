import { User } from "../schemas/user";

class UserModel {
  static async create({ newUser }) {
    const createNewUser = await User.create(newUser);
    return createNewUser;
  }
}

export default UserModel;
