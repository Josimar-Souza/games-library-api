const { StatusCodes } = require('http-status-codes');

const gamesModel = require('../../model/Games');
const ErrorCreator = require('../../helpers/ErrorCreator');

const DeleteGameById = async (id) => {
  const game = await gamesModel.GetGameById(id);

  if (!game) {
    const error = new ErrorCreator('Custom Error', 'Jogo não encontrado!', StatusCodes.NOT_FOUND);

    return error;
  }

  const deletedStatus = await gamesModel.DeleteGameById(id);

  if (!deletedStatus) {
    const error = new ErrorCreator('Custom Error', 'Não foi possível deletar esse jogo', StatusCodes.BAD_REQUEST);

    return error;
  }

  return deletedStatus;
};

module.exports = DeleteGameById;
