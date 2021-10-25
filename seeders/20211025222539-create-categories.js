'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Taller',
        description: 'Novedades relacionadas a los talleres'
      },
      {
        name: 'Paseos',
        description: 'Novedades relacionadas a los paseos'
      }], {}); 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
