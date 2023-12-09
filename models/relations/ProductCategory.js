const { DataTypes } = require('sequelize')
const { sequelize } = require('../../config/sequilize')

const ProductCategory = sequelize.define('Product_Category', {
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

module.exports = { ProductCategory }
