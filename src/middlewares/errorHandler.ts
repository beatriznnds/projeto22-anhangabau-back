import { Request, Response, NextFunction } from "express";
import * as errorType from "../types/errorTypes";

export default function errorHandler(
  error: errorType.Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  return res
    .status(error.status || 500)
    .send(error.message || "Internal server error");
  next();
}
