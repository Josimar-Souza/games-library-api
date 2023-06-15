const { StatusCodes } = require('http-status-codes');

const gamesService = require('../../service/Games');
const ErrorCreator = require('../../helpers/ErrorCreator');

const GetAllGames = async (req, res, next) => {
  let games;

  try {
    games = await gamesService.GetAllGames();

    if (games instanceof ErrorCreator) {
      return res.status(games.status).json({ message: games.customMessage });
    }
  } catch (e) {
    next(e);

    return false;
  }

  return res.status(StatusCodes.OK).json({ games });
};

module.exports = GetAllGames;
