const { models } = require("../models/definations");

module.exports = {
  createCourseTeacher: async (data) => {
    const result = await models.TeacherCourse.create({
      teacherID: data.teacherID,
      courseID: data.courseID,
    });
    return result;
  },
  getCoursesTaughtByTeacher: async (data) => {
    const result = await models.course.findAll({
      include: [
        {
          model: models.teacher,
          as: "Teacher",
          where: { id: data },
        },
      ],
    });
    return result;
  },
  getTeachersOfCourse: async (data) => {
    const result = await models.teacher.findAll({
      include: [
        {
          model: models.course,
          as: "Course",
          where: { id: data },
        },
      ],
    });
    return result;
  },
};
