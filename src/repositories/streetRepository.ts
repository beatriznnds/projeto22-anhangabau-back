import { prisma } from "../database";
import { TypeStreetData } from "../types/streetTypes";

export async function validStreet(streetId: number) {
  return await prisma.street.findFirst({ where: { id: streetId } });
}

export async function getStreets() {
  return await prisma.street.findMany();
}

export async function findByName(streetName: string) {
  return await prisma.street.findFirst({ where: { name: streetName } });
}

export async function insert(street: TypeStreetData) {
  return await prisma.street.create({ data: street });
}
