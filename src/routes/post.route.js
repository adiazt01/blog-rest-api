import { Router } from "express";
import { createPost, getAllPosts } from "../controllers/post.controller.js";

export const postRouter = Router();

postRouter.get("/", getAllPosts);
postRouter.post("/", createPost);