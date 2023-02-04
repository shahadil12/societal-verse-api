const { Model } = require("sequelize");

module.exports = function profileModel(sequelize, DataTypes) {
  class Profile extends Model {}

  Profile.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio: {
        type: DataTypes.STRING(500),
      },
      private: {
        type: DataTypes.BOOLEAN,
      },
      profile_picture: {
        type: DataTypes.TEXT,
      },
      story_profile_picture: {
        type: DataTypes.TEXT,
      },
      thumbnail_profile_picture: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );

  return Profile;
};
