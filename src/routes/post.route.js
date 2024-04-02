import { Router } from "express";

export const postRouter = Router();

postRouter.get("/", getAllPosts);
postRouter.post("/:id", getPostById);