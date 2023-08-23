import mongoose, { Schema } from "mongoose";

const lovedvisitSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    shelter_id: {
      type: Schema.Types.ObjectId,
      ref: "Shelter",
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

const lovedVisit = mongoose.model("lovedVisits", lovedvisitSchema);

export { lovedVisit };
