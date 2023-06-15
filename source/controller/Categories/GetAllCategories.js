const { StatusCodes } = require('http-status-codes');

const categoriesService = require('../../service/Categories');
const ErrorCreator = require('../../helpers/ErrorCreator');

const GetAllCategories = async (req, res, next) => {
  let categories;

  try {
    categories = await categoriesService.GetAllCategories();

    if (categories instanceof ErrorCreator) {
      return res.status(categories.status).json({ message: categories.customMessage });
    }
  } catch (e) {
    next(e);

    return false;
  }

  return res.status(StatusCodes.OK).json({ categories });
};

module.exports = GetAllCategories;
