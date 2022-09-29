import { prisma } from "../database";
import { TypeCoordinatesData } from "../types/coordinatesTypes";

export async function insert(coordinates: TypeCoordinatesData) {
  return await prisma.cordinates.create({ data: coordinates });
}

export async function find() {
  return await prisma.cordinates.findMany({
    select: {
      id: true,
      latitude: true,
      longitude: true,
      street: { select: { id: true, name: true } },
    },
  });
}

export async function findByStreet(streetId: number) {
  const result = await prisma.cordinates.findFirst({ where: { streetId } });
  return result;
}
