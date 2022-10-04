import { faker } from "@faker-js/faker";

export async function createStreet() {
  return {
    name: faker.lorem.word(),
  };
}

export async function createIncorrectStreet() {
  return {
    name: 1234,
  };
}
