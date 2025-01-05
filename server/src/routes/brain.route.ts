import express from "express";
import { userMiddleware } from "../middlewares/auth.middlware";
import { LinkModel } from "../models/link.model";
import { random } from "../utils/random";
import contentModel from "../models/content.model";
import { UserModel } from "../models/user.model";
const router = express.Router();

router.post("/share", userMiddleware, async (req, res) => {
  const { share } = req.body;
  if (share) {
    try {
      const existingLink = await LinkModel.findOne({
        // @ts-ignore
        userId: req.userId,
      });
      if (existingLink) {
        res.status(200).json({
          success: true,
          message: "Link already exists",
          data: existingLink.hash,
        });
        return;
      }
      const link = await LinkModel.create({
        // @ts-ignore
        userId: req.userId,
        hash: random(10),
      });
      res.json({ success: true, message: "Shared Link", data: link.hash });
    } catch (err) {
      res.status(500).json({ success: false, message: err });
    }
  } else {
    await LinkModel.deleteOne({
      //@ts-ignore
      userId: req.userId,
    });
    res.json({ success: true, message: "Removed sharebale Link" });
  }
});
router.get("/:shareLink", async (req, res) => {
  const { shareLink } = req.params;
  try {
    const link = await LinkModel.findOne({ hash: shareLink });
    if (!link || !link.hash) {
      res.status(411).json({ success: false, message: "Link not found" });
      return;
    }
    const content = await contentModel.find({ userId: link.userId });
    const username = await UserModel.findById(link.userId).select("username");
    res.json({
      success: true,
      data: {
        username,
        content,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

export { router };
