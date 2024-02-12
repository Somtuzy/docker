const { appRouter } = require("./index")

const version = process.env.VERSION || "/api/v1";

module.exports = (app) => {
    app.use(`${version}/`, appRouter)
}