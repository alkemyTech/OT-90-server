'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Usuario1',
      lastName: 'Demo1',
      email: 'test@test1.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$7Qqto80j4dIXkHXbvCkYAOpaKFEluNtq/v4iPQxiG1iLk65gZ5DJ2',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Usuario2',
      lastName: 'Demo2',
      email: 'test@test2.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$7Qqto80j4dIXkHXbvCkYAOpaKFEluNtq/v4iPQxiG1iLk65gZ5DJ2',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Usuario3',
      lastName: 'Demo3',
      email: 'test@test3.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$7Qqto80j4dIXkHXbvCkYAOpaKFEluNtq/v4iPQxiG1iLk65gZ5DJ2',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Usuario4',
      lastName: 'Demo4',
      email: 'test@test4.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$7Qqto80j4dIXkHXbvCkYAOpaKFEluNtq/v4iPQxiG1iLk65gZ5DJ2',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Usuario5',
      lastName: 'Demo5',
      email: 'test@test5.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$7Qqto80j4dIXkHXbvCkYAOpaKFEluNtq/v4iPQxiG1iLk65gZ5DJ2',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Usuario6',
      lastName: 'Demo6',
      email: 'test@test6.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$7Qqto80j4dIXkHXbvCkYAOpaKFEluNtq/v4iPQxiG1iLk65gZ5DJ2',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Usuario7',
      lastName: 'Demo7',
      email: 'test@test7.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$7Qqto80j4dIXkHXbvCkYAOpaKFEluNtq/v4iPQxiG1iLk65gZ5DJ2',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Usuario8',
      lastName: 'Demo8',
      email: 'test@test8.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$7Qqto80j4dIXkHXbvCkYAOpaKFEluNtq/v4iPQxiG1iLk65gZ5DJ2',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Usuario9',
      lastName: 'Demo9',
      email: 'test@test9.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$7Qqto80j4dIXkHXbvCkYAOpaKFEluNtq/v4iPQxiG1iLk65gZ5DJ2',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Usuario10',
      lastName: 'Demo10',
      email: 'test@test10.com',
      // Important: Password not encrypted yet! 
      password: '1234$10$51wtaNvSOSOmQa7sekJChuXKxe4udfVKXlfJpk1E21mzFI/sJJUaC10',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Usuario11',
      lastName: 'Demo11',
      email: 'test@test11.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$7Qqto80j4dIXkHXbvCkYAOpaKFEluNtq/v4iPQxiG1iLk65gZ5DJ2',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Usuario12',
      lastName: 'Demo12',
      email: 'test@test12.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$7Qqto80j4dIXkHXbvCkYAOpaKFEluNtq/v4iPQxiG1iLk65gZ5DJ2',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Usuario13',
      lastName: 'Demo13',
      email: 'test@test13.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$7Qqto80j4dIXkHXbvCkYAOpaKFEluNtq/v4iPQxiG1iLk65gZ5DJ2',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Usuario14',
      lastName: 'Demo14',
      email: 'test@test14.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$7Qqto80j4dIXkHXbvCkYAOpaKFEluNtq/v4iPQxiG1iLk65gZ5DJ2',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Usuario15',
      lastName: 'Demo15',
      email: 'test@test15.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$7Qqto80j4dIXkHXbvCkYAOpaKFEluNtq/v4iPQxiG1iLk65gZ5DJ2',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Usuario16',
      lastName: 'Demo16',
      email: 'test@test16.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$7Qqto80j4dIXkHXbvCkYAOpaKFEluNtq/v4iPQxiG1iLk65gZ5DJ2',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Usuario17',
      lastName: 'Demo17',
      email: 'test@test17.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$7Qqto80j4dIXkHXbvCkYAOpaKFEluNtq/v4iPQxiG1iLk65gZ5DJ2',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Usuario18',
      lastName: 'Demo18',
      email: 'test@test18.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$7Qqto80j4dIXkHXbvCkYAOpaKFEluNtq/v4iPQxiG1iLk65gZ5DJ2',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Usuario19',
      lastName: 'Demo19',
      email: 'test@test19.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$7Qqto80j4dIXkHXbvCkYAOpaKFEluNtq/v4iPQxiG1iLk65gZ5DJ2',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Usuario20',
      lastName: 'Demo20',
      email: 'test@test20.com',
      // Important: Password not encrypted yet! 
      password: '$2a$10$7Qqto80j4dIXkHXbvCkYAOpaKFEluNtq/v4iPQxiG1iLk65gZ5DJ2',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date(),
      updatedAt: new Date()
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
