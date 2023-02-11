const db = require("../models");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");

const createProfile = async (
  userId,
  { first_name, last_name, user_name, gender, bio, dob, profile_picture }
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
      bio,
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
    // TODO: get the people from my follower's list whom I am not following
    const profiles = await db.Profile.findAll({ limit: 15 });

    return { success: true, profiles };
  } catch (error) {
    return { success: false, error };
  }
};

const updateProfile = async (userId, attributes) => {
  try {
    const fileterdAttributes = Object.fromEntries(
      Object.entries(attributes).filter(([key, value]) => value !== null)
    );

    if (fileterdAttributes.profile_picture) {
      const buf = Buffer.from(fileterdAttributes.profile_picture, "base64");

      const buf_story_profile_picture = await sharp(buf)
        .resize(110, 110)
        .toBuffer();
      const buf_thumbnail_profile_picture = await sharp(buf)
        .resize(320, 320)
        .toBuffer();

      fileterdAttributes.story_profile_picture =
        buf_story_profile_picture.toString("base64");

      fileterdAttributes.thumbnail_profile_picture =
        buf_thumbnail_profile_picture.toString("base64");
    }

    await db.Profile.update(
      { ...fileterdAttributes },
      {
        where: { user_id: userId },
      }
    );

    return { success: true, message: "profile updated successfully" };
  } catch (error) {
    return { success: false, error };
  }
};

const showProfile = async (userId) => {
  try {
    const profile = await db.Profile.findOne({
      where: { user_id: userId },
    });

    const { count: followers } = await db.Follower.findAndCountAll({
      where: { following_id: userId },
    });

    const { count: following } = await db.Follower.findAndCountAll({
      where: { follower_id: userId },
    });

    return { success: true, profile, followers, following };
  } catch (error) {
    return { success: false, error };
  }
};

const showProfilePosts = async (userId) => {
  try {
    const onlyPosts = await db.Post.findAll({ where: { user_id: userId } });

    const posts = await Promise.all(
      onlyPosts.map(async (post) => {
        const { count: likes } = await db.Like.findAndCountAll({
          where: { post_id: post.id },
        });

        const comments = await db.Comment.findAll({
          attributes: ["comment", "updated_at"],
          where: { post_id: post.id },
        });

        return { post, comments, likes };
      })
    );

    return { success: true, posts };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  createProfile,
  profileSuggestion,
  updateProfile,
  showProfile,
  showProfilePosts,
};
