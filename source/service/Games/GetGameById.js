const { StatusCodes } = require('http-status-codes');

const gamesModel = require('../../model/Games');
const ErrorCreator = require('../../helpers/ErrorCreator');

const GetGameById = async (id) => {
  const game = await gamesModel.GetGameById(id);

  if (!game) {
    const error = new ErrorCreator('Custom error', 'Jogo não encontrado!', StatusCodes.NOT_FOUND);

    return error;
  }

  return game;
};

module.exports = GetGameById;
