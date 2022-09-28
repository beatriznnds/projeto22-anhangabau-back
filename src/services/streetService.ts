import * as streetRepo from "../repositories/streetRepository";

export async function getStreets() {
  const result = await streetRepo.getStreets();
  return result;
}
