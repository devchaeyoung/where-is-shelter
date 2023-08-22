import ReviewService from "../services/reviewService";
import { StatusCodes } from "http-status-codes";

class ReviewController {
    static async getReviewByUserId(req, res, next) {
      try {
        const user_id = req.params.user_id;
        const result = await ReviewService.getReviewByUserId({ user_id });
        res.status(StatusCodes.OK).json(result);
      } catch (e) {
        console.log(e);
        next(e);
      }
    }

    static async getReviewByShelterId(req, res, next) {
      try {
        const shelter_id = req.params.shelter_id;
        const result = await ReviewService.getReviewByShelterId({ shelter_id });
        res.status(StatusCodes.OK).json(result);
      } catch (e) {
        console.log(e);
        next(e);
      }
    }

    static async addReview(req, res, next) {
      try {
        const { shelter_id } = req.params;
        const { description, rating, user_id } = req.body;
        const result = await reviewService.addReview({ description, rating, user_id, shelter_id })
        res.status(StatusCodes.CREATED).json(result)
      } catch(e) {
        console.log(e);
        next(e);
      }  
    }

    static async setReview(req, res, next) {
      try {
        const review_id = req.params.review_id;
        const { description, rating, user_id, shelter_id } = req.body;
        const result = await reviewService.setReview({ review_id, toUpdate: { description, rating, user_id, shelter_id } });
        res.status(StatusCodes.OK).json(result)
      } catch(e) {
        console.log(e);
        next(e);
      }
    }

    static async deleteReview(req, res, next) {
      try {
        const review_id = req.params.review_id;
        const result = await reviewService.deleteReview({ review_id });
        res.status(StatusCodes.NO_CONTENT).json(result)
      } catch(e) {
        console.log(e);
        next(e);
      }
    }
}
  
export default ReviewController;