import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import ReviewController from "../controllers/reviewController";

const reviewRouter = Router();

reviewRouter.get("/review/", ReviewController.getReviewByUserId);
reviewRouter.get("/review/:shelter_id", ReviewController.getReviewByShelterId);
reviewRouter.post("/review/:shelter_id", ReviewController.addReview);
reviewRouter.put("/review/:review_id", ReviewController.setReview);
reviewRouter.delete("/review/:review_id", ReviewController.deleteReview);

export { reviewRouter };