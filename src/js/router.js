import { Router } from "@vaadin/router";
import { routes } from "../config/routes.js";

const baseUrl = import.meta.env.BASE_URL;
const outlet = document.querySelector("#app");
const router = new Router(outlet, { baseUrl: baseUrl });

router.setRoutes(routes);