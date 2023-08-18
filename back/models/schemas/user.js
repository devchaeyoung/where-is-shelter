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
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    count_visit: {
      type: String,
      required: false,
    },
    eco_level: {
      type: String,
      required: false,
    },
  },
  {
    timestaps: true,
  }
);

const User = mongoose.model("User", userSchema);

export { User };
