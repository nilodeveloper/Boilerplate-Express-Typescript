import TaskService from './task.service';

class TaskController{

    index(req, res) {
        TaskService.index(req, res)
    }

    unique(req, res){
        TaskService.unique(req, res)
    }

    create(req, res){
        TaskService.create(req, res)
    }
}

export default new TaskController();

