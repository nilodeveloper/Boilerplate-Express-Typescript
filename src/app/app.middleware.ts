import express from 'express';
import userMiddleware from '../user/middlewares/user.middleware';
import taskMiddleware from '../task/middlewares/task.middleware';

const middleware = express()

middleware.use(userMiddleware)
middleware.use(taskMiddleware)

export default middleware;
