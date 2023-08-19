import mongoose, { Schema } from "mongoose";

/** 쉼터 후기 스키마 */
const reviewSchema = new Schema(
  {
    description: {
      type: String,
    },
    rating: {
      type: Number,
    },
    user_id: {
      type: Number,
      ref: User._id,
    },
    shelter_id: {
      type: Number,
      ref: shelter._id,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

export { Review };
