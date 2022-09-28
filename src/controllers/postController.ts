import { Request, Response } from "express";
import * as postService from "../services/postService";

export async function insert(req: Request, res: Response) {
  const post = req.body;
  await postService.insert(post);
  res.status(201).send({ message: `Post created!` });
}
