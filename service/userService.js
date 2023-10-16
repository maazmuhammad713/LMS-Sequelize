const { models } = require("../models/definations");

module.exports = {
  getUsers: async () => {
    const result = await models.user.findAll();
    return result;
  },
  createUser: async (data) => {
    // console.log("data", data);
    const result = await models.user.create({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
    });
    // console.log("result", result);
    return result;
  },
};
