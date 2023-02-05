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
      first_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      bio: {
        type: DataTypes.STRING(500),
      },
      gender: {
        type: DataTypes.STRING(10),
      },
      dob: {
        type: DataTypes.DATEONLY,
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
      tableName: "tbl_profiles",
      freezeTableName: true,
      underscored: true,
    }
  );

  return Profile;
};
