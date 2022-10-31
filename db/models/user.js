'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    best_score: DataTypes.INTEGER,
    last_score: DataTypes.INTEGER,
    games: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};