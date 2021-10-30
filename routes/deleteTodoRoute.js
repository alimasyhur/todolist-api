const router = require("express").Router();
const Todo = require("../Schema/Todo");
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.status(200).json({ message: "Todo Deleted" });
});

module.exports = router;
