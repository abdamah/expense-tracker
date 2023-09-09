const express = require("express");
const expenses = require("../routes/expenses");
const categories = require("../routes/categories");

const router = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api/expenses", expenses);
  app.use("/api/categories", categories);
};

module.exports = router;
