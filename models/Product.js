const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/sequilize')
const { Category } = require('./Category')
const { ProductCategory } = require('./relations/ProductCategory')

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
    model: ProductCategory,
  },
  foreignKey: 'products_id',
  constraints: true,
})

Category.belongsToMany(Product, {
  through: {
    model: ProductCategory,
  },
  foreignKey: 'categories_id',
  constraints: true,
})
/* eslint-enable */
module.exports = {
  Product,
}
