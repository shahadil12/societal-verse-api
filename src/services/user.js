const db = require("../models");
const { v4: uuidv4 } = require("uuid");

const deleteUser = async (userId) => {
  try {
    await db.User.destroy({ where: { id: userId } });

    return { success: true };
  } catch (error) {
    return { success: true, error };
  }
};

const follow = async (requester_id, requested_id) => {
  try {
    await db.FollowRequest.create({
      id: uuidv4(),
      requester_id,
      requested_id,
    });

    await db.Follower.create({
      id: uuidv4(),
      follower_id: requester_id,
      following_id: requested_id,
    });

    return { success: true, message: "followed successfully" };
  } catch (error) {
    return { success: false, error: error };
  }
};

const unfollow = async (requester_id) => {
  try {
    await db.FollowRequest.destroy({
      where: { requester_id: requester_id },
    });

    await db.Follower.destroy({
      where: { follower_id: requester_id },
    });

    return { success: true, message: "unfollowed user" };
  } catch (error) {
    return { success: false, error: error };
  }
};

const followingProfile = async (userId) => {
  try {
    const followings = await db.Follower.findAll({
      where: { follower_id: userId },
    });

    const followers = await db.Follower.findAll({
      where: { following_id: userId },
    });

    const followersProfile = await Promise.all(
      followers.map(async (follower) => {
        const profiles = await db.Profile.findAll({
          where: { user_id: follower.dataValues.follower_id },
        });
        return profiles;
      })
    );

    const followingProfile = await Promise.all(
      followings.map(async (following) => {
        const profiles = await db.Profile.findAll({
          where: { user_id: following.dataValues.following_id },
        });
        return profiles;
      })
    );

    const profiles = [...followersProfile, ...followingProfile];
    return { success: true, profiles };
  } catch (error) {
    return { success: false, error: error };
  }
};

module.exports = { follow, deleteUser, unfollow, followingProfile };
