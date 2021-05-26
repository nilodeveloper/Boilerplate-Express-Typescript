import express from 'express';

var taskMiddleware = express();

taskMiddleware.use('/tasks/:id', function (req, res, next) {
    if(Number(req.params.id) == 15)
        next();
    else
        res.send('A task deve ter id 15 para mostrar (teste de middleware)')    
});

export default taskMiddleware;
