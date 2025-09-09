import jwt from 'jsonwebtoken';

class JwtUtils {
     //Method for generating JWT token
        static generateToken(adminId){
            const payload = {adminId};
            const secret = process.env.JWT_SECRET;
            const options = {
                expiresIn : process.env.JWT_EXPIRES_IN
            };
         return jwt.sign(payload, secret, options);
        }
    
        //Method for verifying JWT token
        static verifyToken (token){
           const secret = process.env.JWT_SECRET;
           return jwt.verify(token, secret); 
        }
}

export default JwtUtils