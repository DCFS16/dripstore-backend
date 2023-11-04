const { Sequelize } = require('sequelize')
const config = require('./config')

const {
  username,
  database,
  host,
  password,
  port
} = config.development


const sequelize = new Sequelize(
  database,
  username,
  password,
  {
    host: host,
    port: port,
    dialect: 'mysql',
  }
)

module.exports = {
  sequelize,
}
