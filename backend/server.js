import Express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import productRouter from "./routes/productRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
import authRouter from "./routes/authRoutes.js";

const prisma = new PrismaClient();
const app = Express();
const PORT = 5000;

app.use(Express.json());
app.use(cors());

app.use('/api/products', productRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/auth', authRouter);

async function testPrismaConnection() {
  try {
    console.log('Testing Prisma connection...');
    
    const productCount = await prisma.product.count();
    console.log(`Succesufully connected to the database. `);
    
    
  } catch (error) {
    console.error('Error connecting toPrisma:', error.message);
  }
}

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  await testPrismaConnection();
});
