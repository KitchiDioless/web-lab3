import { Service } from "./service";

export class ArticlesService extends Service {
    constructor(apiBase) {
        super(apiBase, "/api/posts", "ArticlesService");
    }

    async getItems() {
        const items = await super.getItems();
        return this.processImageUrls(items);
    }
}