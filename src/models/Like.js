const { Model } = require("sequelize");

module.exports = function likeModel(sequelize, DataTypes) {
  class Like extends Model {}

  Like.init(
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
      postId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Post",
          key: "id",
        },
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
      modelName: "Like",
    }
  );

  return Like;
};
