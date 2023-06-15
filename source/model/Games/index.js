const AddGame = require('./AddGame');
const UpdateGameById = require('./UpdateGameById');
const GetGameById = require('./GetGameById');
const getAllGames = require('./GetAllGames');
const DeleteGameById = require('./DeleteGameById');
const DeleteGamesByCategory = require('./DeleteGamesByCategory');

const gamesModel = {
  AddGame,
  UpdateGameById,
  GetGameById,
  getAllGames,
  DeleteGameById,
  DeleteGamesByCategory,
};

module.exports = gamesModel;
