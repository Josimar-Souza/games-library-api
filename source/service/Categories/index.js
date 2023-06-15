const AddCategory = require('./AddCategory');
const GetAllCategories = require('./GetAllCategories');
const DeleteCategoryById = require('./DeleteCategoryById');

const categoriesService = {
  AddCategory,
  GetAllCategories,
  DeleteCategoryById,
};

module.exports = categoriesService;
