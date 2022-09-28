import { prisma } from "../database";
import { TypeCoordinatesData } from "../types/coordinatesTypes";

export async function insert(coordinates: TypeCoordinatesData) {
  return await prisma.cordinates.create({ data: coordinates });
}
