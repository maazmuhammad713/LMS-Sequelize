var express = require("express");
const {
  createCourseTeacher,
  getBoth,
  getCoursesTaughtByTeacher,
} = require("../controller/users/courseTeacherController");

var router = express.Router();

/* GET users listing. */
// router.get("/get", getBoth);
router.post("/course_teacher", createCourseTeacher);
router.get("/teacher/:teacherID/courses", getCoursesTaughtByTeacher);

module.exports = router;
