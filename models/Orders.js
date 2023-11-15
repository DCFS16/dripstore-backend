const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/sequilize')

const Orders = sequelize.define('orders', {
      date:{
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      employee: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      product: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
      },
}, {
  timestamps: false,
})

module.exports = {
  Orders,
}
