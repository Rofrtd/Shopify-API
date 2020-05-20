import { Core } from "@shopify-api/core";
import { Web } from "@shopify-api/web";
import { InMemoryProductRepository } from "@shopify-api/db/InMemoryProductRepository";


new Web(new Core(new InMemoryProductRepository())).start(3000)