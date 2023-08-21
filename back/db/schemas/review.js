import mongoose, { Schema } from "mongoose";

/** 쉼터 후기 스키마 */
const reviewSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      index: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    user_id: {
      type: Number,
      required: true,
      // ref: User._id,
    },
    shelter_id: {
      type: Number,
      required: true,
      // ref: shelter._id,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

export { Review };