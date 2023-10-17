var express = require("express");
const {
  createCourseTeacher,
  getTeachersOfCourse,
  getCoursesTaughtByTeacher,
} = require("../controller/users/courseTeacherController");

var router = express.Router();

/* GET users listing. */
router.post("/course_teacher", createCourseTeacher);
router.get("/teacher/:teacherID/courses", getCoursesTaughtByTeacher);
router.get("/course/:courseID/teachers", getTeachersOfCourse);

module.exports = router;
