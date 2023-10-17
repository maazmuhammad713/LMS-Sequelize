const courseTeacherService = require("../../service/courseTeacherService");

module.exports = {
  createCourseTeacher: async (req, res) => {
    const result = await courseTeacherService.createCourseTeacher(req.body);
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
