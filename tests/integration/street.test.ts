import app from "../../src/app";
import supertest from "supertest";
import { prisma } from "../../src/database";
import * as userFactory from "../factories/userFactory";
import * as streetFactory from "../factories/streetFactory";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE posts;`;
});

describe("POST /streets", () => {
  it("should return 201 for valid params", async () => {
    const token = await userFactory.createToken();
    const street = await streetFactory.createStreet();
    const result = await supertest(app)
      .post("/streets")
      .set("Authorization", `Bearer ${token}`)
      .send(street);
    expect(result.status).toBe(201);
  });
  it("should return 422 when body format is wrong", async () => {
    const token = await userFactory.createToken();
    const street = await streetFactory.createIncorrectStreet();
    const result = await supertest(app)
      .post("/streets")
      .set("Authorization", `Bearer ${token}`)
      .send(street);
    expect(result.status).toBe(422);
  });
});

describe("GET /streets", () => {
  it("should return 200 and a list of streets", async () => {
    const token = await userFactory.createToken();
    const result = await supertest(app)
      .get("/streets")
      .set("Authorization", `Bearer ${token}`);
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Object);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
