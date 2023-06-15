const { StatusCodes } = require('http-status-codes');

const gamesService = require('../../service/Games');
const ErrorCreator = require('../../helpers/ErrorCreator');

const GetGameById = async (req, res, next) => {
  let game;
  const { id } = req.params;

  try {
    game = await gamesService.GetGameById(id);

    if (game instanceof ErrorCreator) {
      return res.status(game.status).json({ message: game.customMessage });
    }
  } catch (e) {
    next(e);
  }

  return res.status(StatusCodes.OK).json({ game });
};

module.exports = GetGameById;
