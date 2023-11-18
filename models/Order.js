const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequilize');

const Order = sequelize.define('order', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
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
