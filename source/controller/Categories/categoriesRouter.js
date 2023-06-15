const express = require('express');
const AddCategory = require('./AddCategory');
const GetAllCategories = require('./GetAllCategories');
const DeleteCategoryById = require('./DeleteCategoryById');

const categoriesRouter = express.Router({ mergeParams: true });

categoriesRouter.get('/categories', GetAllCategories);
categoriesRouter.post('/categories', AddCategory);
categoriesRouter.delete('/categories/:id', DeleteCategoryById);

module.exports = (rootRouter) => rootRouter.use(categoriesRouter);
