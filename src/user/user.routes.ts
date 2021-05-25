import { Router } from 'express';
import UserController from './user.controller';

const usersRouter = Router();

usersRouter.get('/', (req, res) => {
	return UserController.index(req, res)
});

usersRouter.get('/:id', (req, res) => {
	return UserController.unique(req, res)
});

export default usersRouter;