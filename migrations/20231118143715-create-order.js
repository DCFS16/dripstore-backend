'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order', {

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

    await queryInterface.createTable('product_order', {
      products_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
      },

      order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'order',
          key: 'id',
        },
      },
    }, {
      timestamps: true,
    })

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('order');
    await queryInterface.dropTable('product_order');
  }
};
