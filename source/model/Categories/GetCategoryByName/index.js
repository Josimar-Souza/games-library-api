const dotenv = require('dotenv');

const dbConnection = require('../../connection');

dotenv.config();

const { CATEGORIES_COLLECTION } = process.env;

const GetCategoryByName = async (category) => {
  const db = await dbConnection();

  const categoryFound = await db.collection(CATEGORIES_COLLECTION).findOne({ category });

  return categoryFound;
};

module.exports = GetCategoryByName;
