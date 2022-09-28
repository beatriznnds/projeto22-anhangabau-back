import { Router } from "express";
import postRouter from "./postRouter";

const router = Router();

router.use(postRouter);

export default router;
