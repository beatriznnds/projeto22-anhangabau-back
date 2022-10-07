// import app from "../../src/app";
// import supertest from "supertest";
// import { prisma } from "../../src/database";
// import * as userFactory from "../factories/userFactory";
// import * as postFactory from "../factories/postFactory";

// beforeEach(async () => {
//   await prisma.$executeRaw`TRUNCATE TABLE posts CASCADE;`;
// });

// describe("POST /info", () => {
//   it("should return 201 for valid params", async () => {
//     const token = await userFactory.createToken();
//     const post = await postFactory.createPost();
//     const result = await supertest(app)
//       .post("/info")
//       .set("Authorization", `Bearer ${token}`)
//       .send(post);
//     expect(result.status).toBe(201);
//   });
//   it("should return 401 when token is not provided", async () => {
//     const post = await postFactory.createPost();
//     const result = await supertest(app).post("/info").send(post);
//     expect(result.status).toBe(401);
//   });
//   it("should return 401 when imageUrl is already in use", async () => {
//     const token = await userFactory.createToken();
//     const post = await postFactory.createPost();

//     await supertest(app)
//       .post("/info")
//       .set("Authorization", `Bearer ${token}`)
//       .send(post);
//     const result = await supertest(app)
//       .post("/info")
//       .set("Authorization", `Bearer ${token}`)
//       .send({ ...post, caption: "Novo teste" });
//     expect(result.status).toBe(401);
//   });
//   it("should return 404 when coordinates are not found", async () => {
//     const token = await userFactory.createToken();
//     const post = await postFactory.createPostInvalidStreet();
//     const result = await supertest(app)
//       .post("/info")
//       .set("Authorization", `Bearer ${token}`)
//       .send(post);
//     expect(result.status).toBe(404);
//   });
// });

// afterAll(async () => {
//   await prisma.$disconnect();
// });
