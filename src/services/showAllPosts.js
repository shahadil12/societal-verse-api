const db = require("../models");

const showAllPosts = async () => {
  try {
    const posts = await db.Post.findAll({ limit: 10 });

    return { success: true, posts };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = { showAllPosts };
