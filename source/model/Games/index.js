const AddGame = require('./AddGame');
const UpdateGameById = require('./UpdateGameById');
const GetGameById = require('./GetGameById');

const gamesModel = {
  AddGame,
  UpdateGameById,
  GetGameById,
};

module.exports = gamesModel;
