const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/sequilize')
const { Category } = require('./Category')
const { Product_Category } = require('./relations/Product_Category') // eslint-disable-line no-use-before-define

const Product = sequelize.define('Product', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: false,
  },
}, {
  timestamps: false,
})

Product.belongsToMany(Category, {
  through: {
    model: Product_Category, // eslint-disable-line no-use-before-define
  },
  foreignKey: 'products_id',
  constraints: true,
})

Category.belongsToMany(Product, {
  through: {
    model: Product_Category, // eslint-disable-line no-use-before-define
  },
  foreignKey: 'categories_id',
  constraints: true,
})

module.exports = {
  Product,
}
