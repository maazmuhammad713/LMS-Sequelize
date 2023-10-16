const { models } = require("../models/definations");

module.exports = {
  getStudents: async () => {
    const result = await models.student.findAll();
    return result;
  },
  createStudent: async (data) => {
    const result = await models.student.create(data);
    return result;
  },
};
