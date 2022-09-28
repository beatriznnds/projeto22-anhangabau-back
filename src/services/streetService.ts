import * as streetRepo from "../repositories/streetRepository";
import { TypeStreetData } from "../types/streetTypes";

export async function getStreets() {
  const result = await streetRepo.getStreets();
  return result;
}

export async function insert(street: TypeStreetData) {
  const validStreet = await streetRepo.findByName(street.name);
  if (validStreet) {
    throw {
      type: "Unauthorized",
      message: "This street is already registered!",
    };
  }
  await streetRepo.insert(street);
}
