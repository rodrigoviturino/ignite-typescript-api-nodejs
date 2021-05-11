import { request, Router } from "express";

import { createSpecificationsController } from "../modules/cars/UseCases/createSpecification";
import { listSpecificationController } from "../modules/cars/UseCases/listSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationsController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
    return listSpecificationController.handle(request, response);
});

export { specificationsRoutes };