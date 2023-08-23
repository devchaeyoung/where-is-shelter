import { Review } from "../schemas/review";

class ReviewModel {
  static async create(newReview) {
    const createdNewReview = await Review.create(newReview);
    return createdNewReview;
  }
  
  // 마이페이지에서 유저가 작성한 리뷰를 가져옴
  static async findByUserId(user_id) {
    const user_reviews = await Review.find({ user_id });
    return user_reviews;
  }

  // 쉼터 상세 페이지에서 쉼터에 대한 리뷰를 가져옴
  static async findByShelterId(shelter_id) {
    const shelter_reviews = await Review.find({ shelter_id });
    return shelter_reviews;
  }

  // 유저가 특정 쉼터에 작성한 리뷰를 가져옴
  static async findByUserIdShelterId(user_id, shelter_id) {
    const user_shelter_review = await Review.findOne({ user_id, shelter_id });
    return user_shelter_review;
  }
  
  // 특정 리뷰 가져옴
  static async findById(review_id) {
    const review = await Review.findOne({ _id: review_id });
    return review;
  }

  // 리뷰 수정
  static async update(review_id, updateField) {
    const filter = { _id: review_id };
    const update = { $set: updateField };
    const option = { returnOriginal: false };

    const updatedReview = await Review.findOneAndUpdate(
        filter,
        update,
        option
    );
    return updatedReview;
  }

  // 리뷰 삭제
  static async findByIdAndRemove(review_id) {
    const filter = { _id: review_id };
    const deletedReview = await Review.findOneAndDelete(filter);
    return deletedReview;
  }
}

export { ReviewModel };