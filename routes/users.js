var express = require("express");

const { getUser, createUser } = require("../controller/users/userController");
var router = express.Router();

/* GET users listing. */
router.get("/", getUser);
router.post("/createUser", createUser);

module.exports = router;
