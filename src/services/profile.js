const db = require("../models");

const profile = async () => {
  try {
    const profiles = await db.Profile.findAll({ limit: 15 });

    return { success: true, profiles };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = { profile };
