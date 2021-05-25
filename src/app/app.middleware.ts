import express from 'express';
import userMiddleware from '../user/user.middleware';

const middleware = express()
middleware.use(userMiddleware)

export default middleware;
