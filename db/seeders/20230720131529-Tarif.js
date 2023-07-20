/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tarifes = [
      {
        dayOff: 100,
        weekend: 200,
        peopleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dayOff: 200,
        weekend: 350,
        peopleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dayOff: 100,
        weekend: 100,
        peopleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dayOff: 150,
        weekend: 250,
        peopleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Tarifs', tarifes, {});
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
