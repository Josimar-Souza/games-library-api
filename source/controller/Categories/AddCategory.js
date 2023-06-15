const { StatusCodes } = require('http-status-codes');

const categoriesService = require('../../service/Categories');
const ErrorCreator = require('../../helpers/ErrorCreator');

const AddCategory = async (req, res, next) => {
  let categoryAdded;
  try {
    categoryAdded = await categoriesService.AddCategory(req.body);

    if (categoryAdded instanceof ErrorCreator) {
      return res.status(categoryAdded.status).json({ message: categoryAdded.customMessage });
    }
  } catch (e) {
    next(e);

    return false;
  }

  return res.status(StatusCodes.CREATED).json({ categoryAdded });
};

module.exports = AddCategory;
