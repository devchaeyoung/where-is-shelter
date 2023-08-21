import { Visit } from "../schemas/visit";

class VisitModel {
  static async create({ bookMark }) {
    const createNewLike = await Visit.create(bookMark);
    return createNewLike;
  }

  static async findByUserId({ id }) {
    const Like = await Visit.findOne({ id });
    return Like;
  }
}

export { VisitModel };