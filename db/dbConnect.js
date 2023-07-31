const config = require("../config/default.js");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongodb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is Connected");
    return mongoose.connection.collection("students"); // Replace "students" with your actual collection name
  } catch (error) {
    console.log("MongoDB Connection Error: ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
