const { StatusCodes } = require('http-status-codes');

const ErrorCreator = require('../../helpers/ErrorCreator');
const gamesService = require('../../service/Games');

const AddGame = async (req, res, next) => {
  let gameAdded;
  try {
    gameAdded = await gamesService.AddGame(req.body);

    if (gameAdded instanceof ErrorCreator) {
      return res.status(gameAdded.status).json({ message: gameAdded.customMessage });
    }
  } catch (e) {
    next(e);

    return false;
  }

  return res.status(StatusCodes.CREATED).json({ gameAdded });
};

module.exports = AddGame;
