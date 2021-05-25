import express from 'express';

var userMiddleware = express();

userMiddleware.use('/user/:id', function (req, res, next) {
    if(Number(req.params.id) == 15)
        next();
});

export default userMiddleware;
