import { Request, Response, Application } from 'express'
import DB from '../db/DB';
import { Product, ProductRequest } from '../schemas/Product';

function add(server: Application) {
    server.get(`/product/list`, (res: Response<{ products: Product[] }>) => {

        return res.send({ products: DB.getQueries().getAllProducts() });
    });

    server.get(`/product/:id`,
        (req: Request, res: Response<Product>) => {
            const { id } = req.params
            res.send(DB.getQueries().getProductById(id));
        }
    );
}

export default {
    add,
}