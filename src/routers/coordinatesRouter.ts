import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidation";
import { newCoordinates } from "../schemas/coordinatesTypes";
import * as coordinatesController from "../controllers/coordinatesController";

const coordinatesRouter = Router();

coordinatesRouter.post(
  "/coordinates",
  validateSchema(newCoordinates),
  coordinatesController.insert
);

export default coordinatesRouter;
