const express = require('express');
const AddGame = require('./AddGame');
const UpdateGameById = require('./UpdateGameById');
const GetGameById = require('./GetGameById');
const GetAllGames = require('./GetAllGames');

const gamesRouter = express.Router({ mergeParams: true });

gamesRouter.get('/games', GetAllGames);
gamesRouter.get('/games/:id', GetGameById);
gamesRouter.post('/games', AddGame);
gamesRouter.put('/games/:id', UpdateGameById);

module.exports = (rootRouter) => rootRouter.use(gamesRouter);
