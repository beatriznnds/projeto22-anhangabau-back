import { Router } from "express";
import postRouter from "./postRouter";
import userRouter from "./userRouter";

const router = Router();

router.use(postRouter);
router.use(userRouter);

export default router;
