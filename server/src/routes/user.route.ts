import express from "express";

import { userMiddleware } from "../middlewares/auth.middlware";
import { login, logout, signup } from "../controllers/user.controller";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", userMiddleware, logout);

export { router };
