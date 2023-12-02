'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('orders', 'createdAt', {
        type: Sequelize.DATE,
        allownull: false
      }),
    await queryInterface.addColumn('orders', 'updatedAt', {
        type: Sequelize.DATE,
        allownull: false
      }),
      await queryInterface.addColumn('Product_Orders', 'createdAt', {
        type: Sequelize.DATE,
        allownull: false
      }),
    await queryInterface.addColumn('Product_Orders', 'updatedAt', {
        type: Sequelize.DATE,
        allownull: false
      })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('orders', 'createdAt'),
    await queryInterface.removeColumn('orders', 'updatedAt'),
    await queryInterface.removeColumn('Product_Orders', 'createdAt'),
    await queryInterface.removeColumn('Product_Orders', 'updatedAt');
  }

};
