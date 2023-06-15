const express = require('express');
const AddCategory = require('./AddCategory');
const GetAllCategories = require('./GetAllCategories');

const categoriesRouter = express.Router({ mergeParams: true });

categoriesRouter.get('/categories', GetAllCategories);
categoriesRouter.post('/categories', AddCategory);

module.exports = (rootRouter) => rootRouter.use(categoriesRouter);
