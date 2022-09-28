import Joi, { PartialSchemaMap } from "joi";

type TypeCoordinatesData = PartialSchemaMap;

export const newCoordinates = Joi.object<TypeCoordinatesData>({
  latitude: Joi.string().required(),
  longitude: Joi.string().required(),
  streetName: Joi.string().required(),
});
