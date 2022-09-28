import { Request, Response } from "express";
import * as streetService from "../services/streetService";

export async function getStreets(req: Request, res: Response) {
  const result = await streetService.getStreets();
  res.status(200).send(result);
}
