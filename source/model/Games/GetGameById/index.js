const dotenv = require('dotenv');
const { ObjectId } = require('mongodb');

const dbConnection = require('../../connection');

dotenv.config();
const { GAMES_COLLECTION } = process.env;

const GetGameById = async (id) => {
  const db = await dbConnection();

  const game = await db.collection(GAMES_COLLECTION).findOne({ _id: new ObjectId(id) });

  return game;
};

module.exports = GetGameById;
