const { DataTypes } = require('sequelize')
const { sequelize } = require('../../config/sequilize')

/* eslint-disable */
const Product_Category = sequelize.define('Product_Category', {
  products_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'products',
      key: 'id',
    },
  },

 /* eslint-enable */

  categories_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'categories',
      key: 'id',
    },
  },
}, {
  timestamps: false,
}, {
  tableName: 'product_categories',
})
/* eslint-disable */
module.exports = { Product_Category }
/* eslint-enable */
