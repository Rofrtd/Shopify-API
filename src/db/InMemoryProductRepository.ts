import { Product, ProductRepository } from "@shopify-api/core";

export class InMemoryProductRepository implements ProductRepository {
    private memory: Array<any>;
    constructor() {
        this.memory = initialMemory;
    }

    getAllProducts(): Array<Product> {
        return [...this.memory];
    }
    getProductById(id: String): Product {
        return this.memory.find((el) => el.id === id);
    }
}

const initialMemory = [
    {
        name: "Channel SuperBag",
        id: "1",
        category: "Bag",
        description: "Bla bla bla bla bla",
        variations: [{
            brand: "Channel",
            color: "Black",
            size: "small",
            price: 2093.22,
            stock: 23,
            discount: 0.2,
            images: ["URL1.www.bla.bla", "URL2.www.test.test"],
            type: "handbag",
        }],
        created_on: "2020-04-11 02:53:44",
    },
    {
        name: "Dior Zucri",
        id: "2",
        category: "Belt",
        description: "test test test test",
        variations: [{
            brand: "Dior",
            color: "Red",
            size: "large",
            price: 1035.52,
            stock: 2,
            discount: 0.1,
            images: ["URL1.www.bla.bla", "URL2.www.test.test"],
            type: "handbag",
        }],
        created_on: "2020-04-11 02:53:44",
    },
];

