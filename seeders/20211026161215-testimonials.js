'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Testimonials', [{
      name: 'Julian Alvarez',
      image: 'https://www.gaceta.unam.mx/wp-content/uploads/2021/08/210823-Com1-des-f1-trabajo-social.jpg',
      content: 'Somos más mejoró mi calidad de vida',
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      name: 'Juan Carlos',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCTQShRVuGPdw1B2kcxH5WgdQw0C1zclM1Iw&usqp=CAU',
      content: 'Estoy muy agradecido con la oportunidad que me brindaron',
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      name: 'Martin Migoya',
      image: 'https://imagenes.elpais.com/resizer/ncwmBbRn5sM2zpGATp863tqQA64=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/LGHXDYMSQKEMLQH3YFI5OK3MI4.jpg',
      content: 'Orgulloso de formar parte de este proyecto',
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Testimonials', null, {});
  }
};
