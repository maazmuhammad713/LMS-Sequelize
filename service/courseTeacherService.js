const { models } = require("../models/definations");

module.exports = {
  createCourseTeachers: async (courseId, teacherIds) => {
    try {
      const relationships = teacherIds.map((teacherId) => ({
        teacherID: teacherId,
        courseID: courseId,
      }));
      const result = await models.TeacherCourse.bulkCreate(relationships);
      return result;
    } catch (error) {
      throw error;
    }
  },
  createCoursesTeacher: async (teacherId, courseIds) => {
    try {
      const relationships = courseIds.map((courseId) => ({
        teacherID: teacherId,
        courseID: courseId,
      }));
      const result = await models.TeacherCourse.bulkCreate(relationships);
      return result;
    } catch (error) {
      throw error;
    }
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
