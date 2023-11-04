'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    }, {
      timestamps: false
    })

    await queryInterface.createTable('products_categories', {
      products_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        }
      },

      categories_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id'
        }
      }
    }, {
      timestamps: false
    })

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('product_category');
    await queryInterface.dropTable('category');
  }
};
