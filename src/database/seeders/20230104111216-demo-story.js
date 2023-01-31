"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Stories", [
      {
        id: "8d8bc566-6a75-4f36-914e-6d4cfec8411b",
        userId: "8d8bc566-6a75-4f36-914e-6d4cfec8466b",
        picture:
          "https://images.unsplash.com/photo-1672327339029-50bd8f56b4e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return await queryInterface.bulkDelete("Stories", null, {});
  },
};
