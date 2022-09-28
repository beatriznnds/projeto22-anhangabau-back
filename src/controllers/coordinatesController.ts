import { Request, Response } from "express";
import * as coordinatesService from "../services/coordinatesService";

export async function insert(req: Request, res: Response) {
  const coordinates = req.body;
  const { streetName } = req.body;
  await coordinatesService.insert(coordinates, streetName);
  res.status(201).send({ message: `Coordinates created!` });
}

export async function find(req: Request, res: Response) {
  const result = await coordinatesService.find();
  res.status(200).send(result);
}
