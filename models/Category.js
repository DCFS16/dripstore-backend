const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/sequilize");

const Category = sequelize.define('Category', {
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
