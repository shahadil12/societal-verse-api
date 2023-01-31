const { Model } = require("sequelize");

module.exports = function followRequestModel(sequelize, DataTypes) {
  class FollowRequest extends Model {}

  FollowRequest.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      requesterId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      requestedId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "FollowRequest",
    }
  );

  return FollowRequest;
};
