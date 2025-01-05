import mongoose from "mongoose";

async function connectDB(): Promise<void> {
  const url = process.env.MONGO_URI || "mongodb://localhost:27017/mern-auth";

  try {
    await mongoose.connect(url);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

export default connectDB;
