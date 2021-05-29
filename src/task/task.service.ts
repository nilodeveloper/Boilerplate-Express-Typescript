import * as yup from 'yup';

class TaskService{

    index(req, res) {
        res.send(`Retornar todas as tasks`)
    }

    async unique(req, res) {
        res.send(`Retorna apenas a task de id: ` + req.params.id)
    }

    create(task: Task): String {
        console.log('Salvando a task no banco de dados', task)
        return 'Task salva!'
    }
}

export default new TaskService();
