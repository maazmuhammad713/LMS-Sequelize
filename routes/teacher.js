var express = require("express");
const {
  createTeacher,
  getTeachers,
  teachWC,
  findAllTeachers,
} = require("../controller/users/teacherController");

var router = express.Router();

/* GET users listing. */
router.get("/getTeachers", getTeachers);
router.post("/createTeacher", createTeacher);
// router.post("/teachWC", teachWC);
// router.post("/findAllTeachers", findAllTeachers);

module.exports = router;
