import { prisma } from "../database";

export async function validStreet(streetId: number) {
  return await prisma.street.findFirst({ where: { id: streetId } });
}

export async function getStreets() {
  return await prisma.street.findMany();
}

export async function findByName(name: string) {
  return await prisma.street.findFirst({ where: { name } });
}
