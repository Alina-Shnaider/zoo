/** @type {import('sequelize-cli').Migration} */
const data = require('../imagesArr');

module.exports = {
  async up(queryInterface, Sequelize) {
    const arrImages = data.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Images', arrImages, {});
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
