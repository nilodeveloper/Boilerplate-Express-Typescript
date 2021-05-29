import express from 'express';

var taskIdIs15 = express();

taskIdIs15.use('/tasks/:id', function (req, res, next) {
    if(req.params.id == '15'){
        res.send('Id deve ser != 15. Teste de MiddleWare!')
    }else{
        next()
    }
});

export default taskIdIs15;
