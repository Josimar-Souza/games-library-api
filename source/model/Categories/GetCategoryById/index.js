const { ObjectId } = require('mongodb');
const dotenv = require('dotenv');

const dbConnection = require('../../connection');

dotenv.config();
const { CATEGORIES_COLLECTION } = process.env;

const GetCategoryById = async (id) => {
  const db = await dbConnection();

  const category = await db.collection(CATEGORIES_COLLECTION).findOne({ _id: new ObjectId(id) });

  return category;
};

module.exports = GetCategoryById;
