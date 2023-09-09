const express = require("express");
const Expense = require("../models/expense");
const { Category } = require("../models/category");

const router = express.Router();

// Create new Expense
router.post("/", async (req, res) => {
  const category = await Category.findById(req.body.category);
  if (!category) return res.status(404).send("Invalid category.");

  try {
    const expense = new Expense({
      description: req.body.description,
      amount: req.body.amount,
      category: category._id,
    });
    await expense.save();

    res.send(expense);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Get all expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find().populate("category");
    res.send(expenses);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get single expense
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) res.status(400).send("Invalid id param");

    const expense = await Expense.findById(id);
    if (!expense) return res.status(404).send(`Expense with ${id} not found`);

    res.send(expense);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update expense
router.put("/:id", async (req, res) => {
  const category = await Category.findById(req.body.category);
  if (!category) return res.status(404).send("Invalid category.");

  try {
    const id = req.params.id;

    if (!id) res.status(400).send("Invalid id param");

    const expense = await Expense.findByIdAndUpdate(
      id,
      {
        description: req.body.description,
        amount: req.body.amount,
        category: category._id,
      },
      {
        new: true,
      }
    );
    if (!expense) return res.status(404).send(`Expense with ${id} not found`);

    res.send(expense);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete expense
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) res.status(400).send("Invalid id param");

    const expense = await Expense.findByIdAndRemove(id);
    if (!expense) return res.status(404).send(`Expense with ${id} not found`);

    res.send(`Expense with ${expense._id} has been deleted: `);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
