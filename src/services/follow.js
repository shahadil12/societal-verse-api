const db = require("../models");
const { v4: uuidv4 } = require("uuid");

const follow = async (requester_id, requested_id) => {
  try {
    await db.FollowRequest.create({
      id: uuidv4(),
      requester_id,
      requested_id,
    });

    return { success: true, message: "request send successfully" };
  } catch (error) {
    return { success: false, error };
  }
};
