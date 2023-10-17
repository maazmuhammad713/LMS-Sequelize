const { DataTypes } = require("sequelize");

let sequelize = require("../../../common/dbConnection");

const course = sequelize.define(
  "course",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "course",
  }
);
module.exports = course;
