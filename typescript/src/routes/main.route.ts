import { Application } from "express";
import { appRouter } from "./"

const version = process.env.VERSION || "/api/v1";

export default (app: Application) => {
    app.use(`${version}/`, appRouter)
}