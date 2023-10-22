const teacherService = require("../../service/teacherService");
const userService = require("../../service/userService");

module.exports = {
  getTeachers: async (req, res) => {
    const data = await teacherService.getTeachers();
    // data.forEach((data) => console.log(data.toJSON()));
    res.send(data);
  },
  createTeacher: async (req, res) => {
    const { firstName, lastName, email, phoneNumber, ...Teacher } = req.body;

    const user = await userService.createUser(req.body);

    const teacher = await teacherService.createTeacher({
      userID: user.id,
      specialization: Teacher.specialization,
    });

    res.send(teacher);
  },
  // teachWC: async (req, res) => {
  //   const data = await teacherService.teachWC();
  //   res.send(data);
  // },
  // findAllTeachers: async (req, res) => {
  //   const data = await teacherService.findAllTeachers();
  //   res.send(data);
  // },
};
