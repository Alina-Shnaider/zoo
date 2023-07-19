'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tarifs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dayOff: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      weekend: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      peopleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'People', key: 'id' },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tarifs');
  },
};
