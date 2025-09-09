import { Router } from "express";
import ProductController from "../controllers/productController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.get('/' , ProductController.getProducts);
router.get('/admin', authMiddleware,ProductController.getProductsForAdmin);
router.post('/admin', authMiddleware, ProductController.createProduct);
router.put('/admin/:id', authMiddleware, ProductController.updateProduct);
router.delete('/admin/:id', authMiddleware, ProductController.deleteProduct);

export default router;