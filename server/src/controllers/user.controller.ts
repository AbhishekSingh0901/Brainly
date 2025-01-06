import { Request, Response } from "express";
import { z } from "zod";
import { UserModel } from "../models/user.model";
import { sendToken } from "../utils/jwtToken";

export const login = (req: Request, res: Response) => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { data, error } = schema.safeParse(req.body);
  error && res.status(400).json({ success: false, message: error.issues });

  if (!data) return;

  const { email, password } = data as { email: string; password: string };
  UserModel.findOne({ email })
    .select("+password")
    .then((user) => {
      const isMatch = user?.comparePassword(password);
      if (!user || !isMatch) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      }
      sendToken(user, 200, res, "User Logged In successfully");
    })
    .catch((err) => {
      res.status(500).json({ success: false, message: err.message });
    });
};

export const signup = (req: Request, res: Response) => {
  const schema = z.object({
    username: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { error, data } = schema.safeParse(req.body);

  error && res.status(400).json({ success: false, message: error.issues });
  if (!data) return;

  const { username, email, password } = data;

  UserModel.create({ username, email, password })
    .then((user) => {
      sendToken(user, 201, res, "User created successfully");
    })
    .catch((err) => {
      res.status(400).json({ success: false, message: err.message });
    });
};

export const logout = (req: Request, res: Response) => {
  res
    .clearCookie("token")
    .status(200)
    .json({ success: true, message: "User logged out" });
};
