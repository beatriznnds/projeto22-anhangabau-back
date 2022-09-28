import { Cordinates } from "@prisma/client";

export type TypeCoordinatesData = Omit<Cordinates, "id">;
