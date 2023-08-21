import mongoose, { Schema } from "mongoose";

const visitSchema = new Schema(
  {
    user_id: {
      type: Number,
      required: true,
    },
    shelter_id: {
      type: Schema.Types.ObjectId,
      ref: "shelter",
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
