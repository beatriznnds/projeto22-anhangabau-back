import { Request, Response } from "express";
import * as userService from "../services/userService";

export async function insert(req: Request, res: Response) {
  const user = req.body;
  await userService.insert(user);
  res.status(201).send({ message: `User created!` });
}

export async function login(req: Request, res: Response) {
  const user = req.body;
  const token = await userService.login(user);
  res.status(200).send({ token });
}
