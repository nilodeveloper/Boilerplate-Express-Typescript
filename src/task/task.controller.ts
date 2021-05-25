class TaskController{

    index(req, res) {
        res.send(`Retornar todas as tasks`)
    }

    unique(req, res){
        res.send('Retorna apenas a task de id: ' + req.params.id)
    }
}

export default new TaskController();

