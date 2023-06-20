const { StatusCodes } = require('http-status-codes');

const gamesService = require('../../service/Games');
const ErrorCreator = require('../../helpers/ErrorCreator');

const GetGamesByCategory = async (req, res, next) => {
  let games;
  const { category } = req.params;

  try {
    games = await gamesService.GetGamesByCategory(category);

    if (games instanceof ErrorCreator) {
      return res.status(games.status).json({ message: games.customMessage });
    }
  } catch (e) {
    next(e);
  }

  return res.status(StatusCodes.OK).json({ games });
};

module.exports = GetGamesByCategory;
