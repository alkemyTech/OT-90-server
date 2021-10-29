'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Slides', [
      {
        imageURL:'https://drive.google.com/file/d/1VlYY05X9h0M_WAGH0h7lYiESRkYchaln/view?usp=sharing',
        text: 'Foto1',
        order: 1,
        organizationID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageURL:'https://drive.google.com/file/d/1R2YRGJ9BGLFCSu2luWQ8ObR5l_JTihjk/view?usp=sharing',
        text: 'Foto2',
        order: 1,
        organizationID: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageURL:'https://drive.google.com/file/d/1S1AurINBtoSmI8qEBxhrXAW9m34rsF5p/view?usp=sharing',
        text: 'Foto3',
        order: 1,
        organizationID: 1,
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
