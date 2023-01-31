const { Model } = require("sequelize");

module.exports = function followerModel(sequelize, DataTypes) {
  class Follower extends Model {}

  Follower.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      followingId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      followerId: {
        type: DataTypes.UUID,
        allowNull: false,
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
      modelName: "Follower",
    }
  );

  return Follower;
};
