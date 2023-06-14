const express = require('express');
const gamesRouter = require('./Games/gamesRouter');

const rootRouter = express.Router({ mergeParams: true });

gamesRouter(rootRouter);

module.exports = (app) => app.use(rootRouter);
