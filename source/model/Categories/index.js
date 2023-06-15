const AddCategory = require('./AddCategory');
const GetCategoryByName = require('./GetCategoryByName');
const GetAllCategories = require('./GetAllCategories');
const DeleteCategoryById = require('./DeleteCategoryById');
const GetCategoryById = require('./GetCategoryById');

const categoriesModel = {
  AddCategory,
  GetCategoryByName,
  GetAllCategories,
  DeleteCategoryById,
  GetCategoryById,
};

module.exports = categoriesModel;
