'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Taller',
        description: 'Novedades relacionadas a los talleres',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Paseos',
        description: 'Novedades relacionadas a los paseos',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {})
  }
}