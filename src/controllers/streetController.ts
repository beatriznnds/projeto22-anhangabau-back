import { Request, Response } from "express";
import * as streetService from "../services/streetService";

export async function getStreets(req: Request, res: Response) {
  const result = await streetService.getStreets();
  res.status(200).send(result);
}

export async function insert(req: Request, res: Response) {
  const street = req.body;
  await streetService.insert(street);
  res.status(201).send({ message: `Street created!` });
}
