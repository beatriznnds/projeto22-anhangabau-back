import { Request, Response } from "express";
import * as postService from "../services/postService";

export async function insert(req: Request, res: Response) {
  const post = req.body;
  await postService.insert(post);
  res.status(201).send({ message: `Post created!` });
}

export async function getPosts(req: Request, res: Response) {
  const result = await postService.getPosts();
  res.status(200).send(result);
}
