'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Organizations', [
      {
        name: 'Somos mas',
        image: 'https://lh4.googleusercontent.com/2s9-R5f8AneeTQzyYxcplDTGLXy6t4wjXZDu2rBnvq_PZV-tGz0y9N03S6XWmxokFY6sw3xUOLHazCa6aS34=w1360-h657',
        phone: '0114568923',
        address: 'Julieta Lanteri 1605',
        welcomeText: 'Bienvenidos a nuestro Portal',
        urlFacebook: 'https://www.facebook.com/',
        urlLinkedin: 'https://www.linkedin.com/',
        urlInstagram: 'https://www.instagram.com/',
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
