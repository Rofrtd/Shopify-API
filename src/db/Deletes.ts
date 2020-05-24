import ProductDAO from "@shopify-api/db/ProductDAO";

export default class Deletes {

    private productDAO: ProductDAO

    public constructor() {
        this.productDAO = new ProductDAO()
        // Here you will add all DAO solutions
    }

    public deleteProduct(id: string) {
        this.productDAO.deleteProduct(id)
    }


}