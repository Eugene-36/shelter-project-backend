const db = require("./db");

const getCollection = async (db, name) => {
  const client = await db;
  const collection = await client.db().collection(name);
  return collection;
};

const getAll = async () => {
  const collection = await getCollection(db, "animals");
  const results = await collection.find({}).toArray();
  return results;
};

module.exports = { getAll, getCollection };
