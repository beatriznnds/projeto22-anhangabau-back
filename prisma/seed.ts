/* eslint-disable no-console */
import { prisma } from "../src/database";

async function main() {
  const streets = [
    {
      name: "Rio Anhangabaú",
    },
    {
      name: "Largo da Memória",
    },
    {
      name: "Viaduto do Chá",
    },
    {
      name: "Parque Anhangabaú",
    },
    {
      name: "Largo do Paissandú",
    },
    {
      name: "Rua das Quitandeiras",
    },
    {
      name: "Chafariz da Misericórdia",
    },
    {
      name: "Rua das Lavadeiras",
    },
  ];

  await prisma.street.createMany({
    data: streets,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
