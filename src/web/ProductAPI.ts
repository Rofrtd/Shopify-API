import { Request, Response, Application } from 'express'
import DB from '../db/DB';
import { Product } from '../schemas/Product';
// import Shopify from 'shopify-api-node';

function add(server: Application, /*shopify: Shopify*/) {
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
        DB.getInserts().insertProduct(req.body)
        res.send()
    });

    server.delete('/product/:id',
        (req: Request, res: Response) => {
            const { id } = req.params
            res.send(DB.getDeletes().deleteProduct(id))
        })

    server.put('/product/:id', (req: Request, res: Response) => {
        const { id } = req.params
        res.send(DB.getUpdates().updateProduct(id, req.body))
    });
}

export default {
    add,
}


// if (body) {
//     const product = DB.getQueries().getProductById(id)
//     const shopify_product = shopify.product.create(product)
//     DB.getUpdates().updateProduct([...product, product.id = ] )