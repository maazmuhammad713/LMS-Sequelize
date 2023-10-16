const userService = require("../../service/userService");

module.exports = {
  getUser: async (req, res) => {
    const data = await userService.getUsers();
    res.send(data);
  },
  createUser: async (req, res) => {
    const result = await userService.createUser(req.body);
    res.json(result);
  },
};
