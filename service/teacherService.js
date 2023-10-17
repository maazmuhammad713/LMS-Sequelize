const { models } = require("../models/definations");
const { Op } = require("sequelize");
// const course = require("../models/definations/user/courses");

module.exports = {
  getTeachers: async () => {
    const result = await models.teacher.findAll({
      include: { model: models.course, as: "Course" },
    });
    // result.forEach((data) => console.log(data.toJSON()));
    return result;
  },
  createTeacher: async (data) => {
    const result = await models.teacher.create(data);
    return result;
  },
  // teachWC: async () => {
  //   const currentTeacher = await models.teacher.findOne({
  //     where: { specialization: "Physics" },
  //   });
  //   const teacherWC = await models.course.findOne({
  //     where: { subject: "Mechanics" },
  //   });
  //   currentTeacher.addCourse(teacherWC);
  //   return currentTeacher.getCourse();
  // },
  // findAllTeachers: async () => {
  //   const currentTeacher = await models.teacher.findOne({
  //     where: { specialization: "Chemistry" },
  //   });
  //   const teacherWC = await models.course.findAll({
  //     where: { subject: { [Op.or]: ["Mechanics", "Bio Chemistry"] } },
  //   });
  //   currentTeacher.addCourse(teacherWC);
  //   return currentTeacher.getCourse();
  // },
};
