import { Review } from "..";

class ReviewModel {
  static async create({ newReview }) {
    const createdNewReview = await Review.create(newReview);
    return createdNewReview;
  }
}

export default ReviewModel;
