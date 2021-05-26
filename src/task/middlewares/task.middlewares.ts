import express from 'express';
import idIs15 from './idIs15.middleware';

const taskMiddlewares = express()

taskMiddlewares.use(
    idIs15
)

export default taskMiddlewares;
