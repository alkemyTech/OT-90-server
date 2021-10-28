'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Members', [
      {
        name: 'Julian Alvarez',
        image: 'https://image.example001.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Leonardo Ponzio',
        image: 'https://image.example002.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Members', null, {})
  }
};
