'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Entries', [{
      name: 'nameuno',
      content: 'contenidouno',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      categoryId: 1,
      type: 'event',
      deletedAt: new Date,
    },
    {
      name: 'namedos',
      content: 'contenidodos',
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      categoryId: 2,
      type: 'news',
      deletedAt: new Date,
    }], {});
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