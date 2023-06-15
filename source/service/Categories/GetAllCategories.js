const { StatusCodes } = require('http-status-codes');

const categoriesModel = require('../../model/Categories');
const ErrorCreator = require('../../helpers/ErrorCreator');

const GetAllCategories = async () => {
  const games = await categoriesModel.GetAllCategories();

  if (games.length === 0) {
    const error = new ErrorCreator('Custom Error', 'Nenhum jogo encontrado!', StatusCodes.NOT_FOUND);

    return error;
  }

  return games;
};

module.exports = GetAllCategories;
