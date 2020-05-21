import { Product, ProductRequest } from "../schemas/Product";
import * as fs from "fs";

export default class ProductDAO {
    public getAllProducts(): Product[] {
        const products = JSON.parse(fs.readFileSync("./local_storage/products.json").toString())

        return products
    }

    public getProductById(id: string): Product {
        const products = JSON.parse(fs.readFileSync("./local_storage/products.json").toString()) as Product[]

        return products.find((el) => el.id === id);
    }

    public insertProduct(product: ProductRequest) {
        const products = JSON.parse(fs.readFileSync("./local_storage/products.json").toString()) as Product[]

        products.push({ ...product, created_on: new Date().toString(), id: Math.random().toString() })

        fs.writeFileSync("./local_storage/products.json", JSON.stringify(products))
    }
}