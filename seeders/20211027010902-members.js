'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Members', [
      {
        name: 'Julian Alvarez',
        image: 'https://centromedicomontemar.cl/wp-content/uploads/2015/06/sin-perfil.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Leonardo Ponzio',
        image: 'https://centromedicomontemar.cl/wp-content/uploads/2015/06/sin-perfil.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Members', null, {})
  }
};
