const db = require("../models");

const logout = async (user) => {
  try {
    await db.JwtTokenList.destroy({ where: { user_id: user.id } });

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = { logout };
