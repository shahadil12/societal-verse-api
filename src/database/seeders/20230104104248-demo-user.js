"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Users", [
      {
        id: "8d8bc566-6a75-4f36-914e-6d4cfec8466b",
        email: "example@example.com",
        password: "12345678",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return await queryInterface.bulkDelete("Users", null, {});
  },
};
