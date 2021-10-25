'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Activities', [
          {
            name: 'Beca estímulo',
            content: 'los jóvenes reciben una beca estímulo que es supervisada por los tutores).'
          },{
            name: 'Acompañamiento escolar y familiar:',
            content: 'Los tutores son encargados de articular con la familia y con las escuelas de los jóvenes para monitorear el estado de los tutoreados)'
          },{
            name: 'Ayudantías',
            content: '(los que comienzan el 2do años del programa deben elegir una de las actividades que se realizan en la institución para acompañarla e ir conociendo como es el mundo laboral que les espera).'
          },
          
      ], {})

  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Activities', null, {});

  }
}
