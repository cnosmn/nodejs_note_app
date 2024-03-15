const express = require("express");
const router = express.Router();

const {getAllTask,createTask,getSingleTask,patchTask,deleteTask} = require("../controllers/task_controller");

router.get("/",getAllTask);

router.post("/",createTask);

router.get("/:id",getSingleTask);

router.patch("/:id",patchTask);

router.delete("/:id",deleteTask);


module.exports = router;