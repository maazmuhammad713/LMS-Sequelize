var express = require("express");

const {
  getCourses,
  createCourse,
  getCourseById,
} = require("../controller/users/courseController");
var router = express.Router();

/* GET users listing. */
router.get("/getCourses", getCourses);
router.get("/getCourse/:id", getCourseById);
router.post("/createCourse", createCourse);

module.exports = router;
