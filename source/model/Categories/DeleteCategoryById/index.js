const dotenv = require('dotenv');
const { ObjectId } = require('mongodb');

const dbConnection = require('../../connection');

dotenv.config();
const { CATEGORIES_COLLECTION } = process.env;

const DeleteCategoryById = async (id) => {
  const db = await dbConnection();

  const deletedStatus = await db.collection(CATEGORIES_COLLECTION)
    .deleteOne({ _id: new ObjectId(id) });

  return deletedStatus;
};

module.exports = DeleteCategoryById;
