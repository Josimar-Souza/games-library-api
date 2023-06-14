const dotenv = require('dotenv');
const { ObjectId } = require('mongodb');

const dbConnection = require('../../connection');

dotenv.config();

const { GAMES_COLLECTION } = process.env;

const UpdateGameById = async (id, newValues) => {
  const db = await dbConnection();

  const updatedGame = await db.collection(GAMES_COLLECTION).updateOne(
    { _id: new ObjectId(id) },
    { $set: newValues },
  );

  return updatedGame;
};

module.exports = UpdateGameById;
