const { appRouter } = require("./index")

const version = process.env.VERSION;

module.exports = (app) => {
    app.use(`${version}/`, appRouter)
}