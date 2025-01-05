import { Request, Response } from "express";
import contentModel from "../models/content.model";

export const getContent = async (req: Request, res: Response) => {
  // @ts-ignore
  const userId = req.userId;
  const content = await contentModel.find({ userId }).populate("userId");
  res.status(200).json({ success: true, data: content });
};

export const createContent = async (req: Request, res: Response) => {
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
};

export const deleteContent = async (req: Request, res: Response) => {
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
};
