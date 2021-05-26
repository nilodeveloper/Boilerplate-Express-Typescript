import express from 'express';
import taskIdIs15 from './idIs15.middleware';

const taskMiddlewares = express()

taskMiddlewares.use(
    taskIdIs15
)

export default taskMiddlewares;
