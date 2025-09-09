import { PrismaClient } from "@prisma/client";
import BcryptUtils from "../utils/bcryptUtils.js";

const prisma = new PrismaClient();

export async function seedAdmin () {
    try{
        console.log('Checking if admin exists...');
        const existingAdmin = await prisma.admin.findFirst();

        if (existingAdmin) {
            console.log('Admin already exists. Skipping seed...');
            return;
        }

        console.log('Creating admin...');

        const email = process.env.ADMIN_EMAIL;
        const password = process.env.ADMIN_PASSWORD;

   const hashedPassword = await BcryptUtils.hashPassword(password);

        const admin = await prisma.admin.create({
            data: {
                email: email,
                password: hashedPassword
            }
        });

        console.log('Admin created!');
        console.log('Email:', admin.email);
        console.log('ID:', admin.id);
    } catch (error) {
        console.error('Error seeding admin:', error.message);
        throw error;
    }
}