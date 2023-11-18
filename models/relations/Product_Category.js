const { DataTypes } = require('sequelize')
const { sequelize } = require('../../config/sequilize')

const Product_Category = sequelize.define('Product_Category', { // eslint-disable-line no-use-before-define
  products_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'products',
      key: 'id',
    },
  },

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

module.exports = { Product_Category }  // eslint-disable-line no-use-before-define
