var express = require("express");
const {
  createTeacher,
  getTeachers,
  teachWC,
} = require("../controller/users/teacherController");

var router = express.Router();

/* GET users listing. */
router.get("/getTeachers", getTeachers);
router.post("/createTeacher", createTeacher);
router.post("/teachWC", teachWC);

module.exports = router;
