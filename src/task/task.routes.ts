import { Router } from 'express';
import TaskController from './task.controller';

const taskRouter = Router();

taskRouter.get('/', (req, res) => {
	return TaskController.index(req, res)
});

taskRouter.get('/:id', (req, res) => {
	return TaskController.unique(req, res)
});

export default taskRouter;
