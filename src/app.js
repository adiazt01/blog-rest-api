import express from "express";

import { PrismaClient } from '@prisma/client'
import { postRouter } from "./routes/post.route";

export const prisma = new PrismaClient()

export const app = express();

app.use(express.json());

app.use("/posts", postRouter);