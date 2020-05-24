import ProductDAO from "@shopify-api/db/ProductDAO";
import { ProductRequest } from "@shopify-api/schemas/Product";

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