const dotenv = require('dotenv');

const dbConnection = require('../../connection');

dotenv.config();
const { GAMES_COLLECTION } = process.env;

const GetAllCategories = async () => {
  const db = await dbConnection();

  const categories = await db.collection(GAMES_COLLECTION).find({}).toArray();

  return categories;
};

module.exports = GetAllCategories;
