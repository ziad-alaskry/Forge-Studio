import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: String,

    email: {
      type: String,
      required: true,
      unique: true,
    },

    image: String,

    role: {
      type: String,
      enum: ["admin", "user"], // ← MUST MATCH
      default: "user",         // ← MUST MATCH
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);

export default User;
