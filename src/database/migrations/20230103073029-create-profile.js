"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Profiles", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.UUID,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      bio: {
        type: Sequelize.STRING(500),
      },
      private: {
        type: Sequelize.BOOLEAN,
      },
      profilePicture: {
        type: Sequelize.TEXT,
      },
      storyProfilePicture: {
        type: Sequelize.TEXT,
      },
      thumbnailProfilePicture: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("Profiles");
  },
};
