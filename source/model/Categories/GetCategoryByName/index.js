const dotenv = require('dotenv');

const dbConnection = require('../../connection');

dotenv.config();

const { CATEGORIES_COLLECTION } = process.env;

const GetCategoryByName = async (name) => {
  const db = await dbConnection();

  const category = await db.collection(CATEGORIES_COLLECTION).findOne({ name });

  return category;
};

module.exports = GetCategoryByName;
