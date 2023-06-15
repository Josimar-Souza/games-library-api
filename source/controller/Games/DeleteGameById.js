const { StatusCodes } = require('http-status-codes');

const gamesService = require('../../service/Games');
const ErrorCreator = require('../../helpers/ErrorCreator');

const DeleteGameById = async (req, res, next) => {
  let deletedStatus;
  const { id } = req.params;

  try {
    deletedStatus = await gamesService.DeleteGameById(id);

    if (deletedStatus instanceof ErrorCreator) {
      return res.status(deletedStatus.status).json({ message: deletedStatus.customMessage });
    }
  } catch (e) {
    next(e);

    return false;
  }

  return res.status(StatusCodes.NO_CONTENT).send();
};

module.exports = DeleteGameById;
