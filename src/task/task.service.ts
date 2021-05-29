import * as yup from 'yup';

class TaskService{

    index(req, res) {
        res.send(`Retornar todas as tasks`)
    }

    async unique(req, res) {
        res.send(`Retorna apenas a task de id: ` + req.params.id)
    }

    create(req, res) {
        res.send(`Task criada!`)
    }
}

export default new TaskService();
