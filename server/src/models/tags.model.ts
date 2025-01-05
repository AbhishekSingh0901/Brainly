import { Schema, model } from "mongoose";

interface ITag {
  title: string;
}

const tagSchema = new Schema<ITag>({
  title: { type: String, required: true, unique: true },
});

export default model<ITag>("Tag", tagSchema);
