"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tbl_profiles", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.UUID,
      },
      first_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      user_name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      bio: {
        type: Sequelize.STRING(500),
      },
      gender: {
        type: Sequelize.STRING(10),
      },
      dob: {
        type: Sequelize.DATEONLY,
      },
      private: {
        type: Sequelize.BOOLEAN,
      },
      profile_picture: {
        type: Sequelize.TEXT,
      },
      story_profile_picture: {
        type: Sequelize.TEXT,
      },
      thumbnail_profile_picture: {
        type: Sequelize.TEXT,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("tbl_profiles");
  },
};
