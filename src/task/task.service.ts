import * as yup from 'yup';

class TaskService{

    index(req, res) {
        res.send(`Retornar todas as tasks`)
    }

    unique(taskId: Number): String {
        console.log('Retornando dados da task de id: ', taskId)
        return 'Dados sobre a task: ${taskId}'
    }

    create(task: Task): String {
        console.log('Salvando a task no banco de dados', task)
        return 'Task salva!'
    }
}

export default new TaskService();
