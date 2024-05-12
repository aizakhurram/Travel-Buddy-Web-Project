const mongoose = require("mongoose");
const {MONGOURI} = require('./key')
const connectDB = async () => {
  try {
    const con = await mongoose.connect(MONGOURI);
    console.log(`MongoDB Connected: ${con.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
