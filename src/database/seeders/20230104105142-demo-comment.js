"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Comments", [
      {
        id: "8d8bc566-6a75-4f36-914e-6d4cfec8488b",
        userId: "8d8bc566-6a75-4f36-914e-6d4cfec8466b",
        postId: "8d8bc566-6a75-4f36-914e-6d4cfec8499b",
        comment: "hello hii",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return await queryInterface.bulkDelete("Comments", null, {});
  },
};
