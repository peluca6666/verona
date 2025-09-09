import productService from "../services/productService.js";

class ProductController {
    async getProducts(_, res) {
        try {
            const result = await productService.getAllActiveProducts();  
            console.log('Active products fetched:', result.length);    
            res.status(200).json({
                success: true,
                data: result
            });
        } catch (error) {
            console.error('Error in getProducts:', error.message);
            res.status(500).json({ 
                success: false, 
                message: 'Could not fetch products' 
            });
        }
    }

    async getProductsForAdmin(_, res) {
        try {
            const result = await productService.getAllProductsForAdmin();  
            console.log('All products fetched for admin:', result.length); 
            res.status(200).json({
                success: true,
                data: result
            });
        } catch (error) {
            console.error('Error in getProductsForAdmin:', error.message);
            res.status(500).json({ 
                success: false, 
                message: 'Could not fetch products for admin' 
            });
        }
    }

    async createProduct(req, res) {
        try {
            const result = await productService.createProduct(req.body);  
            console.log('Product created successfully:', result.name);    
            res.status(201).json({
                success: true,
                data: result,
                message: 'Product created successfully'
            });
        } catch (error) {
            console.error('Error in createProduct:', error.message);
            
            // Manejo específico de errores
            if (error.message.includes('required') || 
                error.message.includes('does not exist') ||
                error.message.includes('Valid')) {
                return res.status(400).json({ 
                    success: false, 
                    message: error.message 
                });
            }
            
            res.status(500).json({ 
                success: false, 
                message: 'Could not create product' 
            });
        }
    }

    async updateProduct (req, res) {
        try{
            const result = await productService.updateProduct(req.params.id, req.body);  
            console.log('Product updated successfully:', result.name);    
            res.status(200).json({
                success: true,
                data: result,
                message: 'Product updated successfully'
            });
        } catch (error) {
            console.error('Error in updateProduct:', error.message);
            res.status(500).json({ 
                success: false, 
                message: 'Could not update product' 
            });
        }
    }
    
    async deleteProduct (req, res) {
        try{
            const result = await productService.deleteProduct(req.params.id);  
            console.log('Product deleted successfully:', result.name);    
            res.status(200).json({
                success: true,
                data: result,
                message: 'Product deleted successfully'
            });
        } catch (error) {
            console.error('Error in deleteProduct:', error.message);
            res.status(500).json({ 
                success: false, 
                message: 'Could not delete product' 
            });
        }
    }

}

export default new ProductController();