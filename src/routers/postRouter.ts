import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidation";
import { newPost } from "../schemas/postType";
import * as postController from "../controllers/postController";

const postRouter = Router();
postRouter.post("/addinfo", validateSchema(newPost), postController.insert);

export default postRouter;
