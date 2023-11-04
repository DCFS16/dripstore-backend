const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/sequilize");

const Category = sequelize.define('Category', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  timestamps: false
});

module.exports = {
  Category,
}
