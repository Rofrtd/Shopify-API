interface Variation {
    brand?: string,
    color?: string,
    size?: string,
    price: number,
    stock: number,
    discount?: number,
    images: string[],
}

export interface ProductRequest {
    name: string,
    category?: string,
    description?: string,
    variations: Variation[],
}

export interface Product {
    name: string,
    id: string,
    category?: string,
    description?: string,
    variations: Variation[],
    created_on: string,
}