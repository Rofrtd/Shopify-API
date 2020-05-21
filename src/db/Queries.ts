import ProductDAO from "./ProductDAO";
import { Product } from "../schemas/Product";

export default class Queries {
    private productDAO: ProductDAO

    public constructor() {
        this.productDAO = new ProductDAO()
        // Here you will add all DAO solutions
    }

    public getAllProducts(): Product[] {
        return this.productDAO.getAllProducts()
    }

    public getProductById(id: string): Product {
        return this.productDAO.getProductById(id)
    }
}