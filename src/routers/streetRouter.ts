import { Router } from "express";
import * as streetController from "../controllers/streetController";

const streetRouter = Router();

streetRouter.get("/streets", streetController.getStreets);

export default streetRouter;
