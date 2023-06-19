const { StatusCodes } = require('http-status-codes');

const gamesModel = require('../../model/Games');
const validations = require('../validations');
const ErrorCreator = require('../../helpers/ErrorCreator');

const UpdateGameById = async (id, newValues) => {
  const updateValidation = validations.UpdateGame(newValues);

  if ('error' in updateValidation) {
    const error = new ErrorCreator(
      updateValidation,
      updateValidation.error.message,
      StatusCodes.BAD_REQUEST,
    );

    return error;
  }

  const gameFounded = await gamesModel.GetGameById(id);

  if (!gameFounded) {
    const error = new ErrorCreator('Custom error', 'Esse jogo não existe!', StatusCodes.BAD_REQUEST);

    return error;
  }

  const updatedGame = await gamesModel.UpdateGameById(id, newValues);

  if (updatedGame.modifiedCount === 0) {
    const error = new ErrorCreator('Custom Error', 'Não foi possível atualizar o jogo, por favor tente mais tarde!', StatusCodes.SERVICE_UNAVAILABLE);

    return error;
  }

  return updatedGame;
};

module.exports = UpdateGameById;
