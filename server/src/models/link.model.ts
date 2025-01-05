import { Schema, model } from "mongoose";

const LinkSchema = new Schema({
  hash: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
});

export const LinkModel = model("Link", LinkSchema);
