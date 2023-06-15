const { StatusCodes } = require('http-status-codes');

const categoriesService = require('../../service/Categories');
const ErrorCreator = require('../../helpers/ErrorCreator');

const DeleteCategoryById = async (req, res, next) => {
  let deletedStatus;
  const { id } = req.params;

  try {
    deletedStatus = await categoriesService.DeleteCategoryById(id);

    if (deletedStatus instanceof ErrorCreator) {
      return res.status(deletedStatus.status).json({ message: deletedStatus.customMessage });
    }
  } catch (e) {
    next(e);
  }

  return res.status(StatusCodes.NO_CONTENT).send();
};

module.exports = DeleteCategoryById;
