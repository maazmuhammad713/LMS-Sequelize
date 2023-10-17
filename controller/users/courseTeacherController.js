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
};
