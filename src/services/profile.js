const db = require("../models");
const { v4: uuidv4 } = require("uuid");

const createProfile = async (userId) => {
  try {
    const existingProfile = await db.Profile.findOne({
      where: { user_id: userId },
    });
    if (existingProfile) {
      return {
        success: false,
        error: "Profile already exists",
      };
    }

    const user = await db.User.findOne({ where: { id: userId } });

    await db.Profile.create({
      id: uuidv4(),
      user_id: userId,
      full_name: user.full_name,
      private: false,
    });

    return { success: true, message: "profile created successfully" };
  } catch (error) {
    return { success: false, error };
  }
};

const profileSuggestion = async () => {
  try {
    const profiles = await db.Profile.findAll({ limit: 15 });

    return { success: true, profiles };
  } catch (error) {
    return { success: false, error };
  }
};

const showProfile = async (userId) => {
  try {
    const profile = await db.Profile.findOne({
      where: { user_id: userId },
    });

    return { success: true, profile };
  } catch (error) {
    return { success: false, error };
  }
};

const showProfilePosts = async (userId) => {
  try {
    const posts = await db.Post.findAll({ where: { user_id: userId } });

    return { success: true, posts };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  createProfile,
  profileSuggestion,
  showProfile,
  showProfilePosts,
};
