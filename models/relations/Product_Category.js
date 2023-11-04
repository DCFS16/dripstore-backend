const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/sequilize");
const { Category } = require('../Category');
const { Product } = require('../Product');

const Product_Category = sequelize.define('Product_Category', {
  products_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id'
    }
  },

  categories_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'id'
    }
  }
}, {
  timestamps: false
}, {
  tableName: 'product_categories'
})

module.exports = { Product_Category, }
