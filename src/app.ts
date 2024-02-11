import express from 'express'
import middlewares from './middlewares/main.middleware';

const app = express()

middlewares(app)

export default app;