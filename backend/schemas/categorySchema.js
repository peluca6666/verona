import { z } from "zod";

export const createCategorySchema = z.object({
    name: z.string()
        .min(1, "Category name is required")
        .max(255, "Category name too long"),
       
    
image: z.string()
        .url({ message: "Invalid image URL" })
        .optional(),
    
    is_active: z.boolean()
        .optional()
});

 export const updateCategorySchema = z.object ({
    name: z.string()
        .min(1, "Category name is required")
        .max(255, "Category name too long")
        .optional(),
    
    description: z.string()
        .max(1000, "Description too long")
        .optional(),
    
    is_active: z.boolean()
        .optional()
});


