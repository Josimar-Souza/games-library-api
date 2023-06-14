const express = require('express');
const AddCategory = require('./AddCategory');

const categoriesRouter = express.Router({ mergeParams: true });

categoriesRouter.post('/categories', AddCategory);

module.exports = (rootRouter) => rootRouter.use(categoriesRouter);
