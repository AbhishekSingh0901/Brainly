import express from "express";
import contentModel from "../models/content.model";
import { userMiddleware } from "../middlewares/auth.middlware";
import {
  createContent,
  deleteContent,
  getContent,
} from "../controllers/content.controller";

const router = express.Router();

router.get("/content", userMiddleware, getContent);
router.post("/content", userMiddleware, createContent);
router.delete("/content", userMiddleware, deleteContent);

export { router };
