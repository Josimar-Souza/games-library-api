const dotenv = require('dotenv');

const dbConnection = require('../../connection');

dotenv.config();
const { GAMES_COLLECTION } = process.env;

const GetAllGames = async () => {
  const db = await dbConnection();

  const games = await db.collection(GAMES_COLLECTION).find({}).toArray();

  return games;
};

module.exports = GetAllGames;
