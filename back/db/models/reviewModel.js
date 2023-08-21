import { Review } from "../schemas/review";

class ReviewModel {
  static async create(newReview) {
    const createdNewReview = await Review.create(newReview);
    return createdNewReview;
  }

  static async;
}

export { ReviewModel };
