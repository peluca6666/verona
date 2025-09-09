export interface Product {
  id: number;
  category_id: number;
  name: string;
  price: number;
  description: string | null;
  slug: string;
  primary_image: string | null;
  images: string[] | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name: string;
  image: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Admin {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface LoginResponse {
  admin: Admin;
  token: string;
}