const { MongoClient } = require("mongodb");

const connectionString =
  "mongodb+srv://dukenduken:fkUDFaGvkumx3Fvg@betdata.rha4hkq.mongodb.net/test";

const client = new MongoClient(connectionString, {
  useUnifiedTopology: true,
});

module.exports = client;