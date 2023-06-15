const { StatusCodes } = require('http-status-codes');

const gamesModel = require('../../model/Games');
const ErrorCreator = require('../../helpers/ErrorCreator');

const GetAllGames = async () => {
  const games = await gamesModel.getAllGames();

  if (games.length === 0) {
    const error = new ErrorCreator('Custom error', 'Nenhum jogo encontrado!', StatusCodes.NOT_FOUND);

    return error;
  }

  return games;
};

module.exports = GetAllGames;
