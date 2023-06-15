const dotenv = require('dotenv');

const dbConnection = require('../../connection');

dotenv.config();
const { GAMES_COLLECTION } = process.env;

const DeleteGamesByCategory = async (category) => {
  const db = await dbConnection();

  const deletedStatus = await db.collection(GAMES_COLLECTION).deleteMany({ category });

  return deletedStatus;
};

module.exports = DeleteGamesByCategory;
