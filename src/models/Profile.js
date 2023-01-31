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
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      bio: {
        type: DataTypes.STRING(500),
      },
      private: {
        type: DataTypes.BOOLEAN,
      },
      profilePicture: {
        type: DataTypes.TEXT,
      },
      storyProfilePicture: {
        type: DataTypes.TEXT,
      },
      thumbnailProfilePicture: {
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
