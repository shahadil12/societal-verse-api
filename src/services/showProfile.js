const db = require("../models");

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

module.exports = { showProfile };
