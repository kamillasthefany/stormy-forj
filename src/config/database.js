require('dotenv').config();

module.exports = {
  dialect: "postgres",
  host: process.env.HOST,
  username: process.env.USER,
  database: 'daghftvfkfcgb4',
  password: process.env.PASSWORD,
  port: 5432,
  define: {
    timestamps: true,
    underscored: true,
  },

};

