const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/sequilize");


const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: false
  },
}, {
  timestamps: false
});

module.exports = {
  Product,
}
