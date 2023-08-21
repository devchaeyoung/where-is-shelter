import mongoose, { Schema } from "mongoose";

/**방문 횟수 */
const visitSchema = new Schema(
  {
    user_id: {
      type: Number,
      required: true,
    },
    shelter_id: {
      type: Number,
      required: true,
    },
    visited_at: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Visit = mongoose.model("Visit", visitSchema);

export { Visit };
