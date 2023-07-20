/** @type {import('sequelize-cli').Migration} */
const data = require('../animalsArr');

module.exports = {
  async up(queryInterface) {
    const arrAnimals = data.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Animals', arrAnimals, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
