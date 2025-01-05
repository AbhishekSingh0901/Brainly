import express, { Application } from "express";
import { router as userRouter } from "./routes/user.route";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/v1/user", userRouter);

export default app;
