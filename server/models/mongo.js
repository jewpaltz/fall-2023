/* B"H
*/

const { MongoClient, ObjectId } = require('mongodb');
const uri = process.env.MONGO_URI;
const DB_NAME = process.env.MONGO_DB_NAME;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {});

async function connect() {
    await client.connect();
    return client.db(DB_NAME);
}

module.exports = { 
  connect, ObjectId
};
