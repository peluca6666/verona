import { PrismaClient } from "@prisma/client";
import { updateProductSchema, createProductSchema} from "../schemas/productSchemas.js";

const prisma = new PrismaClient();

class ProductService {
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
            //  VALIDAR CON ZOD
            const validatedData = createProductSchema.parse(productData);

            //  VERIFICAR QUE LA CATEGORÍA EXISTE
            const categoryExists = await prisma.category.findUnique({
                where: { id: validatedData.category_id }
            });

            if (!categoryExists) {
                throw new Error('Category does not exist');
            }

            //  CREAR PRODUCTO
            const newProduct = await prisma.product.create({
                data: {
                    name: validatedData.name.trim(),
                    price: validatedData.price,
                    description: validatedData.description || '',
                    slug: this.generateSlug(validatedData.name),
                    primary_image: validatedData.primary_image || '',
                    is_active: validatedData.is_active ?? true,
                    images: validatedData.images || [],
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
            // VERIFICAR QUE EL PRODUCTO EXISTE
            const existingProduct = await prisma.product.findUnique({
                where: { id: parseInt(id) }
            });

            if (!existingProduct) {
                throw new Error('Product not found');
            }

            // VALIDAR DATOS CON ZOD
            const validatedData = updateProductSchema.parse(productData);

            //  SI ENVÍAN CATEGORY_ID, VERIFICAR QUE EXISTE
            if (validatedData.category_id) {
                const categoryExists = await prisma.category.findUnique({
                    where: { id: validatedData.category_id }
                });

                if (!categoryExists) {
                    throw new Error('Category does not exist');
                }
            }

            //  PREPARAR DATOS PARA ACTUALIZAR
            const dataToUpdate = { ...validatedData };

            //  SI CAMBIA EL NOMBRE, GENERAR NUEVO SLUG
            if (validatedData.name) {
                dataToUpdate.slug = this.generateSlug(validatedData.name);
            }

            //  SIEMPRE ACTUALIZAR TIMESTAMP
            dataToUpdate.updated_at = new Date();

            // ACTUALIZAR EN BASE DE DATOS
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
        //  VERIFICAR QUE EL PRODUCTO EXISTE
        const existingProduct = await prisma.product.findUnique({
            where: { id: parseInt(id) }
        });

        if (!existingProduct) {
            throw new Error('Product not found');
        }

        // VERIFICAR QUE NO ESTÉ YA INACTIVO
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
}

export default new ProductService();