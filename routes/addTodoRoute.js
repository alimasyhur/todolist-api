const router = require("express").Router();
const Todo = require("../Schema/Todo");
router.post("/", async (req, res) => {
  const { todo } = req.body;
  const newTodo = await Todo.create({ todo });
  res.status(200).json(newTodo);
});

module.exports = router;
