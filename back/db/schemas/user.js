import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    count_visit: {
      type: Number,
      required: false,
      default: 0
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export { User };
