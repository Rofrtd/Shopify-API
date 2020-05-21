import ProductDAO from "./ProductDAO";
import { ProductRequest } from "../schemas/Product";

export default class Inserts {
    private productDAO: ProductDAO

    public constructor() {
        this.productDAO = new ProductDAO()
        // Here you will add all DAO solutions
    }

    public insertProduct(product: ProductRequest) {
        this.productDAO.insertProduct(product)
    }
}