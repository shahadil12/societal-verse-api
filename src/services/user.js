const db = require("../models");
const { v4: uuidv4 } = require("uuid");

const deleteUser = async (userId) => {
  try {
    await db.User.destroy({ where: { id: userId } });

    return { success: true };
  } catch (error) {
    console.log(error);
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
    return { success: false, error };
  }
};

module.exports = { follow, deleteUser };
