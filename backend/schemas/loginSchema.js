import { z } from "zod";

export const loginSchema = z.object({
     email: z.string()
   .min(1, "Email is required") // campo obligatorio
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"), 
    password: z.string()
    .min(1, "Password is required"),
});

