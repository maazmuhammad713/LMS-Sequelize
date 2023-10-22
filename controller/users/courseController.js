var courseService = require("../../service/courseService");

module.exports = {
  getCourses: async (req, res) => {
    const data = await courseService.getCourses();
    res.send(data);
  },
  getCourseById: async (req, res) => {
    const courseId = req.params.id;
    const course = await courseService.getCourseById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(course);
  },
  createCourse: async (req, res) => {
    const result = await courseService.createCourse(req.body);
    res.json(result);
  },
};
