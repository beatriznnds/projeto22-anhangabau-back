import { Request, Response } from "express";
import * as postService from "../services/postService";

export async function insert(req: Request, res: Response) {
  const post = req.body;
  const userId = res.locals.userId;
  await postService.insert(post, userId);
  res.status(201).send({ message: `Post created!` });
}

export async function getPosts(req: Request, res: Response) {
  const result = await postService.getPosts();
  res.status(200).send(result);
}
