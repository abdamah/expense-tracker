const mongoose = require("mongoose");
const config = require("config");

db = function () {
  const dbUrl = config.get("dbUrl");
  mongoose

    .connect(dbUrl)
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.log(`Couldn't connect to MongoDB - ${err}`));
};

module.exports = db;
