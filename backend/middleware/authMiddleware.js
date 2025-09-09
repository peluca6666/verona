import JwtUtils from "../utils/jwtUtils.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const authMiddleware = async (req, res, next) => {
    try {
        // Get the token from the request headers
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token required'
            });
        }

        // Verify the token
        const { adminId } = JwtUtils.verifyToken(token);
        //search admin on the database
        const admin = await prisma.admin.findUnique({where : {id: adminId}});
        if (!admin) {
            return res.status(401).json({
                success: false,
                message: 'Admin not found'
            });
        }
        req.admin = admin;
        next();
    } catch (error) {
        console.error('Error in authMiddleware:', error.message);
        return res.status(401).json({
            success: false,
            message: 'Invalid token'
        });
    }
}

export default authMiddleware;

