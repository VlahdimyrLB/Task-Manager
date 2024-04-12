const express = require("express");
const app = new express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.static("./public"));
app.use(express.json()); // to get req.body

// any requests to paths starting with "/api/v1/tasks" will be handled by the routes "tasks"
app.use("/api/v1/tasks", tasks);

const port = 3000;

// makes the db connect first before listening to the port
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening to port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
