const mongoose = require("mongoose");

mongoose.set("useCreateIndex", true);

const IPSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  }
});

module.exports = mongoose.model("IP", IPSchema);
