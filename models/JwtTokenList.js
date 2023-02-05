const { Model } = require("sequelize");

module.exports = function JwtTokenListModel(sequelize, DataTypes) {
  class JwtTokenList extends Model {}

  JwtTokenList.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "JwtTokenList",
      tableName: "tbl_jwt_token_list",
      freezeTableName: true,
      underscored: true,
    }
  );

  return JwtTokenList;
};
