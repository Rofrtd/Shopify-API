import ProductDAO from "@shopify-api/db/ProductDAO";
import { ProductRequest } from "@shopify-api/schemas/Product";

export default class Updates {
    private productDAO: ProductDAO

    public constructor() {
        this.productDAO = new ProductDAO()
        // Here you will add all DAO solutions
    }

    public updateProduct(id: string, product: ProductRequest) {
        this.productDAO.updateProduct(id, product)
    }
}