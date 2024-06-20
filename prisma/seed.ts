import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { dataProducts } from "./data/products";

async function main() {
  console.log("Hello Prisma Seed");

  for (const product of dataProducts) {
    const newProductResult = await prisma.product.create({
      data: product,
    });
    console.log(`Product: ${newProductResult.name}`);
  }

  // for (const product of dataProducts) {
  //   const newProductResult = await prisma.product.upsert({
  //     where: { slug: product.slug },
  //     update: product,
  //     create: product,
  //   });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
