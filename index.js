const express = require("express");
const mongoose = require("mongoose");

const PORT = 3000;
const app = express();
const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

app.use(express.json());

mongoose.connect("mongodb://localhost/todolist", connectionOptions)
    .then(() => console.log("Connected Successfully"))
    .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT);
})