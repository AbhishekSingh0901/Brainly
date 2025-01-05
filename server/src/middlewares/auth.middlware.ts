import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token || req.headers.authorization;

  if (!token) {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }

  // Verify token
  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET || "flallback-secret"
  );

  if (!decoded) {
    res.status(401).json({ success: false, message: "Unauthorized" });
  } else {
    //@ts-ignore
    req.userId = decoded.id;
    next();
  }
};
