import { Router } from "express";
import * as streetController from "../controllers/streetController";
import { newStreet } from "../schemas/streetTypes";
import { validateSchema } from "../middlewares/schemaValidation";

const streetRouter = Router();

streetRouter.get("/streets", streetController.getStreets);
streetRouter.post(
  "/streets",
  validateSchema(newStreet),
  streetController.insert
);

export default streetRouter;
