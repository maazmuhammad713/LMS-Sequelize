var express = require("express");
const {
  createCourseTeachers,
  getTeachersOfCourse,
  getCoursesTaughtByTeacher,
  createCoursesTeacher,
} = require("../controller/users/courseTeacherController");

var router = express.Router();

/* GET users listing. */
router.post("/course_teachers", createCourseTeachers);
router.post("/courses_teacher", createCoursesTeacher);
router.get("/teacher/:teacherID/courses", getCoursesTaughtByTeacher);
router.get("/course/:courseID/teachers", getTeachersOfCourse);

module.exports = router;
