import { faker } from "@faker-js/faker";

export async function createPost() {
  return {
    imageUrl: faker.image.imageUrl() + ".jpg",
    caption: faker.lorem.words(15),
    streetId: 1,
  };
}

export async function createPostInvalidStreet() {
  return {
    imageUrl: faker.image.imageUrl() + ".jpg",
    caption: faker.lorem.words(15),
    streetId: 100,
  };
}
