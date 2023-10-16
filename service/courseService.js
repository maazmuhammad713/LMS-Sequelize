const { models } = require("../models/definations");

module.exports = {
  getCourses: async () => {
    const result = await models.course.findAll({
      include: { model: models.teacher, as: "teacher" },
    });
    return result;
  },
  getCourseById: async (courseID) => {
    const result = await models.course.findByPk(courseID);
    return result;
  },
  createCourse: async (data) => {
    const result = await models.course.create({
      title: data.title,
      description: data.description,
      instructor: data.instructor,
      duration: data.duration,
    });
    return result;
  },
};
