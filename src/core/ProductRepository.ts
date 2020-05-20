import { Product } from ".";

export interface ProductRepository {
  getAllProducts(): Array<Product>;
  getProductById(id: String): Product;
}
