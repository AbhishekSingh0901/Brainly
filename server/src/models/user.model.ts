import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  generateToken(): string;
  comparePassword(password: string): boolean;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: true },
});

// Hash password before saving
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Generate JWT
userSchema.methods.generateToken = async function () {
  const secret = process.env.JWT_SECRET || "fallback-secret";
  return jwt.sign({ id: this._id }, secret, {
    expiresIn: "24h",
  });
};

// Compare password
userSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

export const UserModel = model<IUser>("User", userSchema);
