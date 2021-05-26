import express from 'express';

var taskMiddleware = express();

taskMiddleware.use('/task/:id', function (req, res, next) {
    if(Number(req.params.id) == 15)
        next();
});

export default taskMiddleware;
