'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Usuario1',
      lastName: 'Demo',
      email: 'test@test1.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-10-01 11:09:01',
      updatedAt: '2021-10-01 11:09:01'
    },{
      firstName: 'Usuario2',
      lastName: 'Demo2',
      email: 'test@test2.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-10-02 11:09:01',
      updatedAt: '2021-10-02 11:09:01'
    },{
      firstName: 'Usuario3',
      lastName: 'Demo3',
      email: 'test@test3.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-10-03 11:09:01',
      updatedAt: '2021-10-03 11:09:01'
    },{
      firstName: 'Usuario4',
      lastName: 'Demo4',
      email: 'test@test4.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-10-04 11:09:01',
      updatedAt: '2021-10-04 11:09:01'
    },{
      firstName: 'Usuario5',
      lastName: 'Demo5',
      email: 'test@test5.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-10-05 11:09:01',
      updatedAt: '2021-10-05 11:09:01'
    },{
      firstName: 'Usuario6',
      lastName: 'Demo6',
      email: 'test@test6.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-10-06 11:09:01',
      updatedAt: '2021-10-06 11:09:01'
    },{
      firstName: 'Usuario7',
      lastName: 'Demo7',
      email: 'test@test7.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-10-07 11:09:01',
      updatedAt: '2021-10-07 11:09:01'
    },{
      firstName: 'Usuario8',
      lastName: 'Demo8',
      email: 'test@test8.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-10-08 11:09:01',
      updatedAt: '2021-10-08 11:09:01'
    },{
      firstName: 'Usuario9',
      lastName: 'Demo9',
      email: 'test@test9.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-10-09 11:09:01',
      updatedAt: '2021-10-09 11:09:01'
    },{
      firstName: 'Usuario10',
      lastName: 'Demo10',
      email: 'test@test10.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-10-10 11:09:01',
      updatedAt: '2021-10-10 11:09:01'
    },{
      firstName: 'Usuario11',
      lastName: 'Demo11',
      email: 'test@test11.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-10-11 11:09:01',
      updatedAt: '2021-10-11 11:09:01'
    },{
      firstName: 'Usuario12',
      lastName: 'Demo13',
      email: 'test@test12.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-10-12 11:09:01',
      updatedAt: '2021-10-12 11:09:01'
    },{
      firstName: 'Usuario13',
      lastName: 'Demo14',
      email: 'test@test13.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-10-13 11:09:01',
      updatedAt: '2021-10-13 11:09:01'
    },{
      firstName: 'Usuario14',
      lastName: 'Demo15',
      email: 'test@test14.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-10-14 11:09:01',
      updatedAt: '2021-10-14 11:09:01'
    },{
      firstName: 'Usuario15',
      lastName: 'Demo16',
      email: 'test@test15.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-10-15 11:09:01',
      updatedAt: '2021-10-15 11:09:01'
    },{
      firstName: 'Usuario16',
      lastName: 'Demo1',
      email: 'test@test16.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-11-16 11:09:01',
      updatedAt: '2021-10-16 11:09:01'
    },{
      firstName: 'Usuario17',
      lastName: 'Demo17',
      email: 'test@test17.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-10-17 11:09:01',
      updatedAt: '2021-10-17 11:09:01'
    },{
      firstName: 'Usuario18',
      lastName: 'Demo18',
      email: 'test@test18.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-10-18 11:09:01',
      updatedAt: '2021-10-18 11:09:01'
    },{
      firstName: 'Usuario19',
      lastName: 'Demo19',
      email: 'test@test19.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-10-19 11:09:01',
      updatedAt: '2021-10-19 11:09:01'
    },{
      firstName: 'Usuario20',
      lastName: 'Demo20',
      email: 'test@test20.com',
      // Important: Password not encrypted yet! 
      password: '1234',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: '2021-10-20 11:09:01',
      updatedAt: '2021-10-20 11:09:01'
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
