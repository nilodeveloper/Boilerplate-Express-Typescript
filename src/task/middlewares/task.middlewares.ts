import express from 'express';
import taskIdIs15 from './idIs15.middleware';
import createTask from './createTask.middleware';

const taskMiddlewares = express()

taskMiddlewares.use(
    taskIdIs15,
    createTask
)

export default taskMiddlewares;
