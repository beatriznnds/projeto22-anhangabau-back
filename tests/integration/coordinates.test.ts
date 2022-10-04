import app from "../../src/app";
import supertest from "supertest";
import { prisma } from "../../src/database";
import * as userFactory from "../factories/userFactory";
import * as coordinatesFactory from "../factories/coordinatesFactory";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE coordinates CASCADE;`;
});

describe("POST /coordinates", () => {
  it("should return 201 for valid params", async () => {
    const token = await userFactory.createToken();
    const coordinates = await coordinatesFactory.createCoordinate();
    const result = await supertest(app)
      .post("/coordinates")
      .set("Authorization", `Bearer ${token}`)
      .send(coordinates);
    expect(result.status).toEqual(201);
  });
  it("should return 404 when street isn't found", async () => {
    const token = await userFactory.createToken();
    const coordinates = await coordinatesFactory.createIncorrectCoordinate();
    const result = await supertest(app)
      .post("/coordinates")
      .set("Authorization", `Bearer ${token}`)
      .send(coordinates);
    expect(result.status).toEqual(404);
  });
  it("should return 422 for wrong body format", async () => {
    const token = await userFactory.createToken();
    const coordinates = await coordinatesFactory.wrongBodyCoordinate();
    const result = await supertest(app)
      .post("/coordinates")
      .set("Authorization", `Bearer ${token}`)
      .send(coordinates);
    expect(result.status).toEqual(422);
  });
  it("should return 401 when token isn't provided", async () => {
    const coordinates = await coordinatesFactory.createCoordinate();
    const result = await supertest(app).post("/coordinates").send(coordinates);
    expect(result.status).toBe(401);
  });
});

describe("GET /coordinates", () => {
  it("should return 200 and a list of coordinates", async () => {
    const token = await userFactory.createToken();
    const result = await supertest(app)
      .get("/coordinates")
      .set("Authorization", `Bearer ${token}`);
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Object);
  });
  it("should return 401 when token is not provided", async () => {
    const result = await supertest(app).get("/coordinates");
    expect(result.status).toBe(401);
  });
});
