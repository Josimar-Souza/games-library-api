const AddGame = require('./AddGame');
const UpdateGameById = require('./UpdateGameById');
const GetGameById = require('./GetGameById');
const GetAllGames = require('./GetAllGames');
const DeleteGameById = require('./DeleteGameById');

const gamesService = {
  AddGame,
  UpdateGameById,
  GetGameById,
  GetAllGames,
  DeleteGameById,
};

module.exports = gamesService;
