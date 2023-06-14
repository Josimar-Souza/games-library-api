const { StatusCodes } = require('http-status-codes');

const ErrorCreator = require('../../helpers/ErrorCreator');
const categoriesModel = require('../../model/Categories');
const validations = require('../validations');

const AddCategory = async (category) => {
  const categoryValidation = validations.AddCategory(category);

  if ('error' in categoryValidation) {
    const error = new ErrorCreator(
      categoryValidation,
      categoryValidation.error.message,
      StatusCodes.BAD_REQUEST,
    );

    return error;
  }

  const categoryAdded = await categoriesModel.AddCategory(category);

  return categoryAdded;
};

module.exports = AddCategory;
