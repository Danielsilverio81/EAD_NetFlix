require("dotenv").config();
module.exports = {
  development: {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
};
