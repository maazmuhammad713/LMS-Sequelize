const { DataTypes } = require("sequelize");
let sequelize = require("../../../common/dbConnection");

const teacher = sequelize.define(
  "teacher",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    specialization: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "teacher",
  }
);
module.exports = teacher;
