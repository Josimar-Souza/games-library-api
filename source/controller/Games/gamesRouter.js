const express = require('express');
const AddGame = require('./AddGame');
const UpdateGameById = require('./UpdateGameById');

const gamesRouter = express.Router({ mergeParams: true });

gamesRouter.post('/games', AddGame);
gamesRouter.put('/games/:id', UpdateGameById);

module.exports = (rootRouter) => rootRouter.use(gamesRouter);
