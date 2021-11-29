"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }

  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: {
            args: true,
            msg: "The email has an invalid format.",
          },
          notEmpty: true,
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "user",
        validate: {
          notEmpty: true,
        },
      },
      password: {
        type: DataTypes.STRING,
      },
      password_reset_token: {
        type: DataTypes.STRING,
      },
      password_reset_expires: {
        type: DataTypes.BIGINT,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
