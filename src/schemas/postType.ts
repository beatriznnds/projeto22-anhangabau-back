import Joi from "joi";
import { TypePostData } from "../types/postTypes";

export const newPost = Joi.object<TypePostData>({
  imageUrl: Joi.string()
    .required()
    .regex(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/),
  caption: Joi.string().required(),
  streetId: Joi.number().required(),
  userId: Joi.number().required(),
});
