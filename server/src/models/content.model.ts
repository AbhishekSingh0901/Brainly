import { Schema, model, Document } from "mongoose";

enum ContentType {
  LINK = "LINK",
  VIDEO = "VIDEO",
  ARTICLE = "ARTICLE",
  BOOK = "BOOK",
  AUDIO = "AUDIO",
  IMAGE = "IMAGE",
}

interface ContentDocument extends Document {
  link: string;
  type: ContentType;
  title: string;
  tags: Schema.Types.ObjectId[];
  userId: Schema.Types.ObjectId;
}

const contentSchema = new Schema<ContentDocument>({
  link: { type: String, required: true },
  type: { type: String, enum: Object.values(ContentType), required: true },
  title: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tags" }],
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default model<ContentDocument>("Content", contentSchema);
