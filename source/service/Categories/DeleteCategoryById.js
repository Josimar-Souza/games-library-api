const { StatusCodes } = require('http-status-codes');

const categoriesModel = require('../../model/Categories');
const gamesModel = require('../../model/Games');
const ErrorCreator = require('../../helpers/ErrorCreator');

const DeleteCategoryById = async (id) => {
  const categoryFound = await categoriesModel.GetCategoryById(id);

  if (!categoryFound) {
    const error = new ErrorCreator('Custom Error', 'Categoria não encontrada!', StatusCodes.NOT_FOUND);

    return error;
  }

  const categoryDeletedStatus = await categoriesModel.DeleteCategoryById(id);
  const gamesDeletedStatus = await gamesModel.DeleteGamesByCategory(categoryFound.category);

  if (categoryDeletedStatus.deletedCount === 0 && gamesDeletedStatus.deletedCount === 0) {
    const error = new ErrorCreator('Custom error', 'Não foi possível deletar essa categoria!');

    return error;
  }

  return true;
};

module.exports = DeleteCategoryById;
