const courseTeacherService = require("../../service/courseTeacherService");

module.exports = {
  createCourseTeachers: async (req, res) => {
    const { courseId, teacherIds } = req.body;
    const result = await courseTeacherService.createCourseTeachers(
      courseId,
      teacherIds
    );
    res.json(result);
  },
  createCoursesTeacher: async (req, res) => {
    const { teacherId, courseIds } = req.body;
    const result = await courseTeacherService.createCoursesTeacher(
      teacherId,
      courseIds
    );
    res.json(result);
  },
  getCoursesTaughtByTeacher: async (req, res) => {
    const { teacherID } = req.params;
    const result = await courseTeacherService.getCoursesTaughtByTeacher(
      teacherID
    );
    res.json(result);
  },
  getTeachersOfCourse: async (req, res) => {
    const { courseID } = req.params;
    const result = await courseTeacherService.getTeachersOfCourse(courseID);
    res.json(result);
  },
};
