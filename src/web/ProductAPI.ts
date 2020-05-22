import { Request, Response, Application } from 'express'
import DB from '../db/DB';
import { Product } from '../schemas/Product';

function add(server: Application) {
    server.get('/product/list', (req: Request, res: Response<{ products: Product[] }>) => {

        res.send({ products: DB.getQueries().getAllProducts() });
    });

    server.get('/product/:id',
        (req: Request, res: Response<Product>) => {
            const { id } = req.params
            res.send(DB.getQueries().getProductById(id));
        }
    );
    server.post('/product', (req: Request, res: Response) => {
        res.send(DB.getInserts().insertProduct(req.body))
    });

    server.delete('/product/:id',
        (req: Request, res: Response) => {
            const { id } = req.params
            res.send(DB.getDeletes().deleteProduct(id))
        })
}

export default {
    add,
}

