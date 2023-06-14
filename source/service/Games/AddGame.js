const { StatusCodes } = require('http-status-codes');

const gamesModel = require('../../model/Games');
const categoriesModel = require('../../model/Categories');
const validations = require('../validations');
const ErrorCreator = require('../../helpers/ErrorCreator');

const AddGame = async (newGame) => {
  const gameValidation = validations.AddGame(newGame);

  if ('error' in gameValidation) {
    const error = new ErrorCreator(
      gameValidation,
      gameValidation.error.message,
      StatusCodes.BAD_REQUEST,
    );

    return error;
  }

  const category = await categoriesModel.GetCategoryByName(newGame.category);

  if (!category) {
    const error = new ErrorCreator(
      'Custom Error',
      'Essa categoria não existe! Por favor, crie ela primeiro antes de adicionar o jogo',
      StatusCodes.BAD_REQUEST,
    );

    return error;
  }

  const gameAdded = await gamesModel.AddGame(newGame);

  return gameAdded;
};

module.exports = AddGame;
