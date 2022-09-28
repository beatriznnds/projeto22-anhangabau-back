import Joi from "joi";
import { TypeStreetData } from "../types/streetTypes";

export const newStreet = Joi.object<TypeStreetData>({
  name: Joi.string().required(),
});
