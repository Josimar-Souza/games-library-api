const dotenv = require('dotenv');

const dbConnection = require('../../connection');

dotenv.config();

const { GAMES_COLLECTION } = process.env;

const GetGameByCategory = async (category) => {
  const db = await dbConnection();

  const games = await db.collection(GAMES_COLLECTION).find({ category }).toArray();

  return games;
};

module.exports = GetGameByCategory;
