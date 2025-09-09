import { z } from "zod";

//Schema para CREAR productos
export const createProductSchema = z.object({
  name: z.string()
    .min(1, "Product name is required")
    .max(255, "Product name too long"),
  
  price: z.number()
    .positive("Price must be positive")
    .max(999999, "Price too high"),
  
  category_id: z.number()
    .int("Category ID must be an integer")
    .positive("Valid category ID required"),
  
  description: z.string()
    .max(1000, "Description too long")
    .optional(),
  
  primary_image: z.string()
    .url({ message: "Invalid image URL" })
    .optional(),
  
  images: z.array(z.string().url())
    .optional(),
  
  is_active: z.boolean()
    .optional()
});

// Schema para ACTUALIZAR productos (todos opcionales)
export const updateProductSchema = z.object({
  name: z.string()
    .min(1, "Product name cannot be empty")
    .max(255, "Product name too long")
    .optional(),
  
  price: z.number()
    .positive("Price must be positive")
    .max(999999, "Price too high")
    .optional(),
  
  category_id: z.number()
    .int("Category ID must be an integer")
    .positive("Valid category ID required")
    .optional(),
  
  description: z.string()
    .max(1000, "Description too long")
    .optional(),
  
  primary_image: z.string()
    .url("Invalid image URL")
    .optional(),
  
  images: z.array(z.string().url())
    .optional(),
  
  is_active: z.boolean()
    .optional()
});

