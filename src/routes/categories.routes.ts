import { request, Router } from "express";

import { createCategoryController } from "../modules/cars/UseCases/createCategory";
import { listCategoriesController } from "../modules/cars/UseCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handler(request, response);
});

export { categoriesRoutes }