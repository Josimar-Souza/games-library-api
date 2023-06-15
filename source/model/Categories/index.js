const AddCategory = require('./AddCategory');
const GetCategoryByName = require('./GetCategoryByName');
const GetAllCategories = require('./GetAllCategories');

const categoriesModel = {
  AddCategory,
  GetCategoryByName,
  GetAllCategories,
};

module.exports = categoriesModel;
