import { Router } from "express";
import userRouter from "./userRouter";
import testRouter from "./testRouter";
import postRouter from "./postRouter";
import streetRouter from "./streetRouter";
import coordinatesRouter from "./coordinatesRouter";
import { checkValidToken } from "../middlewares/tokenValidation";

const router = Router();

router.use(userRouter);
router.use(testRouter);
router.use(checkValidToken);
router.use(streetRouter);
router.use(postRouter);
router.use(coordinatesRouter);

export default router;
