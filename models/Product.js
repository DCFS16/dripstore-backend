const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/sequilize')
const { Category } = require('./Category')
/* eslint-disable */
const { Product_Category } = require('./relations/Product_Category')
const { Product_Order } = require('./relations/Product_Order')
const { Order } = require('./Order')
/* eslint-enable */
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
/* eslint-disable */
Product.belongsToMany(Category, {
  through: {
    model: Product_Category,
  },
  foreignKey: 'products_id',
  constraints: true,
})

Category.belongsToMany(Product, {
  through: {
    model: Product_Category,
  },
  foreignKey: 'categories_id',
  constraints: true,
})

Product.belongsToMany(Order, {
  through: {
    model: Product_Order,
  },
  foreignKey: 'products_id',
  constraints: true,
})

Order.belongsToMany(Product, {
  through: {
    model: Product_Order,
  },
  foreignKey: 'order_id',
  constraints: true,
})






/* eslint-enable */
module.exports = {
  Product,
}
