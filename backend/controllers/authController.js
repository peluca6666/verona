import AuthService from "../services/authService.js";

class AuthController {

static async login(req, res) {
    try {
        const { email, password } = req.body;
        const result = await AuthService.login(email, password);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error in AuthController.login:', error.message);
        
        if (error.message === 'ADMIN_NOT_FOUND' || error.message === 'INVALID_PASSWORD') {
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials'
            });
        }
        
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

}

export default AuthController;