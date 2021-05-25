import express from 'express';
import UserRoute from '../user/user.routes'
import TaskRoute from '../task/task.routes'

const routes = express()

routes.use('/user', UserRoute)
routes.use('/task', TaskRoute)

export default routes