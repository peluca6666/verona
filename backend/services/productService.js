import { PrismaClient } from "@prisma/client";
import { updateProductSchema, createProductSchema} from "../schemas/productSchemas.js";

const prisma = new PrismaClient();

class ProductService {
async getProductById(id) {
    try {
        const product = await prisma.product.findUnique({
            where: { 
                id: parseInt(id),
                is_active: true
            },
            include: {
                category: true
            }
        });

        if (!product) {
            throw new Error('Product not found');
        }

        return product;
    } catch (error) {
        console.error('Error fetching product by id:', error.message);
        throw error;
    }
}
    async getAllActiveProducts() {
        try {
            const products = await prisma.product.findMany({
                where: {
                    is_active: true
                }
            });
            console.log('Products amount:', products.length);
            return products;
        }
        catch (error) {
            console.error('Error fetching products:', error.message);
            throw new Error('Could not fetch products');
        }
    }

    async getAllProductsForAdmin() {
        try {
            const products = await prisma.product.findMany();
            return products;
        } catch (error) {
            console.error('Error fetching products for admin:', error.message);
            throw new Error('Could not fetch products for admin');
        }
    }

    async createProduct(productData) {
        try {
            //  zod validation
            const validatedData = createProductSchema.parse(productData);

            //  check category exists
            const categoryExists = await prisma.category.findUnique({
                where: { id: validatedData.category_id }
            });

            if (!categoryExists) {
                throw new Error('Category does not exist');
            }

            //  create product
            const newProduct = await prisma.product.create({
                data: {
                    name: validatedData.name.trim(),
                    price: validatedData.price,
                    description: validatedData.description || '',
                    slug: this.generateSlug(validatedData.name),
                    primary_image: validatedData.primary_image || '',
                    is_active: validatedData.is_active ?? true,
                    images: validatedData.images || [],
                    material: validatedData.material || '',
                    category_id: validatedData.category_id,
                    created_at: new Date(),
                    updated_at: new Date()
                }
            });

            return newProduct;

        } catch (error) {
            if (error.name === 'ZodError') {
                throw new Error(error.errors[0].message);
            }

            console.error('Error creating product:', error.message);
            throw error;
        }
    }

    generateSlug(name) {
        return name
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    }

    async updateProduct(id, productData) {
        try {
            // cHECK PRODUCT EXISTS
            const existingProduct = await prisma.product.findUnique({
                where: { id: parseInt(id) }
            });

            if (!existingProduct) {
                throw new Error('Product not found');
            }

            // validate with zod
            const validatedData = updateProductSchema.parse(productData);

            //  if category_id is being updated, check it exists
            if (validatedData.category_id) {
                const categoryExists = await prisma.category.findUnique({
                    where: { id: validatedData.category_id }
                });

                if (!categoryExists) {
                    throw new Error('Category does not exist');
                }
            }

            //  prepare data to update
            const dataToUpdate = { ...validatedData };

            //  if name is being updated, update slug too
            if (validatedData.name) {
                dataToUpdate.slug = this.generateSlug(validatedData.name);
            }

            //  always update updated_at
            dataToUpdate.updated_at = new Date();

            // update product 
            const updatedProduct = await prisma.product.update({
                where: { id: parseInt(id) },
                data: dataToUpdate,
                include: {
                    category: true
                }
            });

            return updatedProduct;

        } catch (error) {
            if (error.name === 'ZodError') {
                throw new Error(error.errors[0].message);
            }

            console.error('Error updating product:', error.message);
            throw error;
        }
    }

    async deleteProduct(id) {
    try {
        //  cHECK PRODUCT EXISTS
        const existingProduct = await prisma.product.findUnique({
            where: { id: parseInt(id) }
        });

        if (!existingProduct) {
            throw new Error('Product not found');
        }

        // check if already inactive
        if (!existingProduct.is_active) {
            throw new Error('Product is already inactive');
        }

        // SOFT DELETE 
        const deletedProduct = await prisma.product.update({
            where: { id: parseInt(id) },
            data: { 
                is_active: false,
                updated_at: new Date()
            }
        });

        console.log('Product soft deleted:', deletedProduct.name);
        return deletedProduct;

    } catch (error) {
        console.error('Error deleting product:', error.message);
        throw error;
    }
}

async getProductBySlug(slug) {
    try {
        const product = await prisma.product.findFirst({
            where: { 
                slug: slug,
                is_active: true 
            },
            include: {
                category: true
            }
        });
        
        if (!product) {
            throw new Error('Product not found');
        }
        
        return product;
    } catch (error) {
        console.error('Error fetching product by slug:', error.message);
        throw error;
    }
}

}

export default new ProductService();