const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

async function dbConnect() {
    await mongoose.connect(uri);
}

module.exports = dbConnect;