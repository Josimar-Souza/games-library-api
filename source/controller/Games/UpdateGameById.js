const { StatusCodes } = require('http-status-codes');

const ErrorCreator = require('../../helpers/ErrorCreator');
const gamesService = require('../../service/Games');

const UpdateGameById = async (req, res, next) => {
  let updatedGame;
  try {
    const { id } = req.params;
    updatedGame = await gamesService.UpdateGameById(id, req.body);

    if (updatedGame instanceof ErrorCreator) {
      return res.status(updatedGame.status).json({ message: updatedGame.customMessage });
    }
  } catch (e) {
    next(e);

    return false;
  }

  return res.status(StatusCodes.NO_CONTENT).send();
};

module.exports = UpdateGameById;
