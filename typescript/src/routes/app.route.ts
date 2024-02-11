import { Router } from "express";
import { appController } from "../controllers";

const appRouter = Router()

appRouter.get(`/`, appController.welcome)

appRouter.get(`/health`, appController.healthCheck)

appRouter.use(appController.pageNotFound)

export default appRouter