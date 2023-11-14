'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders', [
      {
        date: '2023-01-01',
        employee: 'John Doe',
        product: 'Laptop HP Envy',
        amount: 2,
        price: 1299.99,
        totalPrice: 2599.98,
      },
      {
        date: '2023-01-02',
        employee: 'Jane Smith',
        product: 'Monitor Dell UltraSharp',
        amount: 1,
        price: 499.99,
        totalPrice: 499.99,
      },
      {
        date: '2023-01-03',
        employee: 'Bob Johnson',
        product: 'Teclado Mecânico Corsair',
        amount: 3,
        price: 99.99,
        totalPrice: 299.97,
      },
      {
        date: '2023-01-04',
        employee: 'Alice Brown',
        product: 'Mouse Logitech G Pro',
        amount: 4,
        price: 69.99,
        totalPrice: 279.96,
      },
      {
        date: '2023-01-05',
        employee: 'Charlie Wilson',
        product: 'Roteador ASUS RT-AX88U',
        amount: 2,
        price: 249.99,
        totalPrice: 499.98,
      },
      {
        date: '2023-01-06',
        employee: 'Eva Martinez',
        product: 'Headset HyperX Cloud II',
        amount: 1,
        price: 99.99,
        totalPrice: 99.99,
      },
      {
        date: '2023-01-07',
        employee: 'David Lee',
        product: 'SSD Samsung 970 EVO',
        amount: 3,
        price: 149.99,
        totalPrice: 449.97,
      },
      {
        date: '2023-01-08',
        employee: 'Sophia Rodriguez',
        product: 'Impressora Epson EcoTank',
        amount: 2,
        price: 299.99,
        totalPrice: 599.98,
      },
      {
        date: '2023-01-09',
        employee: 'Mason Davis',
        product: 'Webcam Logitech C920',
        amount: 1,
        price: 79.99,
        totalPrice: 79.99,
      },
      {
        date: '2023-01-10',
        employee: 'Olivia Wilson',
        product: 'Placa de Vídeo NVIDIA RTX 3080',
        amount: 4,
        price: 699.99,
        totalPrice: 2799.96,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', null, {});
  }
};
