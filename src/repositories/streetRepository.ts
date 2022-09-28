import { prisma } from "../database";

export async function validStreet(streetId: number) {
  return await prisma.street.findFirst({ where: { id: streetId } });
}
