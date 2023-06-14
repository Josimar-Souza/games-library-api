const dotenv = require('dotenv');
const { ObjectId } = require('mongodb');

const dbConnection = require('../../connection');

dotenv.config();

const { GAMES_COLLECTION } = process.env;

const AddGame = async (newGame) => {
  const db = await dbConnection();

  const { insertedId: id } = await db.collection(GAMES_COLLECTION).insertOne(newGame);

  const gameAdded = {
    ...newGame,
    _id: new ObjectId(id),
  };

  return gameAdded;
};

module.exports = AddGame;
