const { Model } = require("sequelize");

module.exports = function storyModel(sequelize, DataTypes) {
  class Story extends Model {}

  Story.init(
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
      picture: {
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
      modelName: "Story",
      tableName: "tbl_strories",
      freezeTableName: true,
      underscored: true,
    }
  );

  return Story;
};
