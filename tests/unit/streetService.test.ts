/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { jest } from "@jest/globals";
import { Street } from "@prisma/client";
import * as streetRepo from "../../src/repositories/streetRepository";
import * as streetService from "../../src/services/streetService";
import * as streetFactory from "../factories/streetFactory";

beforeEach(async () => {
  jest.resetAllMocks();
});

describe("GET /streets", () => {
  it("should get streets successfully", async () => {
    jest.spyOn(streetRepo, "getStreets").mockResolvedValueOnce([
      {
        id: 1,
        name: "Rio Anhangabaú",
        city: ["São Paulo"],
      },
    ]);
    const result = await streetService.getStreets();
    expect(streetRepo.getStreets).toBeCalled();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
  });
});

describe("POST /streets", () => {
  it("should create street successfully", async () => {
    jest
      .spyOn(streetRepo, "findByName")
      .mockImplementationOnce(async () => null);
    jest.spyOn(streetRepo, "insert").mockImplementationOnce((): any => {});
    const street = await streetFactory.createStreet();
    await streetService.insert({ ...street, city: ["São Paulo"] });
    expect(streetRepo.findByName).toBeCalled();
    expect(streetRepo.insert).toBeCalled();
  });
  it("should throw unauthorized error when street already exists", async () => {
    jest
      .spyOn(streetRepo, "findByName")
      .mockImplementationOnce(async (): Promise<Street> => {
        return {
          id: 1,
          name: "Rio Anhangabaú",
          city: ["São Paulo"],
        };
      });
    const result = streetService.insert({
      name: "Rio Anhangabaú",
      city: ["São Paulo"],
    });
    expect(result).rejects.toEqual({
      type: "Unauthorized",
      message: "This street is already registered!",
    });
  });
});
