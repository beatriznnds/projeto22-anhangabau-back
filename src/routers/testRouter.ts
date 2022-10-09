import { Router } from "express";
import * as testController from "../controllers/testController";

const testRouter = Router();

testRouter.post("/reset", testController.reset);

export default testRouter;
