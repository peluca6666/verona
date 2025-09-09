import bcrypt from 'bcryptJS';

class BcryptUtils {
    //Method for hashing password
static async hashPassword(password) {
        const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS);
        return await bcrypt.hash(password, saltRounds);
    }

   //Method for comparing password
    static async comparePassword(password, hashedPassword) {
        return await bcrypt.compare(password, hashedPassword);
    }
}

export default BcryptUtils;