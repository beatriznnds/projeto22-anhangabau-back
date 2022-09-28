import { Router } from "express";
import postRouter from "./postRouter";
import userRouter from "./userRouter";
import streetRouter from "./streetRouter";

const router = Router();

router.use(postRouter);
router.use(userRouter);
router.use(streetRouter);

export default router;
