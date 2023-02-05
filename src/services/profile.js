const db = require("../models");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");

const createProfile = async (
  userId,
  { first_name, last_name, user_name, gender, dob, profile_picture }
) => {
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

    const buf = Buffer.from(profile_picture, "base64");

    const buf_story_profile_picture = await sharp(buf)
      .resize(110, 110)
      .toBuffer();
    const buf_thumbnail_profile_picture = await sharp(buf)
      .resize(320, 320)
      .toBuffer();

    const story_profile_picture = buf_story_profile_picture.toString("base64");
    const thumbnail_profile_picture =
      buf_thumbnail_profile_picture.toString("base64");

    await db.Profile.create({
      id: uuidv4(),
      user_id: userId,
      first_name,
      last_name,
      user_name,
      gender,
      dob,
      profile_picture,
      story_profile_picture,
      thumbnail_profile_picture,
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
