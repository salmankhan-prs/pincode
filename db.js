const mongoose = require("mongoose");

async function db() {
  const DB_URL = process.env.DB_URL;

  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(DB_URL);
    console.log("Database initialized successfully");
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1);
  }
}

module.exports = { db };
