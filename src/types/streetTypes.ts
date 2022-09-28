import { Street } from "@prisma/client";

export type TypeStreetData = Omit<Street, "id">;
