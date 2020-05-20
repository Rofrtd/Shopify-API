import { ProductRepository } from "./ProductRepository";
import { Product } from "./Product";
export { ProductRepository, Product };

export class Core {
    constructor(private productRepository: ProductRepository) { }
    getAllProducts(): Array<ProductOutputDTO> {
        return this.productRepository.getAllProducts();
    }
    getProductById(id: String): ProductOutputDTO {
        const product = this.productRepository.getProductById(id);
        const output = new ProductOutputDTO(product);
        return output;
    }
}

export class ProductOutputDTO {
    constructor(product: Product) {
        this.name = product.name;
        this.id = product.id;
        this.category = product.category;
        this.brand = product.brand;
        this.variations = product.variations;
        this.created_on = product.created_on;
    }
    name: String;
    id: String;
    category: String;
    description: String;
    brand: String;
    variations: [{
        color: String;
        size: String;
        price: Number;
        stock: Number;
        discount: Number;
        images: Array<String>;
        type: String;
    }]
    created_on: Date;
}

