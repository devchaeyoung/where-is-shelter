import mongoose, { Schema } from "mongoose";
import { User } from "./user";
import { Shelter } from "./shelter";

/** 쉼터 후기 스키마 */
const reviewSchema = new Schema(
  {
    id: {
      type: Number,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    shelter_id: {
      type: Schema.Types.ObjectId,
      ref: "Shelter",
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

export { Review };
