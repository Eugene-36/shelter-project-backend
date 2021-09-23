const { MongoClient } = require("mongodb");
require("dotenv").config();
const uriDb = process.env.URI_DB;

const db = MongoClient.connect(uriDb, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
}).catch((err) => {
  console.error(err.stack);
  process.exit(1);
});

process.on("SIGINT", async () => {
  const client = await db;
  client.close();
  console.log("Connection to DB terminated");
  process.exit(1);
});

module.exports = db;
