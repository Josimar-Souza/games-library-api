const AddGame = require('./AddGame');
const UpdateGameById = require('./UpdateGameById');
const GetGameById = require('./GetGameById');
const GetAllGames = require('./GetAllGames');
const DeleteGameById = require('./DeleteGameById');
const GetGamesByCategory = require('./GetGamesByCategory');

const gamesService = {
  AddGame,
  UpdateGameById,
  GetGameById,
  GetAllGames,
  DeleteGameById,
  GetGamesByCategory,
};

module.exports = gamesService;
