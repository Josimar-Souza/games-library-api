const dotenv = require('dotenv');
const { ObjectId } = require('mongodb');

const dbConnection = require('../../connection');

dotenv.config();
const { GAMES_COLLECTION } = process.env;

const DeleteGameById = async (id) => {
  const db = await dbConnection();

  const deletedStatus = await db.collection(GAMES_COLLECTION).deleteOne({ _id: new ObjectId(id) });

  return deletedStatus;
};

module.exports = DeleteGameById;
