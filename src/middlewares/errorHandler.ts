import { Request, Response, NextFunction } from "express";
import * as ErrorTypes from "../types/errorTypes";

export default function errorHandler(
  error: ErrorTypes.Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.type === "Not Found") {
    return res.status(404).send({ message: error.message });
  }
  if (error.type === "Conflict") {
    return res.status(409).send({ message: error.message });
  }
  if (error.type === "Unauthorized") {
    return res.status(401).send({ message: error.message });
  }
  if (error.type === "ValidationError") {
    return res.status(422).send({ message: error.message });
  }
  // eslint-disable-next-line no-console
  console.log(error);
  res.sendStatus(500);
  next();
}
