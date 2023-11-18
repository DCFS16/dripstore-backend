const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequilize');

const Order = sequelize.define('orders', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },

  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id'
    }
  },

  totalOrder: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false
  },

}, {
  timestamps: true
})

module.exports = {
  Order,
}
