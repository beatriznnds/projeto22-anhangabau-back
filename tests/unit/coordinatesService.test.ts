/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as coordinatesService from "../../src/services/coordinatesService";
import * as coordinatesRepo from "../../src/repositories/coordinatesRepository";
import { jest } from "@jest/globals";
import * as coordinatesFactory from "../factories/coordinatesFactory";
import * as streetRepo from "../../src/repositories/streetRepository";
import { Street } from "@prisma/client";

beforeEach(async () => {
  jest.resetAllMocks();
});

describe("POST /coordinates", () => {
  it("should post new coordinate successfully", async () => {
    jest
      .spyOn(streetRepo, "findByName")
      .mockImplementationOnce(async (): Promise<Street> => {
        return {
          id: 1,
          name: "Rio Anhangabaú",
          city: ["São Paulo"],
        };
      });
    jest.spyOn(coordinatesRepo, "insert").mockImplementationOnce((): any => {});
    const coordinate = await coordinatesFactory.createCoordinate();
    await coordinatesService.insert(
      { ...coordinate, streetId: 1 },
      "Rio Anhangabaú"
    );
    expect(streetRepo.findByName).toBeCalled();
    expect(coordinatesRepo.insert).toBeCalled();
  });
  it("should throw not found error when street doesn't exist", async () => {
    jest
      .spyOn(streetRepo, "findByName")
      .mockImplementationOnce(async () => null);
    jest.spyOn(coordinatesRepo, "insert").mockImplementationOnce((): any => {});
    const coordinate = await coordinatesFactory.createCoordinate();
    const result = coordinatesService.insert(
      {
        ...coordinate,
        streetId: 50,
      },
      "Rua do erro"
    );
    expect(result).rejects.toEqual({
      type: "Not Found",
      message: `Street not found!`,
    });
  });
});

describe("GET /coordinates", () => {
  it("should get coordinates successfully", async () => {
    jest.spyOn(coordinatesRepo, "find").mockResolvedValueOnce([
      {
        id: 1,
        latitude: "-12.346",
        longitude: "40.3578",
        street: {
          id: 3,
          name: "Centro Cultural Banco do Brasil",
        },
      },
    ]);
    const result = await coordinatesService.find();
    expect(coordinatesRepo.find).toBeCalled();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
  });
});
