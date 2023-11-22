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

  orders_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'orders',
      key: 'id',
    },
  },
}, {
  timestamps: true,
}, {
  tableName: 'product_orders',
})

module.exports = { Product_Order }
