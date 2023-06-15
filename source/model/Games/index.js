const AddGame = require('./AddGame');
const UpdateGameById = require('./UpdateGameById');
const GetGameById = require('./GetGameById');
const getAllGames = require('./GetAllGames');
const DeleteGameById = require('./DeleteGameById');

const gamesModel = {
  AddGame,
  UpdateGameById,
  GetGameById,
  getAllGames,
  DeleteGameById,
};

module.exports = gamesModel;
