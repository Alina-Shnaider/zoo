'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const people = [
      {
        name: 'Дети',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Взрослые',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Пенсионеры',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Студенты',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
    await queryInterface.bulkInsert('People', people, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
