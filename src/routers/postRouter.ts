import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidation";
import { newPost } from "../schemas/postType";
import * as postController from "../controllers/postController";
import { checkValidToken } from "../middlewares/tokenValidation";

const postRouter = Router();

postRouter.use(checkValidToken);
postRouter.post("/info", validateSchema(newPost), postController.insert);
postRouter.get("/info", postController.getPosts);

export default postRouter;
