const studentService = require("../../service/studentService");
const userService = require("../../service/userService");

module.exports = {
  getStudents: async (req, res) => {
    const data = await studentService.getStudents();
    res.send(data);
  },
  createStudent: async (req, res) => {
    const { firstName, lastName, email, phoneNumber, ...Student } = req.body;

    const user = await userService.createUser(req.body);
    // console.log("maaz", user);
    const student = await studentService.createStudent({
      userID: user.id,
      rollNumber: Student.rollNumber,
      semester: Student.semester,
      department: Student.department,
    });
    // console.log(student)
    //console.log(req.body);
    res.send(student);
  },
};
