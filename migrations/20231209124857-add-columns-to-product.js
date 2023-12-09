'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'products',
      'image',
      Sequelize.TEXT
    );

    await queryInterface.addColumn(
      'products',
      'discount',
      Sequelize.DECIMAL
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'products',
      'image',
    )

    await queryInterface.removeColumn(
      'products',
      'discount',
    )
  }
};
