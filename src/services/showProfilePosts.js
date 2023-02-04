const db = require("../models");

const showProfilePosts = async (userId) => {
  try {
    const posts = await db.Post.findAll({ where: { user_id: userId } });

    return { success: true, posts };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = { showProfilePosts };
