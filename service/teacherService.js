const { models } = require("../models/definations");
// const course = require("../models/definations/user/courses");

module.exports = {
  getTeachers: async () => {
    const result = await models.teacher.findAll({
      include: { model: models.course, as: "course" },
    });
    // result.forEach((data) => console.log(data.toJSON()));
    return result;
  },
  createTeacher: async (data) => {
    const result = await models.teacher.create(data);
    return result;
  },
  teachWC: async () => {
    const currentTeacher = await models.teacher.findOne({
      where: { subject: "phy" },
    });
    const teacherWC = await models.course.findOne({ where: { title: "math" } });
    currentTeacher.addCourse(teacherWC);
    return currentTeacher.getCourse();
  },
};
