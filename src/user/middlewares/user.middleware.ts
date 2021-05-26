import express from 'express';

var userMiddleware = express();

userMiddleware.use('/user/:id', function (req, res, next) {
    console.log('Atualizou')
    if(Number(req.params.id) == 25)
        next();
});

export default userMiddleware;
