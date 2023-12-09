/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
      phone: {
        type: Sequelize.STRING(13),
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      salt: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users')
  },
}
