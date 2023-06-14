const express = require('express');
const AddGame = require('./AddGame');

const gamesRouter = express.Router({ mergeParams: true });

gamesRouter.post('/game', AddGame);

module.exports = (rootRouter) => rootRouter.use(gamesRouter);
