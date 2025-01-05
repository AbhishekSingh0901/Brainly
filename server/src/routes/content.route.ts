import express from "express";
import contentModel from "../models/content.model";
import { userMiddleware } from "../middlewares/auth.middlware";

const router = express.Router();

router.get("/content", userMiddleware, async (req, res) => {
  // @ts-ignore
  const userId = req.userId;
  const content = await contentModel.find({ userId }).populate("userId");
  res.status(200).json({ success: true, data: content });
});
router.post("/content", userMiddleware, async (req, res) => {
  const { link, type, title, tags } = req.body;

  try {
    const content = await contentModel.create({
      link,
      type,
      title,
      tags,
      // @ts-ignore
      userId: req.userId,
    });

    res.status(201).json({
      success: true,
      data: content,
      message: "Content added successfully",
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
});
router.delete("/content", userMiddleware, (req, res) => {
  const contentId = req.body.contentId;
  contentModel
    .deleteMany({
      contentId,
      // @ts-ignore
      userId: req.userId,
    })
    .then(() => {
      res.status(200).json({ success: true, message: "Content deleted" });
    })
    .catch((err) => {
      res.status(400).json({ success: false, message: err });
    });
});

export { router };
