require("dotenv").config();

const config = {
  development: {
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.PG_HOST,
    dialect: process.env.DATABASE_DIALECT,
  },
};

module.exports = config;
