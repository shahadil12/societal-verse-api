const { Model } = require("sequelize");

module.exports = function messageModel(sequelize, DataTypes) {
  class Message extends Model {}

  Message.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      sender_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      receiver_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
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
      modelName: "Message",
      tableName: "tbl_messages",
      freezeTableName: true,
      underscored: true,
    }
  );

  return Message;
};
