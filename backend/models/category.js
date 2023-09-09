const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Category = mongoose.model("Category", categorySchema);

exports.categorySchema = categorySchema;
exports.Category = Category;
