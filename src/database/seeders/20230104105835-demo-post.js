"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Posts", [
      {
        id: "8d8bc566-6a75-4f36-914e-6d4cfec8499b",
        userId: "8d8bc566-6a75-4f36-914e-6d4cfec8466b",
        picture:
          "https://images.unsplash.com/photo-1672357867195-33fc57085af7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return await queryInterface.bulkDelete("Posts", null, {});
  },
};
