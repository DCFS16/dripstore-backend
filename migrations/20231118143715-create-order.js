'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {

      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },

      user_id: {
        type: Sequelize.INTEGER,
      },

      totalOrder: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false
      }

    }, {
      timestamps: true,
    })

    await queryInterface.createTable('product_orders', {
      products_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
      },

      orders_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'orders',
          key: 'id',
        },
      },
    }, {
      timestamps: true,
    })

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('orders');
    await queryInterface.dropTable('product_orders');
  }
};
