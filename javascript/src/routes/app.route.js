const { Router } = require("express")
const { appController } = require("../controllers")

const appRouter = Router()

appRouter.get(`/`, appController.welcome)

appRouter.get(`/health`, appController.healthCheck)

appRouter.use(appController.pageNotFound)

module.exports = appRouter