require('ts-node/register');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  username: process.env.DB_USER,
  password: "",
  database: process.env.DB,
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT
};
