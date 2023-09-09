const express = require("express");
const { Category } = require("../models/category");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let category = new Category({
      name: req.body.name,
    });
    category = await category.save();

    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().sort("name");
    res.send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get single category
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) res.status(400).send("Invalid id param");

    const category = await Category.findById(id);
    if (!category) return res.status(404).send(`Category with ${id} not found`);

    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update category
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) res.status(400).send("Invalid id param");

    const category = await Category.findByIdAndUpdate(
      id,
      {
        description: req.body.description,
        amount: req.body.amount,
      },
      {
        new: true,
      }
    );
    if (!category) return res.status(404).send(`Category with ${id} not found`);

    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete category
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) res.status(400).send("Invalid id param");

    const category = await Category.findByIdAndRemove(id);
    if (!category) return res.status(404).send(`Category with ${id} not found`);

    res.send(`Expense with ${category._id} has been deleted: `);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
