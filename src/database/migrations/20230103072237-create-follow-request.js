"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("FollowRequests", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      requesterId: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      requestedId: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("FollowRequests");
  },
};
