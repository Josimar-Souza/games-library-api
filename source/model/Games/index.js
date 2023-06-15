const AddGame = require('./AddGame');
const UpdateGameById = require('./UpdateGameById');
const GetGameById = require('./GetGameById');
const getAllGames = require('./GetAllGames');

const gamesModel = {
  AddGame,
  UpdateGameById,
  GetGameById,
  getAllGames,
};

module.exports = gamesModel;
