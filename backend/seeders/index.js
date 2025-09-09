import { seedAdmin } from "./adminSeeder.js";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function runSeeders() {
  console.log('Starting database seeding...');
  
  try {
    await seedAdmin();
    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Seeding failed:', error.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('Database connection closed');
  }
}

runSeeders();