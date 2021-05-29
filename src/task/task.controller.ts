import TaskService from './task.service';

class TaskController{

    index(req, res) {
        TaskService.index(req, res)
    }

    unique(req, res){
        TaskService.unique(req, res)
    }

    create(req, res) {
        try{
            const task: Task = req.body
            res.status(201).send(TaskService.create(task))
        }catch{
            res.status(502).send("Não foi possível criar a task")
        }
    }
}

export default new TaskController();

