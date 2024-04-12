const express = require("express");
const router = express.Router();

// controllers
const {
  getAllTask,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

// router.get("/", getAllTask); we can do this approach
// but i prefer chaining
router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
