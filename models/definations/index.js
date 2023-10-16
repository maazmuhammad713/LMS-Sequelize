let sequelize = require("../../common/dbConnection");
let user = require("./user/users");
let student = require("./user/student");
let teacher = require("./user/teacher");
let course = require("./user/courses");

const TeacherCourse = sequelize.define("teacher_course", {});

// relation btw user & student
user.hasOne(student, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
student.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});

//relation btw user & teacher
user.hasOne(teacher, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
teacher.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});

// many-to-many btw course and teacher
teacher.belongsToMany(course, {
  onDelete: "CASCADE",
  through: "TeacherCourse",
  as: "Course",
  foreignKey: { name: "teacherID", allowNull: false, unique: true },
});

course.belongsToMany(teacher, {
  onDelete: "CASCADE",
  through: "TeacherCourse",
  as: "Teacher",
  foreignKey: { name: "courseID", allowNull: false, unique: true },
});

const models = sequelize.models;

const db = {};
db.sequelize = sequelize;

module.exports = { db, models };
