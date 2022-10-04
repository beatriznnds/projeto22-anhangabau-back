import app from "../../src/app";
import supertest from "supertest";
import { prisma } from "../../src/database";
import * as userFactory from "../factories/userFactory";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users CASCADE;`;
});

describe(`POST /signup`, () => {
  it(`should return a status 201 for valid params`, async () => {
    const user = await userFactory.createUser({});
    const result = await supertest(app)
      .post("/signup")
      .send({ ...user });
    const createdUser = await prisma.user.findUnique({
      where: { email: user.email },
    });
    expect(result.status).toEqual(201);
    expect(createdUser).not.toBeNull();
  });

  it(`should return 409 when email is already in use`, async () => {
    const { name, email, password } = await userFactory.createUser({
      persist: true,
    });
    const result = await supertest(app)
      .post("/signup")
      .send({ name, email, password });
    expect(result.status).toEqual(409);
  });
});

describe(`POST /login`, () => {
  it(`should return a status 201 and token for valid params`, async () => {
    const { email, password } = await userFactory.createUser({ persist: true });
    const result = await supertest(app)
      .post("/login")
      .send({ email, password });
    expect(result.status).toEqual(200);
    expect(result.text).not.toBeNull();
  });

  it(`should return 401 when credentials don't match`, async () => {
    const user = await userFactory.createUser({ persist: true });
    const wrongUser = await userFactory.createUser({});
    const result = await supertest(app)
      .post("/login")
      .send({
        ...user,
        password: wrongUser.password,
        confirmPassword: user.password,
      });
    expect(result.status).toEqual(401);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
