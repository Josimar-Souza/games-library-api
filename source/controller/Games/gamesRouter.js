const express = require('express');
const AddGame = require('./AddGame');

const gamesRouter = express.Router({ mergeParams: true });

gamesRouter.post('/games', AddGame);

module.exports = (rootRouter) => rootRouter.use(gamesRouter);
