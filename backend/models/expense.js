const mongoose = require("mongoose");
const { categorySchema } = require("./category");

const expenseSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Expense", expenseSchema);
