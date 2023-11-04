const dotenv = require('dotenv')

dotenv.config()

const {
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_HOST,
  DATABASE_DIALECT,
} = process.env

module.exports = {
  development: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    dialect: 'mysql',
    Logging: true,
  },
  test: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    dialect: DATABASE_DIALECT,
    Logging: true,
  },
  production: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    dialect: DATABASE_DIALECT,
    Logging: false,
  },
}
