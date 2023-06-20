const { StatusCodes } = require('http-status-codes');

const gamesModel = require('../../model/Games');
const ErrorCreator = require('../../helpers/ErrorCreator');

const GetGamesByCategory = async (category) => {
  const games = await gamesModel.GetGamesByCategory(category);

  if (games.length === 0) {
    const error = new ErrorCreator('Custom Error', 'Nenhum jogo encontrado!', StatusCodes.NOT_FOUND);

    return error;
  }

  return games;
};

module.exports = GetGamesByCategory;
