import mongoose, { Schema } from "mongoose";
import { User } from "./user";
import { Shelter } from "./shelter";

/** 쉼터 후기 스키마 */
const reviewSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    user_id: {
      type: String,
      required: true,
      ref: "User",
    },
    shelter_id: {
      type: Number,
      required: true,
      ref: "Shelter",
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

export { Review };