import * as coordinatesRepo from "../repositories/coordinatesRepository";
import * as streetsRepo from "../repositories/streetRepository";
import { TypeCoordinatesData } from "../types/coordinatesTypes";

export async function insert(
  coordinates: TypeCoordinatesData,
  streetName: string
) {
  const validStreet = await streetsRepo.findByName(streetName);
  if (!validStreet) {
    throw { type: "Not Found", message: `Street not found!` };
  }
  const newCoordinates = {
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
    streetId: validStreet.id,
  };
  await coordinatesRepo.insert(newCoordinates);
}
