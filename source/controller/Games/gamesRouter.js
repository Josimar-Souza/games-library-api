const express = require('express');
const AddGame = require('./AddGame');
const UpdateGameById = require('./UpdateGameById');
const GetGameById = require('./GetGameById');
const GetAllGames = require('./GetAllGames');
const DeleteGameById = require('./DeleteGameById');
const GetGamesByCategory = require('./GetGamesByCategory');

const gamesRouter = express.Router({ mergeParams: true });

gamesRouter.get('/games', GetAllGames);
gamesRouter.get('/games/:id', GetGameById);
gamesRouter.get('/games/category/:category', GetGamesByCategory);
gamesRouter.post('/games', AddGame);
gamesRouter.put('/games/:id', UpdateGameById);
gamesRouter.delete('/games/:id', DeleteGameById);

module.exports = (rootRouter) => rootRouter.use(gamesRouter);
