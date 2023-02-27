const { Model } = require("sequelize");

module.exports = function sessionStoreModel(sequelize, DataTypes) {
  class SessionStore extends Model {}

  SessionStore.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      socket_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      user_id: {
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
      modelName: "SessionStore",
      tableName: "tbl_session_store",
      freezeTableName: true,
      underscored: true,
    }
  );

  return SessionStore;
};
