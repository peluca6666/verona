import { PrismaClient } from '@prisma/client';
import BcryptUtils from '../utils/bcryptUtils.js';
import JwtUtils from '../utils/jwtUtils.js';
import { loginSchema } from '../schemas/loginSchema.js';


const prisma = new PrismaClient();

class AuthService {

    //Login method
    static async login(email, password) {
        try {
            //validate data from zod 
            const validatedData = loginSchema.parse({ email, password });
            //search admin by id
            const admin = await prisma.admin.findUnique({
                where: { email: validatedData.email }
            })
            //if admin not found
            if (!admin) {
                throw new Error('ADMIN_NOT_FOUND');
            }
            //check password 
            const isPasswordValid = await BcryptUtils.comparePassword(validatedData.password, admin.password);
            if (!isPasswordValid) {
                throw new Error('WRONG_PASSWORD');
            }

            //generate token 
            const token = JwtUtils.generateToken(admin.id);

            return {
                admin: {
                    id: admin.id,
                    email: admin.email,
                },
                token: token
            };
        } catch (error) {
            console.error('Error in AuthService.login:', error.message);
            throw error;
        }
    }
}

    export default AuthService;

