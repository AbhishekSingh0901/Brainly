import { Response } from "express";

export const sendToken = (
  user: any,
  statusCode: number,
  res: Response,
  message: string
) => {
  const token = user.generateToken();
  res
    .status(statusCode)
    .cookie("token", token, {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      secure: false, // Set true only in production
      sameSite: "lax",
    })
    .json({
      success: true,
      message,
      user,
    });
};
