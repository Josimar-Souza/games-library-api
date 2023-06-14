const { StatusCodes } = require('http-status-codes');

const ErrorCreator = require('../../helpers/ErrorCreator');
const categoriesModel = require('../../model/Categories');
const validations = require('../validations');

const AddCategory = async (newCategory) => {
  const categoryValidation = validations.AddCategory(newCategory);

  if ('error' in categoryValidation) {
    const error = new ErrorCreator(
      categoryValidation,
      categoryValidation.error.message,
      StatusCodes.BAD_REQUEST,
    );

    return error;
  }

  const categoryFound = await categoriesModel.GetCategoryByName(newCategory.category);

  if (categoryFound) {
    const error = new ErrorCreator(
      'Custom error',
      `A categoria "${newCategory.category}" já existe!`,
      StatusCodes.BAD_REQUEST,
    );

    return error;
  }

  const categoryAdded = await categoriesModel.AddCategory(newCategory);

  return categoryAdded;
};

module.exports = AddCategory;
