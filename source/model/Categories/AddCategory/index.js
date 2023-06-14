const { ObjectId } = require('mongodb');
const dotenv = require('dotenv');

const dbConnection = require('../../connection');

dotenv.config();

const { CATEGORIES_COLLECTION } = process.env;

const AddCategory = async (newCategory) => {
  const db = await dbConnection();

  const { insertedId: id } = await db.collection(CATEGORIES_COLLECTION).insertOne(newCategory);

  const categoryAdded = {
    ...newCategory,
    _id: new ObjectId(id),
  };
  console.log(categoryAdded);
  return categoryAdded;
};

module.exports = AddCategory;
