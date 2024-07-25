import { Schema, model } from "mongoose";

import { handleMongooseError } from "../helpers/handleMongooseError.js";
import { emailRegExp } from "../constants/emailRegExp.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: emailRegExp,
      unique: true,
    },
    accessToken: {
      type: String,
      default: null,
    },
    refreshToken: {
      type: String,
      default: null,
    },
    events: {
      type: [{ type: Schema.Types.ObjectId, ref: "Event" }],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

export const User = model("user", userSchema);
