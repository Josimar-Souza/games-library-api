const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const { DB_NAME, DB_URL } = process.env;

const dbConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const getDBConnection = async () => {
  try {
    if (!db) {
      db = (await MongoClient.connect(DB_URL, dbConfig)).db(DB_NAME);
    }
  } catch (e) {
    console.log(e);
    process.exit(1);
  }

  return db;
};

module.exports = getDBConnection;
