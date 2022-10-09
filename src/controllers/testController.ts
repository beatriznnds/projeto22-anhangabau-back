import { Request, Response } from "express";
import * as userRepo from "../repositories/userRepository";

export async function reset(req: Request, res: Response) {
  await userRepo.reset();
  res.sendStatus(200);
}
