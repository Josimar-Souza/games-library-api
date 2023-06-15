const AddCategory = require('./AddCategory');
const GetCategoryByName = require('./GetCategoryByName');
const GetAllCategories = require('./GetAllCategories');
const DeleteCategoryById = require('./DeleteCategoryById');

const categoriesModel = {
  AddCategory,
  GetCategoryByName,
  GetAllCategories,
  DeleteCategoryById,
};

module.exports = categoriesModel;
