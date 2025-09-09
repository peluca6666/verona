import categoryService from "../services/categoryService.js";

class CategoryController {
    async getCategories(_, res) {  
        try {
            const categories = await categoryService.getAllCategories();
            res.status(200).json({
                success: true,
                data: categories
            });
        } catch (error) {
            console.error('Error in getCategories:', error.message);
            res.status(500).json({
                success: false,
                message: 'Could not fetch categories'
            });
        }
    };

    async createCategory(req, res) {
    console.log('🚀 createCategory method called');
    console.log('📥 req.body:', req.body);
    console.log('📥 req.headers:', req.headers['content-type']);
    
    try {
            const result = await categoryService.createCategory(req.body);
            console.log('Category created successfully:', result.name);
            res.status(201).json({
                success: true,
                data: result,
                message: 'Category created successfully'
            });
        } catch (error) {
            console.error('Error in createCategory:', error.message);

            if (error.message.includes('required') || error.message.includes('invalid')) {
                return res.status(400).json({
                    success: false,
                    message: error.message
                })
            }

            res.status(500).json({
                success: false,
                message: 'Could not create category'
            });
        }
    }

    async updateCategory(req, res) {
        try {
            const result = await categoryService.updateCategory(req.params.id, req.body);
            console.log('Category updated successfully:', result.name);
            res.status(200).json({
                success: true,
                data: result,
                message: 'Category updated successfully'
            });
        } catch (error) {
            console.error('Error in updateCategory:', error.message);
            res.status(500).json({
                success: false,
                message: 'Could not update category'
            });
        }
    }

    async deleteCategory(req, res) {
        try {
            const result = await categoryService.deleteCategory(req.params.id);
            console.log('Category deleted successfully:', result.name);
            res.status(200).json({
                success: true,
                data: result,
                message: 'Category deleted successfully'
            });
        } catch (error) {
            console.error('Error in deleteCategory:', error.message);
            res.status(500).json({
                success: false,
                message: 'Could not delete category'
            });
        }
    }
}

export default new CategoryController();