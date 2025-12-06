import { Service } from "./service";

export class CatalogService extends Service {
    constructor(apiBase) {
        super(apiBase, "/api/products", "CatalogService");
    }

    async getItems() {
        const items = await super.getItems();
        return this.processImageUrls(items);
    }
}