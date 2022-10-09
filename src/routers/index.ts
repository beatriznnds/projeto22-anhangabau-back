import { Router } from "express";
import postRouter from "./postRouter";
import userRouter from "./userRouter";
import streetRouter from "./streetRouter";
import coordinatesRouter from "./coordinatesRouter";
import testRouter from "./testRouter";

const router = Router();

router.use(testRouter);
router.use(userRouter);
router.use(streetRouter);
router.use(postRouter);
router.use(coordinatesRouter);

export default router;
