import { Router } from "@vaadin/router";
import { routes } from "../config/routes.js";
import { BASE_URL } from "../config/constants.js";

function initRouter() {
	const outlet = document.querySelector("#app");
	if (!outlet) {
		console.error("Router outlet #app not found");
		return;
	}
	
	console.log("Initializing router with baseUrl:", BASE_URL);
	const router = new Router(outlet, { baseUrl: BASE_URL });
	router.setRoutes(routes);
	console.log("Router initialized, routes set");
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initRouter);
} else {
	initRouter();
}