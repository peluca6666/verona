import { Category, Product } from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '');
const API_URL = `${API_BASE}/api`;
const AUTH_URL = `${API_BASE}/auth`;

// function to make api requests
export async function apiRequest<T>(endpoint: string): Promise<T> {
    const url = `${API_URL}${endpoint}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return response.json();
}

// function to get categories
export async function getCategories() {
    const response = await apiRequest<{ success: boolean, data: Category[] }>('/categories');
    return response.data;
}

// function to get products
export async function getProducts() {
    const responnse = await apiRequest<{ success: boolean, data: Product[] }>('/products');
    return responnse.data;
}

// function to login
export async function login(email: string, password: string) {
    const response = await fetch(`${AUTH_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    if (!response.ok) {
        throw new Error('Credenciales incorrectas');
    }

    const data = await response.json();
    saveToken(data.token);
    return data;
}

//function to save token on localStorage
export function saveToken(token: string) {
    localStorage.setItem('verona_token', token);
}
//function to get token from localStorage
export function getToken(): string | null {
    return localStorage.getItem('verona_token');
}