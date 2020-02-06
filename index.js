require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./api");

// Initialize app
const app = express();

// Body parser middleware
app.use(bodyParser.json());

// Allow cors
app.use(cors());

// Connect to database
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
  console.log("Successfully connected to database");
});

// Rest API
app.use("/api", router);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
