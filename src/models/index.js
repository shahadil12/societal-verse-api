const { Sequelize, DataTypes } = require("sequelize");

const commentModel = require("./Comment");
const followerModel = require("./Follower");
const followRequestModel = require("./Followrequest");
const likeModel = require("./Like");
const messageModel = require("./Message");
const postModel = require("./Post");
const profileModel = require("./Profile");
const storyModel = require("./Story");
const userModel = require("./User");
const JwtTokenListModel = require("./JwtTokenList");
const SessionStoreModel = require("./SessionStore");

const config = require("../database/config/index")[process.env.NODE_ENV];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  { host: config.host, dialect: config.dialect }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Comment = commentModel(sequelize, DataTypes);
db.Follower = followerModel(sequelize, DataTypes);
db.FollowRequest = followRequestModel(sequelize, DataTypes);
db.Like = likeModel(sequelize, DataTypes);
db.Message = messageModel(sequelize, DataTypes);
db.Post = postModel(sequelize, DataTypes);
db.Profile = profileModel(sequelize, DataTypes);
db.Story = storyModel(sequelize, DataTypes);
db.User = userModel(sequelize, DataTypes);
db.JwtTokenList = JwtTokenListModel(sequelize, DataTypes);
db.SessionStore = SessionStoreModel(sequelize, DataTypes);

module.exports = db;
