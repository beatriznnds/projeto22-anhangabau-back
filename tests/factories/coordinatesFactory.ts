import { faker } from "@faker-js/faker";

export async function createCoordinate() {
  return {
    latitude: "-10.2456",
    longitude: "-20.3456",
    streetName: "Rio Anhangabaú",
  };
}

export async function createIncorrectCoordinate() {
  return {
    latitude: "-10.2456",
    longitude: "-20.3456",
    streetName: faker.lorem.word(),
  };
}

export async function wrongBodyCoordinate() {
  return {
    latitude: "-10.2456",
    longitude: "-20.3456",
    streetName: 5,
  };
}
