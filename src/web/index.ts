import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Application } from 'express'
import ProductAPI from './ProductAPI'

export class Web {
    private server: Application;
    constructor() {
        this.server = express();
        this.server.use(bodyParser.json());
        this.server.use(bodyParser.urlencoded({ extended: true }));

        ProductAPI.add(this.server)
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