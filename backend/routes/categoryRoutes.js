import {Router} from "express";
import CategoryController from "../controllers/categoryController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.get('/' , CategoryController.getCategories);
router.post('/admin', authMiddleware, CategoryController.createCategory);
router.put('/admin/:id', authMiddleware, CategoryController.updateCategory);
router.delete('/admin/:id', authMiddleware, CategoryController.deleteCategory);

export default router;