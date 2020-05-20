import { Core } from "@shopify-api/core";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response, Application } from 'express'

export class Web {
    private server: Application;
    constructor(private core: Core) {
        this.server = express();
        this.server.use(bodyParser.json());
        this.server.use(bodyParser.urlencoded({ extended: true }));
        const PREFIX = "/api/v1"


        this.server.get(`${PREFIX}/product/list`, (req: Request, res: Response) => {
            return res.send(this.core.getAllProducts());
        });

        this.server.get(`${PREFIX}/product/:id`,
            (req: Request, res: Response) => {
                const { id } = req.params
                console.log(typeof (id))
                res.send(this.core.getProductById(id));
            }
        );
    }

    async start(port: number) {
        try {
            this.server.listen(port, () => console.log(`Listening on port: ${port}`));
        } catch (err) {
            console.log(err);
            process.exit(1);
        }
    }
}