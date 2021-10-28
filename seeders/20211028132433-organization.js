'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Organizations', [
      {
        name: 'Somos mas',
        image: 'https://drive.google.com/file/d/1-j70Zmn2B1-0T_67JHJbNLKkI9sACMNi/view?usp=sharing',
        phone: '0114568923',
        address: 'Julieta Lanteri 1605',
        welcomeText: 'Bienvenidos a nuestro Portal',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
