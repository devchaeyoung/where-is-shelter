import ReviewService from "../services/reviewService";
import { StatusCodes } from "http-status-codes";

class ReviewController {
    static async getReviewByUserId(req, res, next) {
      try {
        const user_id = req.body.user_id;
        const result = await ReviewService.getReviewByUserId({ user_id });
        res.status(StatusCodes.OK).json(result);
      } catch (e) {
        next(e);
      }
    }

    static async getReviewByShelterId(req, res, next) {
      try {
        console.log(req.params);
        console.log(req.body)
        const { shelter_id } = req.params;
        const result = await ReviewService.getReviewByShelterId({ shelter_id });
        res.status(StatusCodes.OK).json(result);
      } catch (e) {
        next(e);
      }
    }

    static async addReview(req, res, next) {
      try {
        console.log(req.parmas);
        console.log(req.body);
        const { shelter_id } = req.params;
        const { description, rating, user_id } = req.body;
        const result = await ReviewService.addReview({ description, rating, user_id, shelter_id })
        res.status(StatusCodes.CREATED).json(result)
      } catch (e) {
        next(e);
      }  
    }

    static async setReview(req, res, next) {
      try {
        const { review_id } = req.params;
        const { description, rating } = req.body;
        const result = await ReviewService.setReview({ review_id, toUpdate: { description, rating } });
        res.status(StatusCodes.OK).json(result)
      } catch (e) {
        next(e);
      }
    }

    static async deleteReview(req, res, next) {
      try {
        const { review_id } = req.params;
        const result = await ReviewService.deleteReview({ review_id });
        res.status(StatusCodes.NO_CONTENT).json(result)
      } catch (e) {
        next(e);
      }
    }
}
  
export default ReviewController;