const express = require('express');
const gamesRouter = require('./Games/gamesRouter');
const categoriesRouter = require('./Categories/categoriesRouter');

const rootRouter = express.Router({ mergeParams: true });

gamesRouter(rootRouter);
categoriesRouter(rootRouter);

module.exports = (app) => app.use(rootRouter);
