import express, { Application } from "express";
import { router as userRouter } from "./routes/user.route";
const app: Application = express();

app.use(express.json());
app.use("/api/v1/user", userRouter);

export default app;
