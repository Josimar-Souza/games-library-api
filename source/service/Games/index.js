const AddGame = require('./AddGame');
const UpdateGameById = require('./UpdateGameById');
const GetGameById = require('./GetGameById');
const GetAllGames = require('./GetAllGames');

const gamesService = {
  AddGame,
  UpdateGameById,
  GetGameById,
  GetAllGames,
};

module.exports = gamesService;
