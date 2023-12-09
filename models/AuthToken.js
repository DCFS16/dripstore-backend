const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/sequilize')
const { User } = require('./User')

const AuthToken = sequelize.define('AuthToken', {
  jwt: DataTypes.STRING,
  users_id: DataTypes.INTEGER,
}, {
  timestamps: false,
})

AuthToken.belongsTo(User, {
  foreignKey: 'users_id',
})

module.exports = {
  AuthToken,
}
