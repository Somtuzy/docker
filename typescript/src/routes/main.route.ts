import { Application } from "express";
import { appRouter } from "./"

const version = process.env.VERSION;

export default (app: Application) => {
    app.use(`${version}/`, appRouter)
}