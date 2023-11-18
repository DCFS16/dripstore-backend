const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/sequilize');

const Product_Order = sequelize.define('Product_Order', {
  products_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'products',
      key: 'id',
    },
  },

  order_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'order',
      key: 'id',
    },
  },
}, {
  timestamps: true,
}, {
  tableName: 'product_order',
})

module.exports = { Product_Order }
