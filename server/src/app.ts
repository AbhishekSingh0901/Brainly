import express, { Application } from "express";
import { router as userRouter } from "./routes/user.route";
import { router as contentRouter } from "./routes/content.route";
import { router as brainRouter } from "./routes/brain.route";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/contents", contentRouter);
app.use("/api/v1/brain", brainRouter);

export default app;
