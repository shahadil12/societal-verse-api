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
      following_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      follower_id: {
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
      tableName: "tbl_followers",
      freezeTableName: true,
      underscored: true,
    }
  );

  return Follower;
};
