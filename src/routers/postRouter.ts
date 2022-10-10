import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidation";
import { newPost } from "../schemas/postType";
import * as postController from "../controllers/postController";

const postRouter = Router();

postRouter.post("/info", validateSchema(newPost), postController.insert);
postRouter.get("/info/:id", postController.getPosts);

export default postRouter;
