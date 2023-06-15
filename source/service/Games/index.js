const AddGame = require('./AddGame');
const UpdateGameById = require('./UpdateGameById');
const GetGameById = require('./GetGameById');

const gamesService = {
  AddGame,
  UpdateGameById,
  GetGameById,
};

module.exports = gamesService;
