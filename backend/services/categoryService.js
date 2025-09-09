import { PrismaClient } from "@prisma/client";
import { createCategorySchema, updateCategorySchema } from "../schemas/categorySchema.js";

const prisma = new PrismaClient();

class CategoryService {

    async getAllCategories() {
        try {
            const categories = await prisma.category.findMany({
                where: { is_active: true }
            });
            console.log('Categories amount:', categories.length);
            return categories;
        } catch (error) {
            console.error('Error fetching categories:', error.message);
            throw new Error('Could not fetch categories');
        }
    }

    async createCategory(categoryData) {
        try {
            const validatedData = createCategorySchema.parse(categoryData);

            const newCategory = await prisma.category.create({
                data: {
                    name: validatedData.name.trim(),
                    image: validatedData.image || '',
                    slug: this.generateSlug(validatedData.name),
                    is_active: validatedData.is_active ?? true,
                    created_at: new Date(),
                    updated_at: new Date()
                }
            });

            return newCategory;

        } catch (error) {
            if (error.name === 'ZodError') {
                throw new Error(error.errors[0].message);
            }
            console.error('Error creating category:', error.message);
            throw error;
        }
    }

    async updateCategory(id, categoryData) {
        try {
            const validatedData = updateCategorySchema.parse(categoryData);

            const updatedCategory = await prisma.category.update({
                where: { id: parseInt(id) },
                data: {
                    name: validatedData.name.trim(),
                    image: validatedData.image || '',
                    slug: this.generateSlug(validatedData.name),
                    is_active: validatedData.is_active ?? true,
                    updated_at: new Date()
                }
            });

            return updatedCategory;
        } catch (error) {
            if (error.name === 'ZodError') {
                throw new Error(error.errors[0].message);
            }
            console.error('Error updating category:', error.message);
            throw error;
        }
    }

    async deleteCategory(id) {
        try { 
            const deleteCategory = await prisma.category.update({
                where: { id: parseInt(id) },
                data: {
                    is_active: false,
                    updated_at: new Date()
                }
            });
            return deleteCategory;
        } catch (error) {
            console.error('Error deleting category:', error.message);
            throw new Error('Could not delete category', {
                cause: error
            })
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
}

export default new CategoryService();