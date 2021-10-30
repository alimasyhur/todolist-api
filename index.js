const express = require("express");
const cors = require("cors");
const PORT = 3000;
const app = express();
const todoRoutes = require("./routes/todoRoutes");
const addTodoRoute = require("./routes/addTodoRoute");
const deleteTodoRoute = require("./routes/deleteTodoRoute");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(cors());
app.use(bodyParser.json());
mongoose
  .connect(
    "mongodb+srv://todoDbUser:todoDbUser@todo-cluster.ndxwo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connection Established!!!");
  })
  .catch((err) => console.log(err));

app.use("/todo", todoRoutes);
app.use("/create", addTodoRoute);
app.use("/", deleteTodoRoute);
app.listen(PORT, () => {
  console.log("The server is listening on port " + PORT);
});
