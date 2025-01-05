import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
export const userMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token || req.headers.authorization;

  const secret = process.env.JWT_SECRET || "fallback-secret";

  if (!token) {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }

  // Verify token
  const decoded = jwt.verify(token, secret);

  if (!decoded) {
    res.status(401).json({ success: false, message: "Unauthorized" });
  } else {
    //@ts-ignore
    req.userId = decoded.id;
    next();
  }
};
