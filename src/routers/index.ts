import { Router } from "express";
import postRouter from "./postRouter";
import userRouter from "./userRouter";
import streetRouter from "./streetRouter";

const router = Router();

router.use(userRouter);
router.use(streetRouter);
router.use(postRouter);

export default router;
