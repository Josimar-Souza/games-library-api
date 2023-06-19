const express = require('express');
const { StatusCodes } = require('http-status-codes');

const gamesRouter = require('./Games/gamesRouter');
const categoriesRouter = require('./Categories/categoriesRouter');

const rootRouter = express.Router({ mergeParams: true });

rootRouter.get('/', (req, res, next) => res.status(StatusCodes.OK).json({ message: 'Server is online' }));

gamesRouter(rootRouter);
categoriesRouter(rootRouter);

module.exports = (app) => app.use(rootRouter);
