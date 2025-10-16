import { Category, Product } from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '');
const API_URL = `${API_BASE}/api`;
const AUTH_URL = `${API_BASE}/api/auth`; 

// Core API Utility

export async function apiRequest<T>(endpoint: string): Promise<T> {
    const url = `${API_URL}${endpoint}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return response.json();
}

// Auth Utilities

export async function login(email: string, password: string) {
    const response = await fetch(`${AUTH_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    
    if (!response.ok) {
        throw new Error('Incorrect credentials');
    }

    const data = await response.json();
    saveToken(data.token);
    return data;
}

export function saveToken(token: string) {
    localStorage.setItem('verona_token', token);
}

export function getToken(): string | null {
    return typeof window !== 'undefined' ? localStorage.getItem('verona_token') : null;
}

// Public Access (Products & Categories)

export async function getCategories(): Promise<Category[]> {
    const response = await apiRequest<{ success: boolean, data: Category[] }>('/categories');
    return response.data;
}

export async function getProducts(): Promise<Product[]> {
    const responnse = await apiRequest<{ success: boolean, data: Product[] }>('/products');
    return responnse.data;
}

export async function getProductById(id: string): Promise<Product> {
    const response = await apiRequest<{ success: boolean, data: Product }>(`/products/${id}`);
    return response.data;
}


// Admin: Products Management


export async function getProductsForAdmin(): Promise<{ data: Product[] }> {
    const token = getToken();
    const response = await fetch(`${API_URL}/products/admin`, {
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    
    if (!response.ok) {
        throw new Error('Error fetching products for admin');
    }
    
    return response.json();
}

export async function createProduct(data: any) {
    const token = getToken();
    const response = await fetch(`${API_URL}/products/admin`, {
        method: 'POST',
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error creating product');
    }
    
    return response.json();
}

export async function updateProduct(id: number, data: any) {
    const token = getToken();
    const response = await fetch(`${API_URL}/products/admin/${id}`, {
        method: 'PUT',
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error updating product');
    }
    
    return response.json();
}

export async function deleteProduct(id: number) {
    const token = getToken();
    const response = await fetch(`${API_URL}/products/admin/${id}`, {
        method: 'DELETE',
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    
    if (!response.ok) {
        throw new Error('Error deleting product');
    }
    
    return response.json();
}


// Admin: Categories Management


export async function getCategoriesForAdmin(): Promise<Category[]> {
    const token = getToken();
    const response = await fetch(`${API_URL}/categories/admin`, {
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Error fetching categories for admin');
    }

    const data = await response.json();
    return data;
}

export async function createCategory(data: { name: string, image?: string, is_active?: boolean }): Promise<Category> {
    const token = getToken();
    const response = await fetch(`${API_URL}/categories/admin`, {
        method: 'POST',
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error creating category');
    }
    
    return response.json();
}

export async function updateCategory(id: number, data: Partial<Category>): Promise<Category> {
    const token = getToken();
    const response = await fetch(`${API_URL}/categories/admin/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update category');
    }
    return response.json();
}

export async function toggleCategoryActive(id: number, is_active: boolean): Promise<Category> {
    return updateCategory(id, { is_active });
}